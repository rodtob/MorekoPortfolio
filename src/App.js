import './App.css';
import {Switch, Route} from "react-router-dom";
import {useState, useRef} from 'react';
import Menu from './components/Menu/Menu'
import Hamburguesa from './components/Hamburguesa/Hamburguesa'
import Header from './components/Header/Header';
import MiMusica from './components/Mimusica/Mimusica'


function App() {

  const [open, setOpen] = useState(false);

  return (
    <div className="App" >
      <nav>
        <Menu open={open} setOpen={setOpen}/>
        <Hamburguesa open={open} setOpen={setOpen}/>
      </nav>
      <section className='main'>


      <Switch>


        <Route exact path="/">
            <Header open={open}/>
        </Route>
        <Route exact path='/music'>
          <MiMusica/>
        </Route>
        <Route exact path='/dj' component={MiMusica}/>
        
    
      </Switch>
  
      
      
      </section>

      
    </div>
  );
}

export default App;
