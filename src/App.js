import './App.css';
import {
  Switch,
  Route,
} from "react-router-dom";
import {useState, useRef} from 'react';
import Menu from './components/Menu/Menu'
import Hamburguesa from './components/Hamburguesa/Hamburguesa'
import Header from './components/Header/Header';
import Musica from './components/Musica/Musica'


function App() {

  const [open, setOpen] = useState(false);
  const node = useRef();

  return (
    <div className="App" ref={node}>
      <nav>
        <Menu open={open} setOpen={setOpen}/>
        <Hamburguesa open={open} setOpen={setOpen}/>
      </nav>
      <section className='main'>


      <Switch>


        <Route path="/">
            <Header open={open}/>
        </Route>
        <Route exact path='/music' component={Musica} />
        <Route exact path='/aboutme' />
        
    
      </Switch>
  
      
      
      </section>


      
    </div>
  );
}

export default App;
