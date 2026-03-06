import { motion } from 'framer-motion';
import { Mail, Phone, Instagram, MapPin, Zap, ExternalLink } from 'lucide-react';

const Contato = () => {
    return (
        <div className="pt-24 min-h-screen bg-dark">
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-6xl md:text-8xl font-black italic tracking-tighter mb-6"
                        >
                            FALE <span className="text-primary">CONOSCO</span>
                        </motion.h1>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                            Estamos prontos para te ajudar com qualquer dúvida sobre nossas provas, treinos ou parcerias.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* WhatsApp Card */}
                        <motion.a
                            href="https://wa.me/5545999999999"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -10 }}
                            className="glass p-10 rounded-3xl border border-white/10 flex flex-col items-center text-center group"
                        >
                            <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 border border-primary/20 group-hover:bg-primary group-hover:text-black transition-all duration-500 shadow-[0_0_30px_rgba(255,77,0,0.1)]">
                                <Phone size={32} />
                            </div>
                            <h3 className="text-2xl font-black uppercase tracking-widest mb-4 italic">WhatsApp</h3>
                            <p className="text-gray-400 mb-6 font-medium">(45) 99999-9999</p>
                            <span className="text-primary font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
                                ABRIR CONVERSA <ExternalLink size={18} />
                            </span>
                        </motion.a>

                        {/* Instagram Card */}
                        <motion.a
                            href="https://www.instagram.com/acorrerondon/"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -10 }}
                            className="glass p-10 rounded-3xl border border-white/10 flex flex-col items-center text-center group"
                        >
                            <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 border border-primary/20 group-hover:bg-primary group-hover:text-black transition-all duration-500 shadow-[0_0_30px_rgba(255,77,0,0.1)]">
                                <Instagram size={32} />
                            </div>
                            <h3 className="text-2xl font-black uppercase tracking-widest mb-4 italic">Instagram</h3>
                            <p className="text-gray-400 mb-6 font-medium">@acorrerondon</p>
                            <span className="text-primary font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
                                SEGUIR AGORA <ExternalLink size={18} />
                            </span>
                        </motion.a>

                        {/* Email Card */}
                        <motion.div
                            whileHover={{ y: -10 }}
                            className="glass p-10 rounded-3xl border border-white/10 flex flex-col items-center text-center group"
                        >
                            <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 border border-primary/20 group-hover:bg-primary group-hover:text-black transition-all duration-500 shadow-[0_0_30px_rgba(255,77,0,0.1)]">
                                <Mail size={32} />
                            </div>
                            <h3 className="text-2xl font-black uppercase tracking-widest mb-4 italic">E-mail</h3>
                            <p className="text-gray-400 mb-6 font-medium">contato@acorrerondon.com.br</p>
                            <span className="text-primary font-bold">RESPONDEMOS EM ATÉ 24H</span>
                        </motion.div>
                    </div>

                    {/* Bottom Info */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="mt-20 glass p-12 rounded-3xl border border-white/10 flex flex-col md:row items-center justify-between gap-8"
                    >
                        <div className="flex items-center gap-6">
                            <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center border border-white/10">
                                <MapPin className="text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-black italic uppercase tracking-widest text-sm text-primary">Localização</h4>
                                <p className="text-lg font-bold">Marechal Cândido Rondon - PR</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-6">
                            <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center border border-white/10">
                                <Zap className="text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-black italic uppercase tracking-widest text-sm text-primary">Treinos Coletivos</h4>
                                <p className="text-lg font-bold">Consulte horários no WhatsApp</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Contato;
