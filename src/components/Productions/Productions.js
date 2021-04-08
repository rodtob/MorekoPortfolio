import styled from 'styled-components'
import meditationTrack from './tracks/GuidedMeditationPriestessVisualizationSAMPLE.mp3'
import meditationImg from './img/wp4484608-meditation-wallpapers.jpg'

const DivProduct = styled.div`

        display:flex;
        flex-direction: column;
        width:100%;
        align-items:center;
        padding:1vh;
    
`
const SectionProduct = styled.section`
   
        display:flex;
        background-color: rgba(0, 0, 0, 0.99);
        width:80%;
        margin:1vh;
    
`

const ArticleProduct = styled.article`
   
        display:flex;
        width:100%;
        border-top: 1px solid grey;
        border-bottom: 1px solid grey;
        justify-content:space-around;
        padding:10px;
        align-items:center;
    .text-product{
        font-size:.7rem;
        color: white;
        letter-spacing:1px;
        font-family: 'Roboto', sans-serif;
        padding:1vh;
    }
    .img-product{
        width: 100px;
    }
    .genre{
        color: orange;
    }
`



const Productions = ()=>{

    const theProductions =[{name:'Meditation Priestess',genre: 'meditation', track: meditationTrack, img: meditationImg}]



    return(
        <DivProduct>
            
            <SectionProduct>
                {theProductions.map(production=>{
                    return(
                        <ArticleProduct >
                            <img className='img-product' src={production.img}/>
                            <p className='text-product'>{production.name}</p>
                            <p className='text-product genre'>{production.genre}</p>
                            <audio controls>
                                <source src={production.track} type="audio/mpeg"/>
                            </audio>

                        </ArticleProduct>
                    )
                })}

            </SectionProduct>

        </DivProduct>
    )
}

export default Productions