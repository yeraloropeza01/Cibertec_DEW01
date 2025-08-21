import logo from './logo.svg';
import './App.css';
import Header_menu from './componentes/Header_menu.jsx';


import ParteFooter from './componentes/Footer';

function App() {
  return (
    <div className="App">
      <Header_menu/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>Hola mundo</h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <ParteFooter/> 
    </div>
  );
}

export default App;
