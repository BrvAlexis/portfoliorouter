import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Works from './pages/Works';
import Exercices from './pages/Works/Exercices';
import EtudeDeCas from './pages/Works/Etudedecas';
import ProjetsConcrets from './pages/Works/Projetsconcrets';
import Navbar from './components/Navbar';
import './App.css'
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  

  return (
    <BrowserRouter>
     <Navbar />
     <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/works" element={<Works />} />
          <Route path="/works/exercices" element={<Exercices />} />
          <Route path="/works/etudedecas" element={<EtudeDeCas />} />
          <Route path="/works/projetsconcrets" element={<ProjetsConcrets />} />
        </Routes>
      </div>
    </BrowserRouter>
   
  )
}

export default App
