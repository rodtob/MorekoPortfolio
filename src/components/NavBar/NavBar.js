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
    justify-content: space-between;
    boder: 2px red solid;
    z-index:10;
    .logoMoreko{
        margin:20px;
    }

`


const NavBar = ()=>{
    return(
        <DivWrapper>
            <Link to='/'>
                <img className='logoMoreko' src={logoMoreko}/>
            </Link>
            <Hamburguesa/>
            <Menu/>
        </DivWrapper>
    )
}
export default NavBar