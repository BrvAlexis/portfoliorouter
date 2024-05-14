import './App.css'
import './context/theme.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Works from './pages/Works';
import Exercices from './pages/Works/Exercices';
import EtudeDeCas from './pages/Works/Etudedecas';
import ProjetsConcrets from './pages/Works/Projetsconcrets';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';

import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { Container } from 'react-bootstrap';

function App() {
  

  return (
    <ThemeProvider>
    <BrowserRouter>
     <Navbar />
     <main className="mt-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/works" element={<Works />} />
          <Route path="/works/exercices" element={<Exercices />} />
          <Route path="/works/etudedecas" element={<EtudeDeCas />} />
          <Route path="/works/projetsconcrets" element={<ProjetsConcrets />} />
        </Routes>
        
      </main>
      <Footer />
    </BrowserRouter>
    </ThemeProvider>
   
  )
}

export default App
