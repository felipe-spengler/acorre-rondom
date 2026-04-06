import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Inscricoes from './pages/Inscricoes';
import Contato from './pages/Contato';
import Noticias from './pages/Noticias';
import Diretoria from './pages/Diretoria';
import ProjetoMovimentoSaude from './pages/ProjetoMovimentoSaude';
import Resultados from './pages/Resultados';
import NoticiaDetalhe from './pages/NoticiaDetalhe';
import Historia from './pages/Historia';

import ScrollToTop from './components/ScrollToTop';
import { pb } from './lib/pocketbase';

const AdminRedirect = () => {
  window.location.href = `${pb.baseUrl}/_/`;
  return null;
};


function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-dark text-white font-outfit">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/inscricoes" element={<Inscricoes />} />
            <Route path="/noticias" element={<Noticias />} />
            <Route path="/noticia/:id" element={<NoticiaDetalhe />} />
            <Route path="/historia" element={<Historia />} />
            <Route path="/diretoria" element={<Diretoria />} />
            <Route path="/projeto-saude" element={<ProjetoMovimentoSaude />} />
            <Route path="/resultados" element={<Resultados />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/admin" element={<AdminRedirect />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
