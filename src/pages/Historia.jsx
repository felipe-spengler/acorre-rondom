import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { pb, getFileUrl } from '../lib/pocketbase';

const Historia = () => {
    const [historia, setHistoria] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchHistoria = async () => {
            try {
                // Tenta buscar o primeiro registro de história cadastrado
                const record = await pb.collection('historia').getFirstListItem('');
                setHistoria(record);
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

    if (!historia) {
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
                            {historia.titulo || "NOSSA HISTÓRIA"}
                        </motion.h1>
                        <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
                    </div>

                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="glass p-8 md:p-12 rounded-[2rem] border border-white/10"
                    >
                        {/* Texto Completo */}
                        <div className="prose prose-invert prose-primary max-w-none text-gray-300 text-lg leading-relaxed mb-12">
                            {historia.texto ? (
                                <div dangerouslySetInnerHTML={{ __html: historia.texto }} />
                            ) : (
                                <p>O texto da história será exibido aqui.</p>
                            )}
                        </div>

                        {/* Galeria de Imagens da História */}
                        {historia.imagens && Array.isArray(historia.imagens) && historia.imagens.length > 0 && (
                            <div className="mt-12">
                                <h3 className="text-2xl font-bold mb-6 italic text-white flex items-center gap-2">GALERIA HISTÓRICA</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                                    {historia.imagens.map((img, idx) => (
                                        <div key={idx} className="relative aspect-video sm:aspect-square overflow-hidden rounded-xl border border-white/10 group">
                                            <img 
                                                src={getFileUrl(historia, img)} 
                                                alt={`Galeria Histórica ${idx + 1}`} 
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                        
                        {/* Se por acaso for um arquivo só em vez de array (caso de mudança no maxSelect) */}
                        {historia.imagens && !Array.isArray(historia.imagens) && (
                            <div className="mt-12">
                                <h3 className="text-2xl font-bold mb-6 italic text-white flex items-center gap-2">GALERIA HISTÓRICA</h3>
                                <img 
                                    src={getFileUrl(historia, historia.imagens)} 
                                    alt="História" 
                                    className="w-full object-cover rounded-xl border border-white/10"
                                />
                            </div>
                        )}
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Historia;
