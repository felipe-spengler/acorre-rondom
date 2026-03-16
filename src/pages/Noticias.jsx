import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { pb, getFileUrl } from '../lib/pocketbase';

const Noticias = () => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const records = await pb.collection('noticias').getFullList({
                    sort: '-data',
                });
                setNews(records);
            } catch (err) {
                console.error("Erro ao buscar notícias:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchNews();
    }, []);

    if (loading) {
        return (
            <div className="pt-24 min-h-screen bg-dark flex items-center justify-center">
                <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

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
                            ÚLTIMAS <span className="text-primary">NOTÍCIAS</span>
                        </motion.h1>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            Fique por dentro de tudo o que acontece no mundo da AcorreRondon e do atletismo regional.
                        </p>
                    </div>

                    {news.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {news.map((item, index) => (
                                <Link 
                                    to={`/noticia/${item.id}`}
                                    key={item.id}
                                >
                                    <motion.article
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="glass rounded-3xl overflow-hidden border border-white/10 flex flex-col group cursor-pointer h-full"
                                    >
                                        <div className="h-48 overflow-hidden relative">
                                            <img
                                                src={getFileUrl(item, item.imagem)}
                                                alt={item.titulo}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                            <div className="absolute top-4 left-4 bg-primary text-black text-xs font-bold px-3 py-1 rounded-full">
                                                {item.categoria}
                                            </div>
                                        </div>
                                        <div className="p-6 flex flex-col flex-grow">
                                            <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
                                                <span className="flex items-center gap-1"><Calendar size={14} /> {item.data?.split(' ')[0] || item.data}</span>
                                                <span className="flex items-center gap-1"><User size={14} /> {item.autor}</span>
                                            </div>
                                            <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                                                {item.titulo}
                                            </h3>
                                            <p className="text-gray-400 text-sm mb-6 flex-grow">
                                                {item.resumo}
                                            </p>
                                            <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase italic">
                                                Ler mais <ArrowRight size={16} />
                                            </div>
                                        </div>
                                    </motion.article>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20 glass rounded-3xl border border-white/10">
                            <p className="text-xl text-gray-500">Nenhuma notícia encontrada no momento.</p>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};


export default Noticias;
