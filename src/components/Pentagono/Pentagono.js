import styled from 'styled-components'
import knob from '../../assets/knob.png'
import {useSelector,useDispatch} from 'react-redux'
import {menuOpen} from '../../actions'
import React, { useEffect, useState } from 'react';

const StyledPentagono = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  justify-items:center;
  align-items:center;
  .knob{
      width:200px;
      transition:1s all;
      transform: ${({ open }) => open ? 'rotate(45deg);' : 'rotate(90deg);'};
      padding: ${({ open }) => open ? '12vh' : '1vh'};
  }
  .prA{
      display:flex;
  }

`


const Pentagono = ()=>{

    const [offset, setOffset] = useState(0);

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset)
    }
  }, []);

  console.log(offset); 


    const open = useSelector(state=> state.isOpen)
    const dispatch = useDispatch()
    const clickClose = ()=>dispatch(menuOpen())
    return(
        <StyledPentagono open={open}>

                <p>+</p>
                <p>DJ</p>
                <p>+</p>
                <p>MM</p>
               <img onClick={clickClose} className='knob' src={knob}/>
                <p>sd</p>
                <p>+</p>
                <section className='prA'>
                    <p>
                     PR
                    </p>
                    <p>
                     A
                    </p>
                </section>
                <p>+</p>
     


        </StyledPentagono>


    )
}

export default Pentagono