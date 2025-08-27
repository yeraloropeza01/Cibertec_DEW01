import { useState } from 'react';
import './App.css';
import Header from './componentes/Header.jsx';
import MainElige from './componentes/MainElige.jsx';
import Main from './componentes/Main.jsx';
import ParteFooter from './componentes/Footer.jsx';
import Servicios from './componentes/Servicios.jsx';
import Promociones from './componentes/Promociones.jsx';
import RegistroUsuario from './componentes/RegistroUsuario.jsx';
import RegistroVehiculo from './componentes/RegistroVehiculo.jsx';
import ListaVehiculos from './componentes/ListaVehiculo.jsx';
import { GlobalProvider } from './GlobalContext.jsx';


function App() {
  const [mostrarPagina, setMostrarPagina] = useState('');
  
  return (
    <GlobalProvider>
    <div className="App">
      <Header mostrarPagina={(page) => setMostrarPagina(page)} />
      {
        {
          ''                  : <Main mostrarPagina={ (page) => setMostrarPagina(page) }  />,
          'marcas'            : <MainElige />,
          'servicios'         : <Servicios />,
          'promos'            : <Promociones />,
          'registro'          : <RegistroUsuario mostrarPagina={ (page) => setMostrarPagina(page) } />,
          'registro_vehiculo' : <RegistroVehiculo mostrarPagina={ (page) => setMostrarPagina(page) } />,
          'lista_vehiculos'   : <ListaVehiculos />
        }[mostrarPagina]
      }
      <ParteFooter />
    </div>
    </GlobalProvider>
  );
}

export default App;