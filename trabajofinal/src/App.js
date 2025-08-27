import { useState } from 'react';
import './App.css';
import Header from './componentes/Header.jsx';
import ParteMainElige from './componentes/MainElige.jsx';
import ParteMain from './componentes/Main.jsx';
import ParteFooter from './componentes/Footer.jsx';
import Servicios from './componentes/Servicios.jsx';

function App() {
  const [mostrarElige, setMostrarElige] = useState(false);
  const [mostrarServicios, setMostrarServicios] = useState(false);
  
  return (
    <div className="App">
      <Header onServicio={() => setMostrarServicios(true)} />
      {mostrarServicios ? (
        <Servicios />
      ) : mostrarElige ? (
        <ParteMainElige />
      ) 
      : (
        <ParteMain onElegir={() => setMostrarElige(true)} />
      )}
      <ParteFooter />
    </div>
  );
}

export default App;