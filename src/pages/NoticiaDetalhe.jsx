import { motion } from 'framer-motion';
import { Calendar, User, ArrowLeft, Tag, Facebook, Twitter, MessageCircle, Share2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { pb, getFileUrl } from '../lib/pocketbase';

const NoticiaDetalhe = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [noticia, setNoticia] = useState(null);
    const [loading, setLoading] = useState(true);

    const shareUrl = window.location.href;
    const shareTitle = noticia?.titulo || 'Confira esta notícia na AcorreRondon';

    const shareOnFacebook = () => {
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, '_blank', 'width=600,height=400');
    };

    const shareOnTwitter = () => {
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`, '_blank', 'width=600,height=400');
    };

    const shareOnWhatsApp = () => {
        window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(shareTitle + ' ' + shareUrl)}`, '_blank');
    };

    useEffect(() => {
        const fetchNoticia = async () => {
            try {
                const record = await pb.collection('noticias').getOne(id);
                setNoticia(record);
            } catch (err) {
                console.error("Erro ao buscar detalhes da notícia:", err);
                // Opcionalmente redirecionar se não encontrar
                // navigate('/noticias');
            } finally {
                setLoading(false);
            }
        };

        fetchNoticia();
    }, [id]);

    if (loading) {
        return (
            <div className="pt-24 min-h-screen bg-dark flex items-center justify-center">
                <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    if (!noticia) {
        return (
            <div className="pt-24 min-h-screen bg-dark flex flex-col items-center justify-center px-4">
                <h2 className="text-3xl font-bold mb-6">Notícia não encontrada</h2>
                <Link to="/noticias" className="bg-primary text-black px-6 py-3 rounded-full font-bold">
                    Voltar para Notícias
                </Link>
            </div>
        );
    }

    return (
        <div className="pt-24 min-h-screen bg-dark">
            {/* Hero Header */}
            <div className="relative h-[50vh] min-h-[400px] w-full overflow-hidden">
                <img
                    src={getFileUrl(noticia, noticia.imagem)}
                    alt={noticia.titulo}
                    className="w-full h-full object-cover brightness-[0.4]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent"></div>
                
                <div className="absolute inset-0 flex items-end">
                    <div className="max-w-4xl mx-auto px-4 w-full pb-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <Link to="/noticias" className="inline-flex items-center gap-2 text-primary font-bold mb-6 hover:translate-x-[-4px] transition-transform">
                                <ArrowLeft size={18} /> VOLTAR PARA NOTÍCIAS
                            </Link>
                            
                            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-300 mb-4">
                                <span className="flex items-center gap-1 bg-white/10 px-3 py-1 rounded-full"><Tag size={14} className="text-primary" /> {noticia.categoria}</span>
                                <span className="flex items-center gap-1"><Calendar size={14} className="text-primary" /> {noticia.data?.split(' ')[0] || noticia.data}</span>
                                <span className="flex items-center gap-1"><User size={14} className="text-primary" /> {noticia.autor}</span>
                            </div>

                            <h1 className="text-4xl md:text-6xl font-black italic tracking-tighter leading-tight">
                                {noticia.titulo}
                            </h1>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <section className="py-16 px-4">
                <div className="max-w-4xl mx-auto">
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="glass p-8 md:p-12 rounded-[2rem] border border-white/10"
                    >
                        {/* Summary / Lead */}
                        <div className="text-xl md:text-2xl text-primary font-medium italic mb-10 leading-relaxed border-l-4 border-primary pl-6">
                            {noticia.resumo}
                        </div>

                        {/* Full Content */}
                        <div className="prose prose-invert prose-primary max-w-none text-gray-300 text-lg leading-relaxed">
                            {noticia.conteudo ? (
                                <div dangerouslySetInnerHTML={{ __html: noticia.conteudo }} />
                            ) : (
                                <div className="space-y-6">
                                    <p>
                                        [O conteúdo completo desta notícia ainda não foi cadastrado no sistema.]
                                    </p>
                                    <p className="text-sm italic text-gray-500">
                                        Dica: Adicione um campo chamado "conteudo" na coleção "noticias" do PocketBase para exibir o texto completo aqui.
                                    </p>
                                </div>
                            )}
                        </div>

                        {/* Social Share / Footer of Article */}
                        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                            <div className="flex items-center gap-4">
                                <span className="text-sm text-gray-500 uppercase font-bold tracking-widest flex items-center gap-2">
                                    <Share2 size={16} className="text-primary" /> Compartilhar
                                </span>
                                <div className="flex gap-3">
                                    <button 
                                        onClick={shareOnFacebook}
                                        title="Compartilhar no Facebook"
                                        className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-all hover:scale-110 active:scale-95"
                                    >
                                        <Facebook size={20} />
                                    </button>
                                    <button 
                                        onClick={shareOnTwitter}
                                        title="Compartilhar no Twitter"
                                        className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#1DA1F2] hover:text-white transition-all hover:scale-110 active:scale-95"
                                    >
                                        <Twitter size={20} />
                                    </button>
                                    <button 
                                        onClick={shareOnWhatsApp}
                                        title="Compartilhar no WhatsApp"
                                        className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-all hover:scale-110 active:scale-95"
                                    >
                                        <MessageCircle size={20} />
                                    </button>
                                </div>
                            </div>
                            
                            <Link to="/noticias" className="text-primary font-black italic flex items-center gap-2 hover:gap-4 transition-all">
                                VER TODAS AS NOTÍCIAS <ArrowLeft size={18} className="rotate-180" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default NoticiaDetalhe;
