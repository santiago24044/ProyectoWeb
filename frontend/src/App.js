import "bootstrap/dist/css/bootstrap.min.css";
import Usuarios from "./Usuarios"; // Importamos el componente de usuarios
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      {/* Sección principal donde mostramos Usuarios */}
      <main>
        <h1>Lista de Usuarios</h1>
        <Usuarios />  
      </main>
    </div>
  );
}

export default App;
