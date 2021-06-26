import './App.css';
import {Switch, Route} from "react-router-dom";
import Header from './components/Header/Header';
import MiMusica from './components/Mimusica/Mimusica'
import Dsonoro from './components/Dsonoro/Dsonoro'
import Productions from './components/Productions/Productions'
import AboutMe from './components/AboutMe/AboutMe'
import NavBar from './components/NavBar/NavBar';
import Dj from './components/Dj/Dj';
import MixMaster from './components/MixMaster/MixMaster';

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
        <Route exact path='/aboutme' component={AboutMe}/>
        <Route exact path='/dj' component={Dj}/>
        <Route exact path='/mixmaster' component={MixMaster}/>
      </Switch>
      
      </section>

      
    </div>
  );
}

export default App;
