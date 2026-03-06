import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Instagram } from 'lucide-react';

const Contato = () => {
    return (
        <div className="pt-24 min-h-screen bg-dark">
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row gap-16">

                        {/* Info Side */}
                        <div className="lg:w-1/2">
                            <motion.h1
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="text-6xl font-black italic tracking-tighter mb-8"
                            >
                                VAMOS <span className="text-primary">CONVERSAR?</span>
                            </motion.h1>
                            <p className="text-xl text-gray-400 mb-12 leading-relaxed">
                                Tem dúvidas sobre os percursos, patrocínios ou treinos coletivos? Nossa equipe está pronta para te atender.
                            </p>

                            <div className="space-y-8">
                                <div className="flex items-start gap-6">
                                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 border border-primary/20">
                                        <Mail className="text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold mb-1">E-mail</h4>
                                        <p className="text-gray-400 italic">contato@acorrerondon.com.br</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6">
                                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 border border-primary/20">
                                        <Phone className="text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold mb-1">WhatsApp</h4>
                                        <p className="text-gray-400 italic">(45) 99999-9999</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6">
                                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 border border-primary/20">
                                        <Instagram className="text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold mb-1">Instagram</h4>
                                        <a
                                            href="https://www.instagram.com/acorrerondon/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-400 hover:text-primary transition-colors italic"
                                        >
                                            @acorrerondon
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Form Side */}
                        <div className="lg:w-1/2">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="glass p-8 md:p-12 rounded-3xl border border-white/10"
                            >
                                <form className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold uppercase tracking-widest text-gray-400">Nome</label>
                                            <input
                                                type="text"
                                                placeholder="Seu nome"
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:border-primary outline-none transition-all"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold uppercase tracking-widest text-gray-400">E-mail</label>
                                            <input
                                                type="email"
                                                placeholder="seu@email.com"
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:border-primary outline-none transition-all"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold uppercase tracking-widest text-gray-400">Assunto</label>
                                        <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:border-primary outline-none transition-all appearance-none cursor-pointer">
                                            <option className="bg-dark">Dúvidas sobre Inscrição</option>
                                            <option className="bg-dark">Patrocínio</option>
                                            <option className="bg-dark">Treinos Coletivos</option>
                                            <option className="bg-dark">Outros</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold uppercase tracking-widest text-gray-400">Mensagem</label>
                                        <textarea
                                            rows="5"
                                            placeholder="Como podemos ajudar?"
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:border-primary outline-none transition-all resize-none"
                                        ></textarea>
                                    </div>
                                    <button className="w-full bg-primary text-black font-black text-lg py-5 rounded-xl hover:bg-primary-light transition-all flex items-center justify-center gap-2 group">
                                        ENVIAR MENSAGEM <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </button>
                                </form>
                            </motion.div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contato;
