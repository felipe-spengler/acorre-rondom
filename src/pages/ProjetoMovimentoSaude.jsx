import { motion } from 'framer-motion';
import { Heart, Activity, Users, CheckCircle } from 'lucide-react';

const ProjetoMovimentoSaude = () => {
    const features = [
        {
            icon: <Heart className="text-primary" size={32} />,
            title: "Qualidade de Vida",
            description: "Foco no bem-estar físico e mental através da prática regular de exercícios físicos e corrida de rua."
        },
        {
            icon: <Activity className="text-primary" size={32} />,
            title: "Treinos Orientados",
            description: "Acompanhamento profissional para garantir que você evolua com segurança e eficiência."
        },
        {
            icon: <Users className="text-primary" size={32} />,
            title: "Inclusão Social",
            description: "Um espaço aberto para todas as idades e níveis de condicionamento físico participarem."
        }
    ];

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
                                PROJETO <br />
                                <span className="text-primary">MOVIMENTO E SAÚDE</span>
                            </motion.h1>
                            <p className="text-xl text-gray-400 mb-10 max-w-xl">
                                Promovendo a saúde e o bem-estar da comunidade através do atletismo e da integração social.
                            </p>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-primary text-black px-10 py-4 rounded-2xl font-black italic tracking-wider hover:bg-primary-light transition-all"
                            >
                                SAIBA COMO PARTICIPAR
                            </motion.button>
                        </div>
                        <div className="flex-1 w-full max-w-2xl">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="relative rounded-3xl overflow-hidden glass border border-white/10 aspect-video shadow-2xl"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&q=80&w=1200"
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
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="flex flex-col items-center text-center p-8 glass rounded-3xl border border-white/5 hover:border-primary/30 transition-all group"
                            >
                                <div className="mb-6 p-4 bg-white/5 rounded-2xl group-hover:bg-primary/10 transition-colors">
                                    {feature.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                                <p className="text-gray-400 leading-relaxed">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Details Section */}
            <section className="py-24 px-4">
                <div className="max-w-4xl mx-auto glass rounded-[3rem] p-12 border border-white/10">
                    <h2 className="text-3xl font-black italic mb-8 flex items-center gap-4">
                        <CheckCircle className="text-primary" /> OBJETIVOS DO PROJETO
                    </h2>
                    <div className="space-y-6 text-lg text-gray-300">
                        <p>
                            O <strong>Projeto Movimento e Saúde</strong> é uma realização da AcorreRondon que visa democratizar o acesso à prática esportiva orientada em nossa cidade.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex gap-4">
                                <span className="h-2 w-2 bg-primary rounded-full mt-3 flex-shrink-0"></span>
                                <div>Estimular hábitos saudáveis e combater o sedentarismo.</div>
                            </li>
                            <li className="flex gap-4">
                                <span className="h-2 w-2 bg-primary rounded-full mt-3 flex-shrink-0"></span>
                                <div>Oferecer suporte técnico para iniciantes no atletismo.</div>
                            </li>
                            <li className="flex gap-4">
                                <span className="h-2 w-2 bg-primary rounded-full mt-3 flex-shrink-0"></span>
                                <div>Fortalecer o espírito de comunidade entre os participantes.</div>
                            </li>
                            <li className="flex gap-4">
                                <span className="h-2 w-2 bg-primary rounded-full mt-3 flex-shrink-0"></span>
                                <div>Preparar atletas para competições locais e regionais.</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProjetoMovimentoSaude;
