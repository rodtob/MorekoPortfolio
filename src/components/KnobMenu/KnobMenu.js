import volume from "./volume.png";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { rotarKnob, desRotarKnob, chooseSite } from "../../actions";
import { useState } from "react";
import { useEffect } from "react";
import {useTranslation} from 'react-i18next'

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .volume {
    margin-top: 5vh;
    margin-bottom: 1vh;
    cursor: pointer;
    width: 200px;
    transform: ${({ rotar }) => "rotate(" + rotar * 10 + "deg)"};
    filter: saturate(50%);
    transition: 0.2s all;
  }
  .volume:hover {
    filter: saturate(100%);
  }
  .titleSection {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media(max-width: 960px){
    .volume{
      display:none;
    }
  }
`;

const StyledSection = styled.section`
  display: flex;
  flex-direction: row;
  width:100%;
  justify-content: center;
  align-items: space-between;
  .site {
    font-size: 0.7rem;
    text-align: center;
    padding: 10px;
    margin: 10px;
    border: 2px solid grey;
    width: 25vh;
    opacity: 0.7;
    transition: 0.4s all;
  }
  .site:hover {
    opacity: 1;
    border: 2px solid #fccd7c;
    color: #ffa200;
  }
  .site--selected {
    opacity: 1;
    border: 2px solid #fccd7c;
    color: #ffa200;
  }
  @media screen and (max-width: 800px) {
    flex-direction: column;
    align-items:center;
    margin-top: 4vh;
    .site{
      padding: 10px 20px;
      margin: 16px;
      width: 35vh;
    }
  }
`;

const SectionTri = styled.section`
  width: 100%;
  height: 4vh;
  position: relative;
  @media screen and (max-width: 800px) {
    display:none;
  }
`;

const Triangle = styled.p`
  width: 0;
  height: 0;
  position: absolute;
  left: ${({ rotar }) => (rotar > 99 ? 99 : rotar) + "%"};
  top: 10%;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 20px solid grey;
`;

const sites = [
  { name: "mezcla/master", dir: "mixmaster", active: [0, 14] },
  { name: "dj", dir: "dj", active: [20, 28] },
  { name: "mi musica", dir: "mymusic", active: [36, 46] },
  { name: "producciones", dir: "productions", active: [52, 66] },
  { name: "s.design", dir: "sdesign", active: [68, 82] },
  { name: "sobre mi", dir: "aboutme", active: [84, 96] },
];

const KnobMenu = () => {
  const[t] = useTranslation("global");
  let history = useHistory();
  const rotar = useSelector((state) => state.rotar);
  const [newSite, setNewSite] = useState(false);
  const activeSite = useSelector((state) => state.activeSite);
  const dispatch = useDispatch();

  const rotarWheel = (e) => {
    e.deltaY > 0 ? dispatch(rotarKnob()) : dispatch(desRotarKnob());
  };
  const goSite = (e) => {
    e.preventDefault();
    setNewSite(true);
    dispatch(chooseSite(rotar));
  };

  useEffect(() => {
    history.push("/" + activeSite);
  }, [newSite, activeSite, history]);

  useEffect(() => {
    history.push("/");
  }, [history]);

  return (
    <StyledDiv rotar={rotar}>
      <section onClick={goSite}>
        <img className="volume" onWheel={rotarWheel} alt="knob" src={volume} />
      </section>
      <SectionTri onWheel={rotarWheel}>
        <Triangle rotar={rotar}></Triangle>
      </SectionTri>
      <StyledSection className="section--site">
        {sites.map((site) => {
          return (
            <Link to={site.dir} key={site.name} rotar={rotar}
            className={
              rotar > site.active[0] && rotar < site.active[1]
                ? "site site--selected"
                : "site"
            }>
            {t(`menu.${site.dir}`)}
            </Link>
          );
        })}
      </StyledSection>
    </StyledDiv>
  );
};

export default KnobMenu;
