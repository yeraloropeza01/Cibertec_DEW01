import { useState } from 'react';
import './App.css';
import Header from './componentes/Header.jsx';
import MainElige from './componentes/MainElige.jsx';
import Main from './componentes/Main.jsx';
import ParteFooter from './componentes/Footer.jsx';
import Servicios from './componentes/Servicios.jsx';
import Promociones from './componentes/Promociones.jsx';

function App() {
  const [mostrarElige, setMostrarElige] = useState(false);
  const [mostrarPagina, setMostrarPagina] = useState('');
  
  return (
    <div className="App">
      <Header mostrarPagina={(page) => setMostrarPagina(page)} />
      {
        {
          ''          : <Main/>,
          'marcas'    : <MainElige />,
          'servicios' : <Servicios />,
          'promos'    : <Promociones />
        }[mostrarPagina]
      }
      <ParteFooter />
    </div>
  );
}

export default App;