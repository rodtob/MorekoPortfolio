import styled from 'styled-components'
import {useSelector, useDispatch} from 'react-redux'
import {menuOpen} from '../../../actions'



const StyledBurger = styled.button`
z-index:14;
display: flex;
flex-direction: column;
justify-content: space-around;
aling-items:center;
width: 2vw;
height: 40%;
margin-left: 2vw;
background: transparent;
border: none;
cursor: pointer;
padding: 0;

&:focus {
outline: none;
}

div {
width: 21px;
height: 3px;
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
  width: 1.7rem;
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
