import {Link} from "react-router-dom";
import styled from 'styled-components';
import {useSelector,useDispatch} from 'react-redux';
import {menuOpen} from '../../../actions';
import { useTranslation } from "react-i18next";

  const StyledMenu = styled.nav`
  z-index:12;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  background: rgb(15, 3, 64,0.9);
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  height: 100vh;
  width: 100%;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 960px) {
      width: 100%;
      justify-content: space-evenly;
      z-index:12;
    }

  a {
    font-size: 3.2rem;
    text-transform: uppercase;
    padding: 1.5vh 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color:#cac5de;
    opacity:1;
    text-align:center;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      height:100vh;
      font-size: .9rem;
      text-align: center;
    }

    &:hover {
      color: white;
      text-transform: lowercase;
    }
  }
`

const Menu = ()=>{
  const[t] = useTranslation("global");
  const open = useSelector(state=> state.isOpen)
  const dispatch = useDispatch()
  const clickClose = ()=>dispatch(menuOpen())
    return(
 <StyledMenu open={open} onClick={clickClose}>
      <li><Link to='/'>+{t("menu.home")}</Link></li>
      <li><Link to='/mixmaster'>+{t("menu.mixmaster")}</Link></li>
      <li><Link to='/dj'>+{t("menu.dj")}</Link></li>
      <li><Link to='/mymusic'>+{t("menu.mymusic")}</Link></li>
      <li><Link to='/productions'>+{t("menu.productions")}</Link></li>
      <li><Link to='/sdesign'>+{t("menu.sdesign")}</Link></li>
      <li><Link to='/aboutme'>+{t("menu.aboutme")}</Link></li>  
  </StyledMenu>
    )
}

export default Menu