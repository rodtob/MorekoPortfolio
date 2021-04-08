import volume from './volume.png'
import {Link, useHistory} from 'react-router-dom'
import styled from 'styled-components'
import {useSelector,useDispatch} from 'react-redux'
import {rotarKnob, desRotarKnob, chooseSite} from '../../actions'
import { useState } from 'react'
import { useEffect, useRef } from 'react'


const StyledDiv = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    .volume{
        margin:40px;
        cursor: pointer;
        width:200px;
        transform: ${({ rotar }) => 'rotate('+ rotar*10 +'deg)'};
        filter: saturate(50%); 
        transition: .2s all;
    }
    .volume:hover{
        filter: saturate(100%);   
    }
    .titleSection{
        display:flex;
        justify-content:center;
        align-items:center;
    }
    `
    

const StyledSection = styled.section`
    display:flex;
    .site{
        font-size:.7rem;
        text-align:center;
        padding:10px;
        margin: 10px;
        border: 2px solid grey;
        width: 200px;
        opacity: .7;
        transition: .4s all;
    }
    .site:hover{
        opacity: 1;
        border: 2px solid #fccd7c;
        color:#FFA200;
        
    }
    .site--selected{
        opacity: 1;
        border: 2px solid #fccd7c;
        color:#FFA200;
    }
`

const SectionTri = styled.section`
width:100%;
height:4vh;
position:relative`

const Triangle = styled.p`
width: 0;
height: 0;
position: absolute;
left:${({ rotar }) => (rotar > 99 ? 99 : rotar) +'%'}; 
top: 10%;
border-left: 10px solid transparent;
border-right: 10px solid transparent;
border-top: 20px solid grey;`



const sites = [{name: 'dj', dir:'dj', active:[0,14]},
              {name: 'mix master', dir:'mixmaster', active:[20,28]},
              {name: 'sound design', dir:'sdesign', active:[36,46]},
              {name: 'productions', dir:'productions',active:[52,66]},
              {name: 'my music', dir:'music', active:[68,82]},
              {name: 'about me', dir:'aboutme', active:[84,96]}]


const KnobMenu = ()=>{
    let history = useHistory();
    const rotar = useSelector(state=> state.rotar)
    const [newSite, setNewSite] = useState(false)
    const activeSite = useSelector(state=> state.activeSite)
    const dispatch = useDispatch()

    const rotarWheel = (e)=>{ e.deltaY === 100 ? dispatch(rotarKnob()) : dispatch(desRotarKnob())}
    const goSite = (e)=>{
        e.preventDefault()
        setNewSite(true)
        dispatch(chooseSite(rotar))
    }

    useEffect(()=>{
        history.push('/'+activeSite)
    },[newSite])


    useEffect(()=>{
        history.push('/')
    },[])



    return(
        <StyledDiv rotar={rotar}>
            <section onClick={goSite}>
                 <img className='volume' onWheel={rotarWheel}  src={volume}/>
            </section>
            <SectionTri onWheel={rotarWheel}>
            <Triangle rotar={rotar}></Triangle>
            </SectionTri>
            <StyledSection className='section--site'>
                {sites.map(site =>{
                    return(<Link to={site.dir} key={site.name}>
                        
                        
                            <p rotar={rotar} className={rotar > site.active[0]&& rotar< site.active[1]?'site site--selected':'site'}>{site.name}</p>
                        
                       
                        
                        </Link>)
                }
                )}

            </StyledSection>
        </StyledDiv>
    )
}

export default KnobMenu