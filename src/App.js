import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Pentagono from './components/Pentagono'

function App() {
  return (
    <div className="App">
      <section className='main'>

      <nav className='navBar'>
            <h1 className='title'>MOREKO</h1>
      </nav>

    <section className='opcion--section'>
      <li><Link data-text='DJ'>DJ</Link></li>
      <li ><Link data-text='Mi musica'>Mimusica</Link></li>
      <li ><Link data-text='Producciones'>Producciones</Link></li>
      <li ><Link data-text='Sound Design'>SoundDesign</Link></li>
      <li ><Link data-text='Mezcla'>Mezcla</Link></li> 
    </section>

      <Pentagono/>



      </section>
      
    </div>
  );
}

export default App;
