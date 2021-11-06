import styled from "styled-components";
import baseProductions from "./DBproductions";
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
  p {
    width: 70%;
    font-size: 0.8rem;
    margin-bottom: 2vh;
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
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

const Productions = () => {
  const [t] = useTranslation("global");
  const [theProductions, setProductions] = useState(baseProductions);
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
            <p>
      {t("productions.main")}
           </p>
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
                controls controlsList="nodownload"
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
