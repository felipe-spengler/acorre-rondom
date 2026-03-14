import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';

import { useState, useEffect } from 'react';
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

    // Se estiver vazio e não carregando, usar dados de fallback ou mostrar aviso
    const displayNews = news.length > 0 ? news : [
        {
            id: 'fallback-1',
            titulo: "Prepare-se para o nosso próximo grande desafio em Marechal",
            resumo: "As inscrições estão abertas para a corrida de aniversário da cidade. Venha bater seu recorde pessoal conosco.",
            data: "15 Out 2025",
            autor: "Comunicação AcorreRondon",
            imagem: "https://images.unsplash.com/photo-1552674650-3a445e00f21e?auto=format&fit=crop&q=80&w=800",
            categoria: "Eventos"
        }
    ];


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

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {displayNews.map((item, index) => (
                            <motion.article
                                key={item.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="glass rounded-3xl overflow-hidden border border-white/10 flex flex-col group cursor-pointer"
                            >
                                <div className="h-48 overflow-hidden relative">
                                    <img
                                        src={item.id.startsWith('fallback') ? item.imagem : getFileUrl(item, item.imagem)}
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
                        ))}
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Noticias;
