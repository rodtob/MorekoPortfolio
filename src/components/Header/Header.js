import styled from 'styled-components'
import {useSelector,useDispatch} from 'react-redux'
import {menuOpen} from '../../actions'
import KnobMenu from '../KnobMenu/KnobMenu'

const StyledDiv = styled.div`
    min-height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    `

const StyledHeader = styled.div`
  margin-top:4vh;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  align-items:center;
  .turnUp{
    margin-top:1vh;
    font-size:1.7rem;
    transition:.3s all;
  }
  .turnUp:hover{
    text-transform:lowercase;
  }
  .myName{
    font-size:1.4rem;
    opacity: 1;
    transition: .4s all;
  }
  .myName:hover{
    font-size:1.2rem;
  }
`

const StyledH = styled.h1`
  z-index:1;  
  color: #FFA200; 
  font-size: 8rem;
  opacity: ${({ open }) => open ? '0' : '.7'};
  transform: ${({ open }) => open ? 'translateX(120px)' : 'translateX(0)'};
  transition: all 0.3s ease-in-out;
  &:hover {
    color: white;
    letter-spacing: 2px;
    opacity:.4;
  }
  @media screen and (max-width: 800px){
    font-size: 4rem;
  }
`




const Header = () =>{
  const open = useSelector(state=> state.isOpen)
  const dispatch = useDispatch()
  const clickClose = ()=>dispatch(menuOpen())
    return(
      <StyledDiv>
        <StyledHeader>
          {/* <h4 className='myName'>hi, my name is</h4> */}
          <StyledH>MOREKO</StyledH>
          <h3 className='turnUp'>SUBI EL VOLUMEN</h3>
        </StyledHeader>
        <KnobMenu/>
      </StyledDiv>
        
    )
}

export default Header