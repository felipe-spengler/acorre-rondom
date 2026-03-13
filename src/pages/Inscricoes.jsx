import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const Inscricoes = () => {
    return (
        <div className="pt-24 min-h-screen bg-dark">
            {/* Header */}
            <section className="py-16 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-black italic tracking-tighter mb-6"
                    >
                        FAÇA SUA <span className="text-primary">INSCRIÇÃO</span>
                    </motion.h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Escolha sua prova, prepare seu tênis e venha desafiar seus limites com a gente.
                    </p>
                </div>
            </section>

            {/* Iframe Section */}
            <section className="pb-24 px-4">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="glass rounded-3xl h-[700px] md:h-[900px] lg:h-[1000px] relative"
                        style={{ overflow: 'hidden' }}
                    >
                        {/* Placeholder / Loading State for the Iframe */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center -z-10">
                            <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4"></div>
                            <p className="text-gray-500 font-bold">Carregando portal de inscrições...</p>
                        </div>

                        {/*
                          Técnica para esconder barras de scroll de iframes cross-origin:
                          - O iframe é intencionalmente MAIS LARGO e MAIS ALTO que o container (+20px)
                            para empurrar as barras de scroll para fora da área visível.
                          - O container com overflow:hidden corta tudo que ultrapassar a borda.
                          - marginTop negativo esconde o menu/header do site externo (70px).
                          - height calc: compensa tanto o menu cortado quanto o scrollbar horizontal.
                        */}
                        <iframe
                            src="https://esportivo.techinteligente.site/club-home/acorre/explore?sport=Corrida"
                            className="border-0"
                            style={{
                                width: 'calc(100% + 20px)',
                                height: 'calc(100% + 70px + 20px)',
                                marginTop: '-70px',
                                display: 'block'
                            }}
                            title="Portal de Inscrições"
                            allowFullScreen
                        ></iframe>
                    </motion.div>

                    <div className="mt-8 flex justify-center">
                        <a
                            href="https://esportivo.techinteligente.site/club-home/acorre/explore?sport=Corrida"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors font-medium"
                        >
                            Não consegue ver o formulário? Abrir em nova aba <ExternalLink size={16} />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Inscricoes;
