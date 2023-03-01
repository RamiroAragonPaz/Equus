import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ResponsiveAppBar from './components/NavBar/NavBar';
import Main from './components/pages/Main/Main';
import Nosotros from './components/pages/Nosotros/Nosotros';
import Bodegas from './components/pages/Bodegas/Bodegas';
import Contacto from './components/pages/Contacto/Contacto';
import Redes from './components/pages/Redes/Redes';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ResponsiveAppBar />
        <Routes>
          <Route path='/' element={< Main/>}/>
          <Route path="/Nosotros" element={<Nosotros />} />
          <Route path="/Bodegas" element={<Bodegas />} />
          <Route path="/Contacto" element={<Contacto />} />
          <Route path="/Redes" element={<Redes />} />
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
