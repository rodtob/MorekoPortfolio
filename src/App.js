import './App.css';
import {Switch, Route} from "react-router-dom";
import Header from './components/Header/Header';
import MiMusica from './components/Mimusica/Mimusica'
import Dsonoro from './components/Dsonoro/Dsonoro'
import Productions from './components/Productions/Productions'
import NavBar from './components/NavBar/NavBar';

function App() {


  return (
    <div className="App" >
      <NavBar/>
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
