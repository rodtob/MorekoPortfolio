import styled from "styled-components";

const DivStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  justify-content: space-around;
  .iframeVideo {
    height: 315px;
    width: 50%;
    margin: 1vh;
  }
  p {
    width: 90%;
    font-size: 0.6rem;
    margin-bottom: 2vh;
    font-family: "Roboto", sans-serif;
  }
  @media (max-width: 960px) {
    height: 70vh;
    p {
      margin-top: 24vh;
      margin-bottom: 7vh;
      font-size: 1rem;
    }
    .iframeVideo {
      width: auto;
      height: auto;
      margin-top: 2vh;
      margin-bottom: 5vh;
    }
  }
`;
const SectionStyled = styled.section`
  display: flex;
  width: 90%;
  height: 80vh;
  overflow: auto;
  overflow-x: hidden;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 960px) {
    margin-bottom: 2vh;
  }
`;

const dSonoroVideos = [
  "https://www.youtube.com/embed/ABiQD3rRfS8",
  "https://www.youtube.com/embed/I4bXhjuNeH4",
  "https://www.youtube.com/embed/wCiS81UHGos",
  "https://www.youtube.com/embed/tPi5fRYA2eQ",
  "https://www.youtube.com/embed/03ApjAxbC-8",
  "https://www.youtube.com/embed/AhMi5TjWRBc",
];

const Dsonoro = () => {
  return (
    <DivStyled className="heightAllSections">
      <SectionStyled>
        {dSonoroVideos.map((video) => {
          return (
            <iframe
              className="iframeVideo"
              src={video}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          );
        })}
      </SectionStyled>
    </DivStyled>
  );
};

export default Dsonoro;
