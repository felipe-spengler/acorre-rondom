import { useState, useEffect } from 'react';
import { pb, getFileUrl } from './pocketbase';

// Cache global para evitar múltiplas requisições simultâneas
let cachedConfig = null;
let fetchPromise = null;

export const useConfig = (collection = 'configuracoes') => {
    const [configRecords, setConfigRecords] = useState(cachedConfig || {});
    const [loading, setLoading] = useState(!cachedConfig);

    useEffect(() => {
        // Se já temos o cache, não precisamos buscar novamente
        // (A menos que queiramos um sistema de revalidação, mas para config estática isso resolve o erro do console)
        if (cachedConfig) {
            setLoading(false);
            return;
        }

        const fetchConfigs = async () => {
            try {
                // Se não há uma busca em andamento, criamos uma
                if (!fetchPromise) {
                    fetchPromise = (async () => {
                        const records = await pb.collection(collection).getFullList();
                        const recordMap = {};
                        records.forEach(r => {
                            recordMap[r.chave] = r;
                        });
                        cachedConfig = recordMap;
                        return recordMap;
                    })();
                }

                // Todos esperam pela mesma promessa que resolve o mapa pronto
                const resultMap = await fetchPromise;
                setConfigRecords(resultMap);
            } catch (err) {
                // Silencia erros de cancelamento (comum no PocketBase quando há chamadas duplas)
                if (err?.isAbort) {
                    return;
                }
                console.error(`Erro ao buscar configurações em ${collection}:`, err);
                // Em caso de erro real, permite tentar novamente na próxima montagem
                fetchPromise = null;
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


