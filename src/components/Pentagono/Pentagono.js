import styled from 'styled-components'
import knobPic from '../../assets/knob.png'
import {useSelector,useDispatch} from 'react-redux'
import {rotarKnob, desRotarKnob} from '../../actions'
import React, { useEffect, useState, useRef } from 'react';

const StyledPentagono = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  justify-items:center;
  align-items:center;
  .knob{
      width:200px;
      transition:1s all;
      transform: ${({ rotar }) =>'rotate('+ rotar +'deg)'};
  }
  .prA{
      display:flex;
  }

`


const Pentagono = ()=>{

    const knob = useRef(null);

  useEffect(() => {
    console.log(knob)
  }, []);



    const rotar = useSelector(state=> state.rotar)
    const dispatch = useDispatch()
    // const wheelRotar = ()=>dispatch(rotarKnobA())
    // const wheeldesRotar = ()=>dispatch(rotarKnobB())

    //usar el ref

    const prueba = (e)=>{ e.deltaY === 100 ? dispatch(rotarKnob()) : dispatch(desRotarKnob())}
    console.log(rotar)
    return(
        <StyledPentagono rotar={rotar}>

                <p>+</p>
                <p>DJ</p>
                <p>+</p>
                <p>MM</p>
               <img ref={knob} onWheel={prueba} className='knob' src={knobPic}/>
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