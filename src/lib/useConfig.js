import { useState, useEffect } from 'react';
import { pb, getFileUrl } from './pocketbase';

export const useConfig = (collection = 'configuracoes') => {
    const [configRecords, setConfigRecords] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchConfigs = async () => {
            try {
                const records = await pb.collection(collection).getFullList();
                const recordMap = {};
                records.forEach(r => {
                    recordMap[r.chave] = r;
                });
                setConfigRecords(recordMap);
            } catch (err) {
                console.error(`Erro ao buscar configurações em ${collection}:`, err);
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

