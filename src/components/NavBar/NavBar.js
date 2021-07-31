import Menu from './Menu/Menu'
import React, { useState } from 'react'
import {Link} from "react-router-dom";
import {useLocation} from "react-router-dom";
import Hamburguesa from './Hamburguesa/Hamburguesa'
import styled from 'styled-components'
import logoMoreko from './logoMoreko.png'
import './NavBar.scss'
import i18next from 'i18next'

const DivWrapper = styled.div `
    display:flex;
    flex-direction:row;
    width: 100%;
    height:10vh;
    padding-top:1vh;
    justify-content: space-between;
    align-items:center;
    z-index:10;
    .wrapper--logo{
        display:flex;
    }
    .logoMoreko{
        margin-right: 3vw;
        margin-left: 3vw;
        width: 43px;
        opacity: .7;
        transition: .4s all;
    }
    .logoMoreko:hover{
        opacity:1;  
    }
    .titlePages{
        font-size: .7rem;
        opacity:0.5;
        transition: .4s all;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
    }
    .titlePages:hover{
        opacity:1;
    }
    @media screen and (max-width: 960px){
        position:fixed;
        background-color:#000000eb;
        .titlePages{
            margin-left: 17vw;
            position: unset;
        }
        .wrapper--logo{
            margin-right: 2vw;
            width:100%;
            justify-content: flex-end;
        }
        .logoMoreko{
            margin-right: 0vw;
            margin-left: 0vw;
        }
      }


`


const NavBar = ()=>{
    
    let [lang, setLang] = useState(true)
    let langbutton = lang ? 
            <li className='changeLang'onClick={()=>{i18next.changeLanguage('es');setLang(false)}}>
                Cambiar a ESP</li>
                :
            <li className='changeLang' onClick={()=>{i18next.changeLanguage('en');setLang(true);}}>
                Switch to English
            </li>

    let location = useLocation();
    const nameLocation = location.pathname.slice(1);
    const titleLocation = nameLocation !== "" ?<h2 className='titlePages'>{nameLocation}</h2> : ""
    return(
        <DivWrapper>
            <Hamburguesa/>
                {titleLocation}
            <section className='wrapper--logo'>
                 {langbutton}
                 <Link to='/'>
                    <img className='logoMoreko' alt='logoMoreko' src={logoMoreko}/>
                 </Link>
            </section>
            <Menu/>
        </DivWrapper>
    )
}
export default NavBar