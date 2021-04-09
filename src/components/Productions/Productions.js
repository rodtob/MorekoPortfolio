import styled from 'styled-components'
import meditationTrack from './tracks/GuidedMeditationPriestessVisualizationSAMPLE.mp3'
import meditationImg from './img/wp4484608-meditation-wallpapers.jpg'
import fantasyTrack from './tracks/Fantasy Option 2 V2.mp3'
import animeTrack from './tracks/Anime track V2.mp3'
import upbeatTrack from './tracks/Upbeat V2.mp3'
import defaultImg from './img/defaultImg.svg'

const DivProduct = styled.div`

        display:flex;
        flex-direction: column;
        width:100%;
        align-items:center;
        padding:1vh;
    
`
const SectionProduct = styled.section`
   
        display:flex;
        flex-direction: column;
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
        min-width: 200px;
        color: white;
        letter-spacing:1px;
        font-family: 'Roboto', sans-serif;
        padding:1vh;
    }
    .img-wrapper{
        border: 1px solid rgba(140, 140, 140, 0.20);
        height:100px;
        width: 100px;
        display:flex;
    }
    .img-product{
        width: 100%;
    }
    .genre{
        color: orange;
    }
`

const Productions = ()=>{

    const theProductions =[
    {name:'Meditation Priestess',genre: 'meditation', track: meditationTrack, img: meditationImg},
    {name:'Anime Track',genre: 'drama/horror', track: animeTrack, img: defaultImg},
    {name:'Horror Track',genre: 'drama/horror', track: animeTrack, img: defaultImg},
    {name:'Upbeat V2',genre: 'upbeat', track: upbeatTrack, img: defaultImg},
]

    return(
        <DivProduct>
            
            <SectionProduct>
                {theProductions.map(production=>{
                    return(
                        <ArticleProduct >
                            <div className='img-wrapper'>
                                <img className='img-product' src={production.img}/>
                            </div>
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