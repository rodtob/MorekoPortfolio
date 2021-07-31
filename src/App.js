import './App.css';
import {Switch, Route, useLocation} from "react-router-dom";
import Header from './components/Header/Header';
import MiMusica from './components/Mimusica/Mimusica'
import Dsonoro from './components/Dsonoro/Dsonoro'
import Productions from './components/Productions/Productions'
import AboutMe from './components/AboutMe/AboutMe'
import NavBar from './components/NavBar/NavBar';
import Dj from './components/Dj/Dj';
import MixMaster from './components/MixMaster/MixMaster';
import Footer from './components/Footer/Footer';
import { useEffect, useState } from 'react';


function App() {

  let [pageBackground, setBackground] = useState("")
  let location = useLocation();

  useEffect(()=>{
    const styleBackground = ()=> location.pathname === "/aboutme" ?  setBackground("aboutMeBack") : setBackground("");
    styleBackground()
  },
  [location.pathname])
 

  return (
    <div className={`App ${pageBackground}`}>
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
      <Footer/>
    </div>
  );
}

export default App;
