import styled from "styled-components";

const DivStyled = styled.div`
  display: flex;
  flex-direction:column;
  align-items:center;
  width: 90%;
  justify-content: space-around;
  .iframeVideo{
    width:560px;
    height:315px;
  }
  p{
    width:90%;
    font-size: .6rem;
    margin-bottom:2vh;
    font-family: 'Roboto', sans-serif;
}
@media(max-width: 960px){
  overflow: auto; 
  overflow-x: hidden;
  height: 94vh;
  p{
    margin-top:24vh;
    margin-bottom:7vh;
    font-size:1rem;
  }
  .iframeVideo{
    width:auto;
    height:auto;
    margin:1vh;
    margin-top:2vh;
    margin-bottom:5vh;
  }
}
`;
const SectionStyled = styled.section`
  display: flex;
  width: 90%;
  justify-content: space-around;
  align-items:center;
  @media(max-width: 960px){
    flex-direction:column;
    
  }
`;

const Dsonoro = () => {
  return (
    <DivStyled className="heightAllSections">
      <p>
        
      </p>
      <SectionStyled>
      <iframe
        className="iframeVideo"
        src="https://www.youtube.com/embed/tPi5fRYA2eQ"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <iframe
        className="iframeVideo"
        src="https://www.youtube.com/embed/wCiS81UHGos"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <iframe
        className="iframeVideo"
        src="https://www.youtube.com/embed/I4bXhjuNeH4"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
       <iframe
        className="iframeVideo"
        src="https://www.youtube.com/embed/AhMi5TjWRBc"
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
