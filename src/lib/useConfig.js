import { useState, useEffect } from 'react';
import { pb } from './pocketbase';

export const useConfig = (chaves = []) => {
    const [configRecords, setConfigRecords] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchConfigs = async () => {
            try {
                const records = await pb.collection('configuracoes').getFullList();
                const recordMap = {};
                records.forEach(r => {
                    recordMap[r.chave] = r;
                });
                setConfigRecords(recordMap);
            } catch (err) {
                console.error("Erro ao buscar configurações:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchConfigs();
    }, []);

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

