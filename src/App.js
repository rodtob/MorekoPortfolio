import './App.css';
import {Switch, Route} from "react-router-dom";
import {useState, useRef} from 'react';
import Menu from './components/Menu/Menu'
import Hamburguesa from './components/Hamburguesa/Hamburguesa'
import Header from './components/Header/Header';
import MiMusica from './components/Mimusica/Mimusica'
import Pentagono from './components/Pentagono/Pentagono'

function App() {


  return (
    <div className="App" >
      <nav>
        <Menu/>
        <Hamburguesa/>
      </nav>
      <section className='main'>

    <Pentagono/>
      <Switch>


        <Route exact path="/">
            {/* <Header/> */}
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
