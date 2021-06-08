import styled from 'styled-components'

const DivStyled = styled.div`
    display:flex;
    width: 90%;
    justify-content:space-around;
`


const Dsonoro = ()=>{
    return(
        <DivStyled>
            
            <iframe width="560" height="315" src="https://www.youtube.com/embed/tPi5fRYA2eQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/wCiS81UHGos" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        </DivStyled>
    )
}

export default Dsonoro