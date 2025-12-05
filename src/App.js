import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Jogo1 from './pages/Jogo1';
import Jogo2 from './pages/Jogo2';
import Jogo3 from './pages/Jogo3';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <><Navbar> </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jogo1" element={<Jogo1 />} />
        <Route path="/jogo2" element={<Jogo2 />} />
        <Route path="/jogo3" element={<Jogo3 />} />
      </Routes>
    <Footer> </Footer></>
  ); 
}

export default App;
