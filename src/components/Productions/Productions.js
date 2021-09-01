import styled from "styled-components";

// imagenes
// import defaultImg from "./img/defaultImg.svg";
import beatzImg from "./img/7beatz.png";
import adImg from "./img/ad.jpg";
import creditDonkeyImg from "./img/creditDonkeyPodcast.jpg";
import meditationImg from "./img/meditation.jpg";
import podcastImg from "./img/podcast.png";
import upbeatImg from "./img/upbeat.jpg";
import filmsImg from "./img/film.jpg";

// tracks 7 beatz
import analogCandombeTrack from "./tracks/7beatz/analog-candombe.mp3";
import candombeHopTrack from "./tracks/7beatz/candombe-hop.mp3";
import chillFinTrack from "./tracks/7beatz/chill-fin.mp3";
import dobleTrapTrack from "./tracks/7beatz/doble-trap.mp3";
import downtempoTalloTrack from "./tracks/7beatz/downtempo-tallo.mp3";
import rainyDayTrack from "./tracks/7beatz/rainy-day.mp3";
import tingTongTrack from "./tracks/7beatz/ting-tong.mp3";

// tracks advertising
import childrenTrack from "./tracks/ad/Children Music App.mp3";
import citySlickerTrack from "./tracks/ad/City Slicker.mp3";
import epicTechnologyTrack from "./tracks/ad/Epic Technology.mp3";
import crowdTrack from "./tracks/ad/crowd.mp3";
import socialMediaTrack from "./tracks/ad/Gaj Ad Social Media.mp3";
import rockNestleAdTrack from "./tracks/ad/Rock Nestle Ad.mp3";
import whistleCookingTrack from "./tracks/ad/Whistle Cooking Video.mp3";
import whistleNestleTrack from "./tracks/ad/Whistle Nestle Ad.mp3";
import wizaTrack from "./tracks/ad/Wiza.mp3";

// tracks films
import animeTrack from "./tracks/films/Anime - orchestral.mp3";
import fantasyTrack from "./tracks/films/Fantasy - orchestral.mp3";
import horrorTrack from "./tracks/films/Horror music.mp3";

// tracks meditation
import priestessTrack from "./tracks/meditation/Guided Meditation - Priestess Visualization SAMPLE.mp3";
import omniTrack from "./tracks/meditation/Meditation Omni.mp3";

// tracks podcast
import geetaTrack from "./tracks/podcast/Intro Podcast Geeta V2.mp3";
import creditDonkeyTrack from "./tracks/podcast/creditDonkey.mp3";

// tracks upbeat
import shayTrack from "./tracks/upbeat/Shay Youtube Channel.mp3";
import upbeatBackingTrack from "./tracks/upbeat/Upbeat backing track.mp3";
import upbeatDrumsTrack from "./tracks/upbeat/Upbeat Drums.mp3";


import React, { useState, createRef } from "react";
import { useTranslation } from "react-i18next";

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
    .filter--button {
      margin: 1.5vh;
    }
  }
`;
const SectionProduct = styled.section`
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.99);
  height: 65vh; 
  overflow: auto; 
  overflow-x: hidden;
  width: 80%;
  margin: 1vh;
  @media (max-width: 960px) {
    height:unset;
  }
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
    width: 200px;
    text-align:center;
    color: rgb(216, 216, 216);
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

  .meditation {
    color: #6fcdfbd2;
  }
  .upbeat {
    color: #96227f;
  }
  .drama--horror {
    color: #6f70aa;
  }

  .advertising{
    color: #2459ad;
  }
  @media (max-width: 960px) {
    margin-bottom: 4vh;
    flex-wrap: wrap;
    .text-product {
      width: 150px;
    }
    .genre{
      width: 100%;
    }
    .audioControl {
      margin: auto;
      margin-top: 1.4vh;
    }
  }
`;

const baseProductions = [
  {
    id: 0,
    name: "Analog Candombe",
    genre: "7beatz-lofi",
    track: analogCandombeTrack,
    img: beatzImg,
  },
  {
    id: 1,
    name: "Candombe Hop",
    genre: "7beatz-lofi",
    track: candombeHopTrack,
    img: beatzImg,
  },
  {
    id: 2,
    name: "Chill Fin",
    genre: "7beatz-lofi",
    track: chillFinTrack,
    img: beatzImg,
  },
  {
    id: 3,
    name: "Doble Trap",
    genre: "7beatz-lofi",
    track: dobleTrapTrack,
    img: beatzImg,
  },
  {
    id: 4,
    name: "Downtempo Tallo",
    genre: "7beatz-lofi",
    track: downtempoTalloTrack,
    img: beatzImg,
  },
  {
    id: 5,
    name: "Rainy Day",
    genre: "7beatz-lofi",
    track: rainyDayTrack,
    img: beatzImg,
  },
  {
    id: 6,
    name: "Ting Tong",
    genre: "7beatz-lofi",
    track: tingTongTrack,
    img: beatzImg,
  },
  {
    id: 25,
    name: "Wiza Software Ad",
    genre: "advertising",
    track: wizaTrack,
    img: adImg,
  },
  {
    id: 7,
    name: "Childen App Music",
    genre: "advertising",
    track: childrenTrack,
    img: adImg,
  },
  {
    id: 8,
    name: "City Slicker - ForePlay",
    genre: "advertising",
    track: citySlickerTrack,
    img: adImg,
  },
  {
    id: 9,
    name: "Follow the Crowd - ForePlay",
    genre: "advertising",
    track: crowdTrack,
    img: adImg,
  },
  {
    id: 10,
    name: "Epic Technology - ForePlay",
    genre: "advertising",
    track: epicTechnologyTrack,
    img: adImg,
  },
  {
    id: 11,
    name: "Gaj Ad Social Media",
    genre: "advertising",
    track: socialMediaTrack,
    img: adImg,
  },
  {
    id: 12,
    name: "Rock Nestle Ad",
    genre: "advertising",
    track: rockNestleAdTrack,
    img: adImg,
  },
  {
    id: 13,
    name: "Whistle Cooking Video",
    genre: "advertising",
    track: whistleCookingTrack,
    img: adImg,
  },
  {
    id: 14,
    name: "Whistle Nestle Ad",
    genre: "advertising",
    track: whistleNestleTrack,
    img: adImg,
  },
  {
    id: 15,
    name: "Anime - Orchestral",
    genre: "films",
    track: animeTrack,
    img: filmsImg,
  },
  {
    id: 16,
    name: "Fantasy - Orchestral",
    genre: "films",
    track: fantasyTrack,
    img: filmsImg,
  },
  {
    id: 17,
    name: "Horror Music",
    genre: "films",
    track: horrorTrack,
    img: filmsImg,
  },
  {
    id: 18,
    name: "Guided Meditation - Priestess Visualization",
    genre: "meditation",
    track: priestessTrack,
    img: meditationImg,
  },
  {
    id: 19,
    name: "Omni Meditation",
    genre: "meditation",
    track: omniTrack,
    img: meditationImg,
  },
  {
    id: 20,
    name: "Intro Podcast Geeta",
    genre: "podcasts-intros",
    track: geetaTrack,
    img: podcastImg,
  },
  {
    id: 21,
    name: "Intro Credit Donkey",
    genre: "podcasts-intros",
    track: creditDonkeyTrack,
    img: creditDonkeyImg,
  },
  {
    id: 22,
    name: "Shay Youtube Channel",
    genre: "upbeat",
    track: shayTrack,
    img: upbeatImg,
  },
  {
    id: 23,
    name: "Upbeat Backing Track",
    genre: "upbeat",
    track: upbeatBackingTrack,
    img: upbeatImg,
  },
  {
    id: 24,
    name: "Upbeat Drums",
    genre: "upbeat",
    track: upbeatDrumsTrack,
    img: upbeatImg,
  },
];

const Productions = () => {
  const [theProductions, setProductions] = useState(baseProductions);
  const [t] = useTranslation("global");
  const genres = [
    "meditation",
    "films",
    "upbeat",
    "podcasts-intros",
    "advertising",
    "7beatz-lofi",
  ];
  const [filterItem, setFilterItem] = useState([...genres]);
  const [elRefs, setElRefs] = React.useState([]);

  const handlePause = (nextAudio) => {
    elRefs.map((audio) => {
      return audio.current !== nextAudio.current && audio.current?.pause();
    });
  };

  React.useEffect(() => {
    let filteredProductions = baseProductions.filter((element) =>
      filterItem.includes(element.genre)
    );
    setProductions(filteredProductions);
    setElRefs((elRefs) =>
      filteredProductions.map((_, i) => elRefs[i] || createRef())
    );
  }, [filterItem]);

  return (
    <DivProduct>
            {/* <p>
      {t("aboutProductions.main")}
           </p> */}
      <section className="section--filter">
        <button
          className="filter--button"
          onClick={() => setFilterItem([...genres])}
        >
          {t("compositions.all")}
        </button>
        {genres.map((genre) => {
          return <button
                  className="filter--button"
                  onClick={() => setFilterItem(genre)}
                >
                  {t(`compositions.${genre}`)}
                </button>;
        })}
      </section>

      <SectionProduct>
        {theProductions.map((production, i) => {
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
              <p className={`text-product ${production.genre} genre`}>
                {production.genre}
              </p>
              <audio
                ref={elRefs[i]}
                onPlay={() => handlePause(elRefs[i])}
                className="audioControl"
                controls
              >
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
