import styled from "styled-components";
import {useTranslation} from 'react-i18next'

const DivStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  justify-content: space-around;
  .djFrame {
    width: 760px;
    height: 400px;
  }
  p {
    width: 70%;
    font-size: 0.8rem;
    margin-bottom: 2vh;
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
  }
  @media (max-width: 960px) {
    p {
      width: 80%;
      font-size: 1rem;
    }
    .djFrame {
      width: auto;
      height: auto;
    }
  }
`;

const Dj = () => {
  const[t] = useTranslation("global")
  return (
    <DivStyled className="heightAllSections">
      <p>
      {t("aboutDj.main")}
      </p>
      <iframe
        className="djFrame"
        src="https://www.youtube.com/embed/Lj4bskGDvhc"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </DivStyled>
  );
};

export default Dj;
