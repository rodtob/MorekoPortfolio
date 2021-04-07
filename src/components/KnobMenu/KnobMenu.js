import volume from './volume.png'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {useSelector,useDispatch} from 'react-redux'
import {rotarKnob, desRotarKnob} from '../../actions'


const StyledDiv = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    .volume{
        margin:40px;
        width:200px;
        transform: ${({ rotar }) => 'rotate('+ rotar +'deg)'};
        transition:1s all;
    }
    `
    

const StyledSection = styled.section`
    display:flex;
`
const StyledSite = styled.p`
    font-size:.7rem;
    text-align:center;
    padding:10px;
    margin: 10px;
    border: 2px solid grey;
    width: 200px;
`
const SectionTri = styled.section`
width:100%;
height:4vh;
position:relative`

const Triangle = styled.p`
width: 0;
height: 0;
position: absolute;
left:${({ rotar }) =>  (rotar > 100 ? 95 : rotar < 0 ? 0 : rotar) +'%'}; 
top: 10%;
border-left: 10px solid transparent;
border-right: 10px solid transparent;
border-top: 20px solid grey;`

const sites = [{name: 'dj', dir:'dj'},
              {name: 'sound design', dir:'sdesign'},
              {name: 'productions', dir:'productions'},
              {name: 'my music', dir:'music'},
              {name: 'about me', dir:'aboutme'}]


const KnobMenu = ()=>{
    const rotar = useSelector(state=> state.rotar)
    const dispatch = useDispatch()

    const rotarWheel = (e)=>{ e.deltaY === 100 ? dispatch(rotarKnob()) : dispatch(desRotarKnob())}
    console.log(rotar)

    return(
        <StyledDiv rotar={rotar}>
            <img className='volume' onWheel={rotarWheel} src={volume}/>
            <SectionTri>
            <Triangle rotar={rotar}></Triangle>
            </SectionTri>
            <StyledSection className='section--site'>
                {sites.map(site =>{
                    return(<Link to={site.dir} key={site}>
                        
                        <StyledSite>{site.name}</StyledSite>
                        
                        </Link>)
                }
                )}

            </StyledSection>
        </StyledDiv>
    )
}

export default KnobMenu