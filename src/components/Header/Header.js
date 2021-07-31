import styled from 'styled-components'
import KnobMenu from '../KnobMenu/KnobMenu'
import {useTranslation} from 'react-i18next'

const StyledDiv = styled.div`
    min-height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media screen and (max-width: 960px){
      min-height: unset;
    }

    `

const StyledHeader = styled.div`
  margin-top:2.5vh;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  align-items:center;
  .turnUp{
    margin-top:1vh;
    font-size:1.7rem;
    text-align: center;
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
  @media screen and (max-width: 960px){
    margin-top: 1vh;
    .turnUp{
      display:none;
    }
  }
`

const StyledH = styled.h1`
  z-index:1;  
  color: #FFA200; 
  font-size: 6.5rem;
  opacity: ${({ open }) => open ? '0' : '.7'};
  transform: ${({ open }) => open ? 'translateX(120px)' : 'translateX(0)'};
  transition: all 0.3s ease-in-out;
  &:hover {
    color: white;
    letter-spacing: 2px;
    opacity:.4;
  }
  @media screen and (max-width: 960px){
    font-size: 3.2rem;
  }
`




const Header = () =>{
  const[t] = useTranslation("global");
    return(
      <StyledDiv>
        <StyledHeader>
          <StyledH>MOREKO</StyledH>
          <h3 className='turnUp'>{t("header.presentation")}</h3>
        </StyledHeader>
        <KnobMenu/>
      </StyledDiv>
        
    )
}

export default Header