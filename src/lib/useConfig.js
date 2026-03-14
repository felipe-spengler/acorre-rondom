import { useState, useEffect } from 'react';
import { pb } from './pocketbase';

export const useConfig = (chaves = []) => {
    const [config, setConfig] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchConfigs = async () => {
            try {
                // Se chaves estiver vazio, pega tudo
                const records = await pb.collection('configuracoes').getFullList();
                const configMap = {};
                records.forEach(r => {
                    configMap[r.chave] = r.valor;
                });
                setConfig(configMap);
            } catch (err) {
                console.error("Erro ao buscar configurações:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchConfigs();
    }, []);

    // Função para pegar valor com fallback
    const getVal = (chave, fallback = "") => {
        return config[chave] || fallback;
    };

    return { config, getVal, loading };
};
