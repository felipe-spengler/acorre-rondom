import { motion } from 'framer-motion';
import { User } from 'lucide-react';

import { useState, useEffect } from 'react';
import { pb, getFileUrl } from '../lib/pocketbase';

const Diretoria = () => {
    const [diretoriaItems, setDiretoriaItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDiretoria = async () => {
            try {
                const records = await pb.collection('diretoria').getFullList({
                    sort: 'ordem',
                });
                setDiretoriaItems(records);
            } catch (err) {
                console.error("Erro ao buscar diretoria:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchDiretoria();
    }, []);

    if (loading) {
        return (
            <div className="pt-24 min-h-screen bg-dark flex items-center justify-center">
                <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    const diretoria = diretoriaItems.filter(m => !m.conselho);
    const conselhoFiscal = diretoriaItems.filter(m => m.conselho);



    return (
        <div className="pt-24 min-h-screen bg-dark">
            <section className="py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-7xl font-black italic tracking-tighter mb-6"
                        >
                            NOSSA <span className="text-primary">DIRETORIA</span>
                        </motion.h1>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            Conheça as pessoas responsáveis por conduzir e fortalecer o atletismo em nossa região.
                        </p>
                    </div>

                    <h2 className="text-3xl font-black italic mb-12 border-l-4 border-primary pl-4">DIRETORIA EXECUTIVA</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                        {diretoria.map((membro, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.05 }}
                                className="glass rounded-3xl p-6 border border-white/10 flex items-center gap-6 group hover:border-primary/50 transition-all duration-300"
                            >
                                <div className="w-20 h-20 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-primary/20 transition-colors overflow-hidden shrink-0">
                                    {membro.foto ? (
                                        <img src={membro.id ? getFileUrl(membro, membro.foto) : membro.foto} alt={membro.nome} className="w-full h-full object-cover" />
                                    ) : (
                                        <User className="text-gray-500 group-hover:text-primary transition-colors" size={40} />
                                    )}
                                </div>

                                <div className="flex-1">
                                    <h3 className="font-bold text-lg group-hover:text-primary transition-colors">{membro.nome}</h3>
                                    <p className="text-sm text-gray-400 font-medium uppercase tracking-wider">{membro.cargo}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <h2 className="text-3xl font-black italic mb-12 border-l-4 border-primary pl-4">CONSELHO FISCAL</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {conselhoFiscal.map((membro, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.05 }}
                                className="glass rounded-3xl p-6 border border-white/10 flex items-center gap-6 group hover:border-primary/50 transition-all duration-300"
                            >
                                <div className="w-20 h-20 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-primary/20 transition-colors overflow-hidden shrink-0">
                                    {membro.foto ? (
                                        <img src={membro.id ? getFileUrl(membro, membro.foto) : membro.foto} alt={membro.nome} className="w-full h-full object-cover" />
                                    ) : (
                                        <User className="text-gray-500 group-hover:text-primary transition-colors" size={40} />
                                    )}
                                </div>

                                <div className="flex-1">
                                    <h3 className="font-bold text-lg group-hover:text-primary transition-colors">{membro.nome}</h3>
                                    <p className="text-sm text-gray-400 font-medium uppercase tracking-wider">{membro.cargo}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Diretoria;
