import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { pb, getFileUrl } from '../lib/pocketbase';

const Historia = () => {
    const [historias, setHistorias] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchHistoria = async () => {
            try {
                // Busca todos os blocos de história cadastrados em ordem de criação
                const records = await pb.collection('historia').getFullList({
                    sort: 'created',
                });
                setHistorias(records);
            } catch (err) {
                console.error("Erro ao buscar história:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchHistoria();
    }, []);

    if (loading) {
        return (
            <div className="pt-24 min-h-screen bg-dark flex items-center justify-center">
                <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    if (historias.length === 0) {
        return (
            <div className="pt-24 min-h-screen bg-dark flex flex-col items-center justify-center px-4">
                <h2 className="text-3xl font-bold mb-6 text-white text-center">Nossa história ainda não foi contada.</h2>
                <p className="text-gray-400 text-center">Acesse o painel de admin e crie um registro na coleção "historia".</p>
            </div>
        );
    }

    return (
        <div className="pt-24 min-h-screen bg-dark">
            <section className="py-16 px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-7xl font-black italic tracking-tighter mb-6 uppercase"
                        >
                            NOSSA HISTÓRIA
                        </motion.h1>
                        <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
                    </div>

                    <div className="space-y-12">
                        {historias.map((bloco, index) => (
                            <motion.div 
                                key={bloco.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="glass p-8 md:p-12 rounded-[2rem] border border-white/10"
                            >
                                {/* Título do Bloco */}
                                {bloco.titulo && (
                                    <h2 className="text-3xl font-bold italic text-white mb-6 border-l-4 border-primary pl-4">{bloco.titulo}</h2>
                                )}

                                {/* Texto Completo */}
                                <div className="prose prose-invert prose-primary max-w-none text-gray-300 text-lg leading-relaxed mb-8">
                                    {bloco.texto ? (
                                        <div dangerouslySetInnerHTML={{ __html: bloco.texto }} />
                                    ) : (
                                        <p>Nenhum texto informado.</p>
                                    )}
                                </div>

                                {/* Galeria de Imagens da História */}
                                {(bloco.imagens && Array.isArray(bloco.imagens) && bloco.imagens.length > 0) ? (
                                    <div className="mt-8">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                            {bloco.imagens.map((img, idx) => (
                                                <div key={idx} className="relative aspect-video sm:aspect-square overflow-hidden rounded-xl border border-white/10 group">
                                                    <img 
                                                        src={getFileUrl(bloco, img)} 
                                                        alt={`${bloco.titulo || 'História'} - anexo ${idx + 1}`} 
                                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ) : (
                                    bloco.imagens && !Array.isArray(bloco.imagens) && (
                                        <div className="mt-8">
                                            <div className="relative aspect-video sm:aspect-square overflow-hidden rounded-xl border border-white/10 group">
                                                <img 
                                                    src={getFileUrl(bloco, bloco.imagens)} 
                                                    alt={bloco.titulo || 'História'} 
                                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                />
                                            </div>
                                        </div>
                                    )
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Historia;
