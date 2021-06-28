import Menu from './Menu/Menu'
import {Link} from "react-router-dom";
import Hamburguesa from './Hamburguesa/Hamburguesa'
import styled from 'styled-components'
import logoMoreko from './logoMoreko.png'


const DivWrapper = styled.div `
    position: absolute;
    display:flex;
    flex-direction:row;
    width: 100%;
    min-height:5vh;
    justify-content: space-between;
    boder: 2px red solid;
    z-index:10;
    .logoMoreko{
        margin-right: 46px;
        margin-top: 42px;
        width: 60px;
        opacity: .7;
        transition: .4s all;
    }
    .logoMoreko:hover{
        opacity:1;  
    }


`


const NavBar = ()=>{
    return(
        <DivWrapper>
            <Hamburguesa/>
            <Link to='/'>
                <img className='logoMoreko' alt='logoMoreko' src={logoMoreko}/>
            </Link>
            <Menu/>
        </DivWrapper>
    )
}
export default NavBar