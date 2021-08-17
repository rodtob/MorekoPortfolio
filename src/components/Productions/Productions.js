import styled from "styled-components";
import meditationTrack from "./tracks/GuidedMeditationPriestessVisualizationSAMPLE.mp3";
import meditationImg from "./img/wp4484608-meditation-wallpapers.jpg";
import fantasyTrack from "./tracks/Fantasy Option 2 V2.mp3";
import animeTrack from "./tracks/Anime track V2.mp3";
import upbeatTrack from "./tracks/Upbeat V2.mp3";
import magicOrquestra from "./tracks/Magic Wiza - orchestral.mp3";
import defaultImg from "./img/defaultImg.svg";
import React, { useState, createRef } from "react";
import {useTranslation} from 'react-i18next'

const DivProduct = styled.div`
  display: flex;
  z-index: 2;
  flex-direction: column;
  width: 100%;
  margin-top: 5vh;
  align-items: center;
  padding: 1vh;
  .section--filter {
    margin-left: 20%;
    margin-bottom: 2%;
    display: flex;
    width: 80%;
    justify-content: flex-start;
    align-self: flex-start;
  }
  .filter--button {
    all: unset;
    font-size: 0.9rem;
    padding: 1vh;
    margin-right: 1vh;
    border-right: 1px solid black;
    border-radius: 1vh;
    cursor: pointer;
    background-color: rgb(120, 120, 120, 0.2);
    transition: 0.4s all;
  }
  .filter--button:hover {
    color: black;
    background-color: rgb(220, 220, 220, 0.4);
    border-right: 1px solid orange;
  }
  @media (max-width: 960px) {
    margin-top: 1vh;
    .section--filter {
      flex-wrap: wrap;
      width: 90%;
      justify-content: center;
      align-items: center;
      margin-left: auto;
      margin-right: auto;
    }
    .filter--button{
        margin:1.5vh;
    }
  }
`;
const SectionProduct = styled.section`
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.99);
  width: 80%;
  margin: 1vh;
`;

const ArticleProduct = styled.article`
  .fadeMe {
    animation: fadeIn 1s linear;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  .fadeMe {
    animation: fadeIn 1s linear;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  display: flex;
  width: 100%;
  border-top: 1px solid grey;
  border-bottom: 1px solid grey;
  justify-content: space-between;
  padding: 1vh;
  align-items: center;
  .text-product {
    font-size: 0.7rem;
    min-width: 200px;
    color: white;
    letter-spacing: 1px;
    font-family: "Roboto", sans-serif;
    padding: 1vh;
  }
  .img-wrapper {
    border: 1px solid rgba(140, 140, 140, 0.2);
    max-width: 10vh;
    display: flex;
  }
  .img-product {
    width: 100%;
    opacity: 0.6;
    transition: 0.4s all;
  }
  .img-product:hover {
    opacity: 0.9;
  }

  .genre {
    color: orange;
  }
  .meditation {
    color: #6fcdfbd2;
  }
  .upbeat {
    color: #813772;
  }
  .drama--horror {
    color: #6f70aa;
  }
  @media (max-width: 960px) {
    margin-bottom: 4vh;
    flex-wrap:wrap;
    .text-product {
      min-width: 0px;
    }
    .audioControl{
      margin-top:1.4vh;
    }
  }
`;

const baseProductions =  [{
  id: 0,
  name: "Meditation Priestess",
  genre: "meditation",
  track: meditationTrack,
  img: meditationImg,
},
{
  id: 1,
  name: "Anime Track",
  genre: "films",
  track: animeTrack,
  img: defaultImg,
},
{
  id: 2,
  name: "Horror Track",
  genre: "films",
  track: animeTrack,
  img: defaultImg,
},
{
  id: 3,
  name: "Upbeat V2",
  genre: "upbeat",
  track: upbeatTrack,
  img: defaultImg,
},
{
  id: 4,
  name: "Fantasy",
  genre: "films",
  track: fantasyTrack,
  img: defaultImg,
}
]


const Productions = () => {
  const [theProductions, setProductions] = useState(baseProductions);
  const[t] = useTranslation("global");
  const genres = ["meditation", "films", "upbeat", "podcasts-intros","various","7beatz-lofi"];
  const [filterItem, setFilterItem] = useState([...genres]);
  const [elRefs, setElRefs] = React.useState([]);

  const handlePause = (nextAudio) => {
    elRefs.map(audio =>{
      return audio.current !== nextAudio.current && audio.current?.pause();
    })
  }

  React.useEffect(() => {
    let filteredProductions = baseProductions.filter((element) => filterItem.includes(element.genre));
    setProductions(filteredProductions)
    setElRefs(elRefs => (
      filteredProductions.map((_, i) => elRefs[i] || createRef())
    ));
  }, [filterItem]);

  return (
    <DivProduct>
      <section className="section--filter">
        <button
          className="filter--button"
          onClick={() => setFilterItem([...genres])}
        >
          {t("compositions.all")}
        </button>
        <button
          className="filter--button"
          onClick={() => setFilterItem("films")}
        >
            {t("compositions.films")}
        </button>
        <button
          className="filter--button"
          onClick={() => setFilterItem("upbeat")}
        >
            {t("compositions.upbeat")}
        </button>
        <button
          className="filter--button"
          onClick={() => setFilterItem("meditation")}
        >
            {t("compositions.meditation")}
        </button>
        <button
          className="filter--button"
          onClick={() => setFilterItem("podcasts-intros")}
        >
            {t("compositions.podcasts-intros")}
        </button>
        <button
          className="filter--button"
          onClick={() => setFilterItem("7beatz-lofi")}
        >
            {t("compositions.7beatz-lofi")}
        </button>
        <button
          className="filter--button"
          onClick={() => setFilterItem("various")}
        >
            {t("compositions.various")}
        </button>
      </section>

      <SectionProduct>
        {theProductions
          .map((production, i) => {
            return (
              <ArticleProduct key={production.name}>
                <div className="img-wrapper fadeMe">
                  <img
                    className="img-product"
                    alt={production.img}
                    src={production.img}
                  />
                </div>
                <p className="text-product">{production.name}</p>
                <p className={`text-product ${production.genre}`}>
                  {production.genre}
                </p>
                <audio ref={elRefs[i]} onPlay={()=>handlePause(elRefs[i])} className='audioControl' controls>
                  <source src={production.track} type="audio/mpeg" />
                </audio>
              </ArticleProduct>
            );
          })}
      </SectionProduct>
    </DivProduct>
  );
};

export default Productions;