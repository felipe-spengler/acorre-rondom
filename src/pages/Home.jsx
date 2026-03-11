import { motion } from 'framer-motion';
import { ArrowRight, Trophy, Users, Calendar, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImg from '../assets/hero.png';
import shoesImg from '../assets/shoes.png';

const Home = () => {
    return (
        <div className="relative">
            {/* Hero Section */}
            <section className="relative h-screen flex items-center overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={heroImg}
                        alt="Runner"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-hero-gradient"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl"
                    >
                        <span className="inline-block bg-primary px-3 py-1 text-xs font-black uppercase tracking-widest text-black mb-6">
                            Temporada 2026
                        </span>
                        <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter leading-none mb-6">
                            DESAFIE O SEU <br />
                            <span className="text-primary italic">PRÓPRIO RITMO</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-xl">
                            Mais do que uma corrida, uma experiência urbana. Una-se a experiência única de superação, resistência e muita adrenalina.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/inscricoes" className="flex items-center justify-center gap-2 bg-primary text-black px-10 py-5 rounded-full font-black text-lg hover:bg-primary-light transition-all transform hover:scale-105">
                                INSCREVA-SE JÁ <ArrowRight size={20} />
                            </Link>
                            <button className="flex items-center justify-center gap-2 border-2 border-white/20 hover:border-white px-10 py-4 rounded-full font-bold text-lg transition-all">
                                CONHEÇA AS PROVAS
                            </button>
                        </div>
                    </motion.div>
                </div>

                {/* Floating Stats */}
                {/* 
                <div className="absolute bottom-10 left-10 hidden xl:flex gap-12 z-10 px-10 py-6 glass rounded-2xl">
                    <div className="flex flex-col">
                        <span className="text-3xl font-black text-primary italic">15K+</span>
                        <span className="text-xs uppercase tracking-widest text-gray-400">Atletas</span>
                    </div>
                    <div className="w-[1px] bg-white/10"></div>
                    <div className="flex flex-col">
                        <span className="text-3xl font-black text-primary italic">12</span>
                        <span className="text-xs uppercase tracking-widest text-gray-400">Provas/Ano</span>
                    </div>
                    <div className="w-[1px] bg-white/10"></div>
                    <div className="flex flex-col">
                        <span className="text-3xl font-black text-primary italic">R$ 50K</span>
                        <span className="text-xs uppercase tracking-widest text-gray-400">Em Prêmios</span>
                    </div>
                </div>
                */}
            </section>

            {/* Features/Highlights */}
            <section className="py-24 bg-dark">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-6 border border-white/10">
                                <Trophy className="text-primary w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Competição de Elite</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Percursos certificados e cronometragem oficial para quem busca performance.
                            </p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-6 border border-white/10">
                                <Users className="text-primary w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Comunidade Ativa</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Grupos de treino semanais e suporte exclusivo para nossos atletas inscritos.
                            </p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-6 border border-white/10">
                                <Calendar className="text-primary w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Calendário Anual</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Eventos mensais em diferentes cenários, de trilhas a grandes centros urbanos.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* About/Detail Section */}
            <section className="py-24 bg-dark-lighter border-y border-white/5 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2 relative">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="relative z-10"
                            >
                                <img src={shoesImg} alt="Shoes" className="rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" />
                            </motion.div>
                            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
                        </div>
                        <div className="lg:w-1/2">
                            <h2 className="text-5xl font-black italic tracking-tighter mb-8 leading-tight">
                                VIVA A JORNADA DO <br />
                                <span className="text-primary">CORREDOR</span>
                            </h2>
                            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                                Não é sobre o relógio, é sobre a sensação de cruzar a linha. Nossa estrutura é pensada para que você se preocupe apenas com seu próximo passo, cercado por uma comunidade que vibra na mesma frequência.
                            </p>
                            <ul className="space-y-4 mb-10">
                                <li className="flex items-center gap-4">
                                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                                    <span className="text-gray-200">Suporte e incentivo em todo o percurso</span>
                                </li>
                                <li className="flex items-center gap-4">
                                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                                    <span className="text-gray-200">Momentos compartilhados com quem ama o esporte</span>
                                </li>
                            </ul>
                            <a
                                href="https://www.instagram.com/acorrerondon/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary font-black flex items-center gap-2 hover:gap-4 transition-all"
                            >
                                VER FOTOS DA COMUNIDADE <ArrowRight size={20} />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 bg-primary">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-5xl md:text-7xl font-black text-black italic tracking-tighter mb-8 italic">
                        PRONTO PARA LARGAR?
                    </h2>
                    <p className="text-xl text-black/80 font-bold mb-12">
                        As vagas para o Circuito Outono já estão disponíveis. Não perca seu lugar no grid.
                    </p>
                    <Link to="/inscricoes" className="inline-block bg-black text-white px-12 py-6 rounded-full font-black text-xl hover:bg-dark-lighter transition-all transform hover:scale-110">
                        GARANTIR MINHA VAGA
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
