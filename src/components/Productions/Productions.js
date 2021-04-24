import styled from 'styled-components'
import meditationTrack from './tracks/GuidedMeditationPriestessVisualizationSAMPLE.mp3'
import meditationImg from './img/wp4484608-meditation-wallpapers.jpg'
import fantasyTrack from './tracks/Fantasy Option 2 V2.mp3'
import animeTrack from './tracks/Anime track V2.mp3'
import upbeatTrack from './tracks/Upbeat V2.mp3'
import defaultImg from './img/defaultImg.svg'
import { useState } from 'react'

const DivProduct = styled.div`

        display:flex;
        flex-direction: column;
        margin-top: 10vh;
        width:100%;
        align-items:center;
        padding:1vh;
        .section--filter{
            display:flex;
            width:80%;
            justify-content: flex-end;
        }
        .filter--button{
            all:unset;
            font-size:.9rem;
            padding:1vh;
            margin-right:1vh;
            border-right: 1px solid black;
            border-radius: 10px;
            cursor:pointer;
            background-color: rgb(120,120,120,0.2);
            transition: .4s all;
        }
        .filter--button:hover{
            color: black;
            background-color: rgb(220,220,220,0.4);
            border-right: 1px solid orange;
        }
    
`
const SectionProduct = styled.section`
   
        display:flex;
        flex-direction: column;
        background-color: rgba(0, 0, 0, 0.99);
        width:80%;
        margin:1vh;
    
`

const ArticleProduct = styled.article`
        .fadeMe {
            animation:fadeIn 1s linear;
        }
  
        @keyframes fadeIn {
            0% {
            opacity:0
            }
            100% {
            opacity:1;
            }
        }.fadeMe {
            animation:fadeIn 1s linear;
        }
        
        @keyframes fadeIn {
            0% {
            opacity:0
            }
            100% {
            opacity:1;
            }
        }
   
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
        width: 100px;
        display:flex;
    }
    .img-product{
        width: 100%;
        opacity: .6;
        transition: .4s all;
    }
    .img-product:hover{
        opacity:.9;
    }

    .genre{
        color: orange;
    }
`
    const theProductions =[
    {id:0,name:'Meditation Priestess',genre: 'meditation', track: meditationTrack, img: meditationImg},
    {id:1,name:'Anime Track',genre: 'drama/horror', track: animeTrack, img: defaultImg},
    {id:2,name:'Horror Track',genre: 'drama/horror', track: animeTrack, img: defaultImg},
    {id:3,name:'Upbeat V2',genre: 'upbeat', track: upbeatTrack, img: defaultImg},
    {id:4,name:'Fantasy',genre: 'drama/horror', track: fantasyTrack, img: defaultImg},
    ]

const Productions = ()=>{

    const genres = ['meditation', 'drama/horror', 'upbeat']
    const [filterItem, setFilterItem] = useState([...genres])


    return(
        <DivProduct>
            <section className='section--filter'>
                <button className='filter--button' onClick={()=>setFilterItem('drama/horror')}>horror</button>
                <button className='filter--button'  onClick={()=>setFilterItem('upbeat')}>Upbeat</button>
                <button className='filter--button' onClick={()=>setFilterItem('meditation')}>Meditation</button>
                <button className='filter--button' onClick={()=>setFilterItem([...genres])}>All</button> 
            </section>
               
            <SectionProduct>
                {theProductions.filter(element => filterItem.includes(element.genre)).map(production=>{
                    return (
                        <ArticleProduct key={production.name}>
                            <div className='img-wrapper fadeMe'>
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