import logo from './logo.svg';
import './App.css';
import Cabecera from './Partes/Cabecera/Cabecera';
import Pancarta from './Partes/Pancarta/Pancarta';
import Fichas from './Partes/Fichas/Fichas';
import Piedepagina from './Partes/Piedepagina/Piedepagina';
function App() {
  return (
    <div className="App">
        <Cabecera />
        <main>
            <Pancarta />
            <Fichas />
        </main>
        <Piedepagina />
    </div>
  );
}

export default App;
