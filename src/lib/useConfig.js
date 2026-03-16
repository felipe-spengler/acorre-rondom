import { useState, useEffect } from 'react';
import { pb, getFileUrl } from './pocketbase';

// Cache global para evitar múltiplas requisições simultâneas
let cachedConfigs = {}; // Objeto para armazenar diferentes coleções { 'configuracoes': {...}, 'projeto_saude_config': {...} }
let fetchPromises = {};

export const useConfig = (collection = 'configuracoes') => {
    const [configRecords, setConfigRecords] = useState(cachedConfigs[collection] || {});
    const [loading, setLoading] = useState(!cachedConfigs[collection]);

    useEffect(() => {
        // Se já temos o cache para esta coleção específica, não precisamos buscar novamente
        if (cachedConfigs[collection]) {
            setConfigRecords(cachedConfigs[collection]);
            setLoading(false);
            return;
        }

        const fetchConfigs = async () => {
            try {
                // Se não há uma busca em andamento para ESTA coleção, criamos uma
                if (!fetchPromises[collection]) {
                    fetchPromises[collection] = (async () => {
                        const records = await pb.collection(collection).getFullList();
                        const recordMap = {};
                        records.forEach(r => {
                            recordMap[r.chave] = r;
                        });
                        cachedConfigs[collection] = recordMap;
                        return recordMap;
                    })();
                }

                const resultMap = await fetchPromises[collection];
                setConfigRecords(resultMap);
            } catch (err) {
                if (err?.isAbort) return;
                console.error(`Erro ao buscar configurações em ${collection}:`, err);
                fetchPromises[collection] = null;
            } finally {
                setLoading(false);
            }
        };

        fetchConfigs();
    }, [collection]);


    const getVal = (chave, fallback = "") => {
        return configRecords[chave]?.valor || fallback;
    };

    const getFile = (chave, fallback = null) => {
        const record = configRecords[chave];
        if (!record || !record.arquivo) return fallback;
        return getFileUrl(record, record.arquivo);
    };

    return { getVal, getFile, loading };
};



