import styled from "styled-components";

const DivStyled = styled.div`
  display: flex;
  flex-direction:column;
  align-items:center;
  width: 90%;
  justify-content: space-around;
  p{
      width:70%;
      font-size: .6rem;
      margin-bottom:2vh;
      font-family: 'Roboto', sans-serif;
  }
`;

const Dj = () => {
  return (
    <DivStyled className="heightAllSections">
      <p>
        Me especializo en Deep House y Organic House. En este set realizo algunos homenajes/mashups de músicos Argentinos como el grupo Duratierra, Paco Amoroso, y Bajofondo. Grabado en estudios El Guapo en Enero de 2021, Villa Crespo, Argentina.
      </p>
      <iframe
        width="760"
        height="400"
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
