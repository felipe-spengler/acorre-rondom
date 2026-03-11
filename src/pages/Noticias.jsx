import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';

const Noticias = () => {
    const news = [
        {
            id: 1,
            title: "Prepare-se para o nosso próximo grande desafio em Marechal",
            excerpt: "As inscrições estão abertas para a corrida de aniversário da cidade. Venha bater seu recorde pessoal conosco.",
            date: "15 Out 2025",
            author: "Comunicação ACORRE",
            image: "https://images.unsplash.com/photo-1552674650-3a445e00f21e?auto=format&fit=crop&q=80&w=800",
            category: "Eventos"
        },
        {
            id: 2,
            title: "Os benefícios do treino em grupo para corredores amadores",
            excerpt: "Descubra como a motivação coletiva pode transformar sua performance e consistência nos treinos diários.",
            date: "10 Out 2025",
            author: "Departamento Técnico",
            image: "https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?auto=format&fit=crop&q=80&w=800",
            category: "Dicas"
        },
        {
            id: 3,
            title: "ACORRE conquista pódios em maratona regional",
            excerpt: "Nossos atletas deram um show de superação e trouxeram diversos troféus para casa no último final de semana.",
            date: "05 Out 2025",
            author: "Secretaria",
            image: "https://images.unsplash.com/photo-1530143311094-34d807799e8f?auto=format&fit=crop&q=80&w=800",
            category: "Conquistas"
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
                            Fique por dentro de tudo o que acontece no mundo da ACORRE e do atletismo regional.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {news.map((item, index) => (
                            <motion.article
                                key={item.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="glass rounded-3xl overflow-hidden border border-white/10 flex flex-col group cursor-pointer"
                            >
                                <div className="h-48 overflow-hidden relative">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute top-4 left-4 bg-primary text-black text-xs font-bold px-3 py-1 rounded-full">
                                        {item.category}
                                    </div>
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
                                        <span className="flex items-center gap-1"><Calendar size={14} /> {item.date}</span>
                                        <span className="flex items-center gap-1"><User size={14} /> {item.author}</span>
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm mb-6 flex-grow">
                                        {item.excerpt}
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
