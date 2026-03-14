import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart, Activity, Users, CheckCircle, Phone, ExternalLink } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { useConfig } from '../lib/useConfig';
import { pb, getFileUrl } from '../lib/pocketbase';

const ProjetoMovimentoSaude = () => {
    const { getVal, getFile, loading: configLoading } = useConfig('projeto_saude_config');
    const [recursos, setRecursos] = useState([]);
    const [objetivos, setObjetivos] = useState([]);
    const [loadingData, setLoadingData] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [recRes, objRes] = await Promise.all([
                    pb.collection('projeto_saude_recursos').getFullList({ sort: 'ordem' }),
                    pb.collection('projeto_saude_objetivos').getFullList({ sort: 'ordem' })
                ]);
                setRecursos(recRes);
                setObjetivos(objRes);
            } catch (err) {
                console.error("Erro ao carregar dados do projeto:", err);
            } finally {
                setLoadingData(false);
            }
        };
        fetchData();
    }, []);

    const renderIcon = (iconName) => {
        const IconComponent = LucideIcons[iconName];
        return IconComponent ? <IconComponent className="text-primary" size={32} /> : <Activity className="text-primary" size={32} />;
    };

    if (configLoading || loadingData) {
        return (
            <div className="pt-24 min-h-screen bg-dark flex items-center justify-center">
                <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    return (
        <div className="pt-24 min-h-screen bg-dark">
            {/* Hero Section */}
            <section className="py-20 px-4 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-3xl rounded-full translate-x-1/2 -z-10"></div>

                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="flex-1 text-center lg:text-left">
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="inline-block px-4 py-1 rounded-full border border-primary text-primary text-sm font-bold mb-6"
                            >
                                INICIATIVA AcorreRondon
                            </motion.span>
                            <motion.h1
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="text-5xl md:text-7xl font-black italic tracking-tighter mb-8 leading-none"
                            >
                                {getVal('hero_titulo').split('\n').map((line, i) => (
                                    <span key={i} className={i === 1 ? "text-primary italic" : ""}>
                                        {line} {i === 0 && <br />}
                                    </span>
                                ))}
                            </motion.h1>
                            <p className="text-xl text-gray-400 mb-10 max-w-xl">
                                {getVal('hero_subtitulo')}
                            </p>
                            <motion.a
                                href={`https://wa.me/55${getVal('coordenadora_whatsapp').replace(/\D/g, '')}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-block bg-primary text-black px-10 py-4 rounded-2xl font-black italic tracking-wider hover:bg-primary-light transition-all"
                            >
                                SAIBA COMO PARTICIPAR
                            </motion.a>
                        </div>
                        <div className="flex-1 w-full max-w-2xl">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="relative rounded-3xl overflow-hidden glass border border-white/10 aspect-video shadow-2xl"
                            >
                                <img
                                    src={getFile('hero_imagem') || "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&q=80&w=1200"}
                                    alt="Atletas treinando"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent"></div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-24 px-4 bg-white/5">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {recursos.map((feature, index) => (
                            <motion.div
                                key={feature.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="flex flex-col items-center text-center p-8 glass rounded-3xl border border-white/5 hover:border-primary/30 transition-all group"
                            >
                                <div className="mb-6 p-4 bg-white/5 rounded-2xl group-hover:bg-primary/10 transition-colors">
                                    {renderIcon(feature.icone)}
                                </div>
                                <h3 className="text-2xl font-bold mb-4">{feature.titulo}</h3>
                                <p className="text-gray-400 leading-relaxed">
                                    {feature.descricao}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Details Section */}
            <section className="py-24 px-4">
                <div className="max-w-4xl mx-auto glass rounded-[3rem] p-12 border border-white/10">
                    <h2 className="text-3xl font-black italic mb-8 flex items-center gap-4 uppercase tracking-tighter">
                        <CheckCircle className="text-primary" /> {getVal('objetivos_titulo')}
                    </h2>
                    <div className="space-y-6 text-lg text-gray-300">
                        <p>
                            {getVal('objetivos_introducao')}
                        </p>
                        <ul className="space-y-4">
                            {objetivos.map((obj) => (
                                <li key={obj.id} className="flex gap-4">
                                    <span className="h-2 w-2 bg-primary rounded-full mt-3 flex-shrink-0"></span>
                                    <div>{obj.texto}</div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-16 px-4 mb-20">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-black italic mb-8 uppercase tracking-widest">DÚVIDAS SOBRE O PROJETO?</h2>
                    <div className="glass p-10 rounded-[3rem] border border-white/10 inline-block">
                        <p className="text-gray-400 mb-4 uppercase tracking-widest font-bold">Fale com a Coordenadora</p>
                        <h3 className="text-2xl font-black mb-6">{getVal('coordenadora_nome')}</h3>
                        <a 
                            href={`https://wa.me/55${getVal('coordenadora_whatsapp').replace(/\D/g, '')}`} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 bg-primary text-black px-8 py-4 rounded-2xl font-black hover:bg-primary-light transition-all"
                        >
                            <Phone size={20} /> {getVal('coordenadora_whatsapp')}
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProjetoMovimentoSaude;
