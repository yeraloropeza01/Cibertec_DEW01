import './App.css';
import Header from './componentes/Header.jsx';
import ParteMainElige from './componentes/MainElige.jsx';
import ParteMain from './componentes/Main.jsx';
import ParteFooter from './componentes/Footer.jsx';

function App() {
  return (
    <div className="App">
      <Header/>
      <ParteMainElige/>
      <ParteMain/>
      
      <ParteFooter/> 
    </div>
  );
}

export default App;
