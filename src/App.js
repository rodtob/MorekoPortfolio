import './App.css';
import {Switch, Route} from "react-router-dom";
import Menu from './components/Menu/Menu'
import Hamburguesa from './components/Hamburguesa/Hamburguesa'
import Header from './components/Header/Header';
import MiMusica from './components/Mimusica/Mimusica'
import Dsonoro from './components/Dsonoro/Dsonoro'
import Productions from './components/Productions/Productions'

function App() {


  return (
    <div className="App" >
      <nav>
        <Menu/>
        <Hamburguesa/>
      </nav>

      <section className='main'>

      <Switch>


        <Route exact path="/">
            <Header/>
        </Route>
        <Route exact path='/sdesign'component={Dsonoro}/>
        <Route exact path='/mymusic' component={MiMusica}/>
        <Route exact path='/productions' component={Productions}/>
    
      </Switch>
  
      
      
      </section>

      
    </div>
  );
}

export default App;
