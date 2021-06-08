import {Link} from "react-router-dom";
import styled from 'styled-components'
import {useSelector,useDispatch} from 'react-redux'
import {menuOpen} from '../../../actions'

  const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  background: rgb(15, 3, 64,0.7);
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  height: 100vh;
  width: 100%;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 576px) {
      width: 100%;
      z-index:10;
    }

  a {
    font-size: 3.2rem;
    text-transform: uppercase;
    padding: 1.5vh 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color:#cac5de;
    opacity:1;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      height:100vh;
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: white;
      text-transform: lowercase;
    }
  }
`

const Menu = ()=>{
  const open = useSelector(state=> state.isOpen)
  const dispatch = useDispatch()
  const clickClose = ()=>dispatch(menuOpen())
    return(
 <StyledMenu open={open}>
      <li onClick={clickClose}><Link to='/'>+Home</Link></li>
      <li onClick={clickClose}><Link to='/mixmaster'>+Mezcla/Master</Link></li>
      <li onClick={clickClose}><Link to='/dj'>+DJ</Link></li>
      <li onClick={clickClose}><Link to='/mymusic'>+Mi musica</Link></li>
      <li onClick={clickClose}><Link to='/productions'>+Producciones</Link></li>
      <li onClick={clickClose}><Link to='/sdesign'>+Diseño Sonoro</Link></li>
      <li onClick={clickClose}><Link to='/aboutme'>+Sobre mí</Link></li>  
  </StyledMenu>
    )
}

export default Menu