import styled from 'styled-components'
import {useSelector,useDispatch} from 'react-redux'
import {menuOpen} from '../../actions'
const StyledH = styled.h1`
  z-index:1;  
  color: aliceblue; 
  font-size: 2rem;
  opacity: ${({ open }) => open ? '0' : '1'};
  transform: ${({ open }) => open ? 'translateX(120px)' : 'translateX(0)'};
  transition: all 0.3s ease-in-out;
  &:hover {
    color: orange;
    letter-spacing: 5px;
    text-transform: lowercase;
    font-size:2.3rem;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: #ffffcc;
    opacity:.4;
  }

`

const Header = () =>{
  const open = useSelector(state=> state.isOpen)
  const dispatch = useDispatch()
  const clickClose = ()=>dispatch(menuOpen())
    return(

            <StyledH open={open} onClick={clickClose}>MOREKO</StyledH>

        
    )
}

export default Header