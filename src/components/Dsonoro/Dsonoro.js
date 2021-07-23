import styled from "styled-components";

const DivStyled = styled.div`
  display: flex;
  flex-direction:column;
  align-items:center;
  width: 90%;
  justify-content: space-around;
  p{
    width:90%;
    font-size: .6rem;
    margin-bottom:2vh;
    font-family: 'Roboto', sans-serif;
}
`;
const SectionStyled = styled.section`
  display: flex;
  width: 90%;
  justify-content: space-around;
  align-items:center;
`;

const Dsonoro = () => {
  return (
    <DivStyled className="heightAllSections">
      <p>
        
      </p>
      <SectionStyled>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/tPi5fRYA2eQ"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/wCiS81UHGos"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/watch?v=I4bXhjuNeH4"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
       <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/watch?v=AhMi5TjWRBc"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      
      </SectionStyled>
          
    </DivStyled>
  );
};

export default Dsonoro;
