import './App.css';
import Header from './componentes/Header';
import ParteMenu from './componentes/Menu';
import ParteFooter from './componentes/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
  
      <ParteMenu/>
      <ParteFooter/> 
    </div>
  );
}

export default App;
