import Menu from './Menu/Menu'
import {Link} from "react-router-dom";
import {useLocation} from "react-router-dom";
import Hamburguesa from './Hamburguesa/Hamburguesa'
import styled from 'styled-components'
import logoMoreko from './logoMoreko.png'


const DivWrapper = styled.div `
    display:flex;
    flex-direction:row;
    width: 100%;
    height:7vh;
    justify-content: space-between;
    align-items:center;
    z-index:10;
    .wrapper--logo{
        display:flex;
    }
    .logoMoreko{
        margin-right: 2vw;
        width: 30px;
        opacity: .7;
        transition: .4s all;
    }
    .logoMoreko:hover{
        opacity:1;  
    }
    .titlePages{
        font-size: .5rem;
        opacity:0.5;
        transition: .4s all;
    }
    .titlePages:hover{
        opacity:1;
    }


`


const NavBar = ()=>{
    let location = useLocation();
    const nameLocation = location.pathname.slice(1);
    return(
        <DivWrapper>
            <Hamburguesa/>
            <h2 className='titlePages'>{nameLocation}</h2>
            <Link to='/' className='wrapper--logo'>
                <img className='logoMoreko' alt='logoMoreko' src={logoMoreko}/>
            </Link>
            <Menu/>
        </DivWrapper>
    )
}
export default NavBar