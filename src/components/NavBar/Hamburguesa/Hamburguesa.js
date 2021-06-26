import styled from 'styled-components'
import {useSelector, useDispatch} from 'react-redux'
import {menuOpen} from '../../../actions'



const StyledBurger = styled.button`
display: flex;
flex-direction: column;
justify-content: space-around;
margin:30px;
width: 1rem;
height: 2rem;
background: transparent;
border: none;
cursor: pointer;
padding: 0;
z-index: 10;

&:focus {
outline: none;
}

div {
width: 2rem;
height: 0.25rem;
background: ${({ open }) => open ? '#c8d8d3' : '#EFFFFA'};
border-radius: 10px;
transition: all 0.3s linear;
position: relative;
transform-origin: 1px;

:first-child {
  transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
}

:nth-child(2) {
  opacity: ${({ open }) => open ? '0' : '1'};
  transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
}

:nth-child(3) {
  transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
}
}
div:hover{
  background-color: orange;
  width: 2.3rem;
}


`

const Hamburguesa=()=>{
  const open = useSelector(state=> state.isOpen)
  const dispatch = useDispatch()

      return(

          <StyledBurger open={open} onClick={()=>dispatch(menuOpen())}>
            <div />
            <div />
            <div />
          </StyledBurger>

    )

  }


export default Hamburguesa
