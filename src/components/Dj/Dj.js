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
    <DivStyled>
      <p>
        Lorem psum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
      <iframe
        width="760"
        height="300"
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
