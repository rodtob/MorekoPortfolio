import {
    Link
  } from "react-router-dom";
import styled from 'styled-components'

  const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  background:#9f9af34a;
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
    color: #0D0C1D;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: white;
    }
  }
`

const Menu = ({open})=>{
    return(
        
 <StyledMenu open={open}>
      <li><Link>+DJ</Link></li>
      <li ><Link to='music'>+Mi musica</Link></li>
      <li ><Link>+Producciones</Link></li>
      <li ><Link>+Sound Design</Link></li>
      <li ><Link>+Mezcla</Link></li> 
  </StyledMenu>
    )
}

export default Menu