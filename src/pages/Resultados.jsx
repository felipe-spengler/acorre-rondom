import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const Resultados = () => {
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
                        VEJA OS <span className="text-primary">RESULTADOS</span>
                    </motion.h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Confira o desempenho dos atletas e celebre as grandes conquistas em nossas provas.
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
                        className="glass rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative h-[700px] md:h-[900px] lg:h-[1000px]"
                    >
                        {/* Placeholder / Loading State for the Iframe */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center -z-10">
                            <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4"></div>
                            <p className="text-gray-500 font-bold">Carregando portal de resultados...</p>
                        </div>

                        <iframe
                            src="https://esportivo.techinteligente.site/races/63/results"
                            className="w-full h-full border-0"
                            style={{ minWidth: '100%' }}
                            title="Portal de Resultados"
                            allowFullScreen
                        ></iframe>
                    </motion.div>

                    <div className="mt-8 flex justify-center">
                        <a
                            href="https://esportivo.techinteligente.site/races/63/results"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors font-medium"
                        >
                            Não consegue ver os resultados? Abrir em nova aba <ExternalLink size={16} />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Resultados;
