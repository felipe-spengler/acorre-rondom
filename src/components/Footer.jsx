import { Link } from 'react-router-dom';
import { Instagram, Facebook, Zap, Mail, Phone } from 'lucide-react';
import logoImg from '../assets/logo.jpg';

const Footer = () => {
    return (
        <footer className="bg-dark-lighter border-t border-white/5 pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-2">
                        <Link to="/" className="flex items-center space-x-3 mb-6 group">
                            <div className="w-12 h-12 rounded-xl overflow-hidden border-2 border-primary group-hover:scale-110 transition-transform">
                                <img src={logoImg} alt="AcorreRondon Logo" className="w-full h-full object-cover" />
                            </div>
                            <span className="text-3xl font-black tracking-tighter italic">AcorreRondon</span>
                        </Link>
                        <p className="text-gray-400 max-w-sm mb-8 leading-relaxed">
                            O maior grupo de corrida de Marechal Cândido Rondon e região. Transformando vidas através do esporte e da superação.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://www.instagram.com/acorrerondon/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary hover:text-black transition-all">
                                <Instagram size={20} />
                            </a>
                            <a href="https://www.facebook.com/acorre.rondon.1/?locale=pt_BR" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary hover:text-black transition-all">
                                <Facebook size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 uppercase tracking-widest text-primary">Navegação</h4>
                        <ul className="space-y-4">
                            <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Início</Link></li>
                            <li><Link to="/noticias" className="text-gray-400 hover:text-white transition-colors">Notícias</Link></li>
                            <li><Link to="/diretoria" className="text-gray-400 hover:text-white transition-colors">Diretoria</Link></li>
                            <li><Link to="/inscricoes" className="text-gray-400 hover:text-white transition-colors">Inscrições</Link></li>
                            <li><Link to="/projeto-saude" className="text-gray-400 hover:text-white transition-colors">Projeto Saúde</Link></li>
                            <li><Link to="/resultados" className="text-gray-400 hover:text-white transition-colors">Resultados</Link></li>
                            <li><Link to="/contato" className="text-gray-400 hover:text-white transition-colors">Contato</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 uppercase tracking-widest text-primary">Contato</h4>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 text-gray-400">
                                <Mail size={18} className="text-primary" />
                                <span>contato@acorrerondon.com</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <Phone size={18} className="text-primary" />
                                <span>(45) 9911-6751</span>
                            </li>
                            <li className="text-gray-400 italic mt-4">
                                Rua Sete de Setembro, nº 945, Centro <br />
                                Marechal Cândido Rondon - PR
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-10 flex flex-col md:row justify-between items-center gap-4 text-sm text-gray-500">
                    <p>© 2026 AcorreRondon. Todos os direitos reservados.</p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-white">Privacidade</a>
                        <a href="#" className="hover:text-white">Termos</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
