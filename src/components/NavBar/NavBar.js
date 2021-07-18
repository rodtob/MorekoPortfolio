import Menu from './Menu/Menu'
import {Link} from "react-router-dom";
import {useSelector} from 'react-redux'
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


`


const NavBar = ()=>{
    const activeSite = useSelector((state) => state.activeSite);
    return(
        <DivWrapper>
            <Hamburguesa/>
            {/* <h2>{activeSite}</h2> */}
            <Link to='/' className='wrapper--logo'>
                <img className='logoMoreko' alt='logoMoreko' src={logoMoreko}/>
            </Link>
            <Menu/>
        </DivWrapper>
    )
}
export default NavBar