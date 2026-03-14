import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

import { useConfig } from '../lib/useConfig';

const Inscricoes = () => {
    const { getVal } = useConfig();
    const iframeUrl = getVal('url_iframe_inscricoes', 'https://esportivo.techinteligente.site/club-home/acorre/explore?sport=Corrida');

    return (
        <div className="pt-24 min-h-screen bg-dark">
            {/* ... restante do header ... */}
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

                        <iframe
                            src={iframeUrl}
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
                            href={iframeUrl}
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
