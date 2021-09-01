import React from "react";
import defaultImg from "./img/defaultImg.svg";
import "./MixMaster.scss";
import { useTranslation } from "react-i18next";

const MixMaster = () => {
  const[t] = useTranslation("global");
  const theworks = [
        {
      title: "La Mentira - Alerta Pachuca",
      year: "2020",
      estilo: "indie",
      describe:`${t("mixmaster.describe.mentira")}`,
      type: "mezcla",
      site: "https://open.spotify.com/embed/track/7xsmzZygbcNEmTfEAdzgwF",
      img: defaultImg,
      from: 'spoty',
    },
    {
      title: "niÑo Perdido EP",
      year: "2020",
      describe:`${t("mixmaster.describe.nino")}`,
      estilo: "singer-songwriter",
      type: "mezcla/mastering",
      site: "https://open.spotify.com/embed/album/59aUFG5NNNJpx81Pjzw8Yy?si=MdWJnGlWRs-_pn8XKvPyiQ&dl_branch=1",
      img: defaultImg,
      from: 'spoty',
    },
    {
      title: "Guapos y Guapas - Juan Grabina y Vale Tubert",
      year: "2019",
      estilo: "singer-songwriter",
      describe:`${t("mixmaster.describe.guapos")}`,
      type: "mezcla/mastering",
      site: "https://www.youtube.com/embed/V8-7DOYkYzU",
      img: defaultImg,
      from: 'you',
    },
    {
      title: "Melina Plaza EP",
      year: "2018",
      estilo: "singer-songwriter",
      describe:`${t("mixmaster.describe.melina")}`,
      type: "mezcla",
      site: "https://open.spotify.com/embed/album/0itmj7ddXJDLcTWngnUBTs",
      img: defaultImg,
      from: 'spoty',
    },
    {
      title: "Palomita Blanca",
      year: "2016",
      estilo: "tango/folklore",
      describe:`${t("mixmaster.describe.palomita")}`,
      type: "mezcla/mastering",
      site: "https://www.youtube.com/embed/wCWBU6tsFkM",
      img: defaultImg,
      from: 'you',
    },
    {
      title: "La Kosher Nostra",
      year: "2017",
      estilo: "jewish",
      describe:`${t("mixmaster.describe.kosher")}`,
      type: "mezcla/mastering",
      site: "https://www.youtube.com/embed/tvrhpD-Al0o",
      img: defaultImg,
      from: 'you',
    },
  ];

  return (
    <div className="mix-master-wrapper--works" id="works">
      {theworks.map((work, index) => {
        return (
          <article
            key={index + "work"}
            id={"work" + index}
            className="mix-master-work"
          >
            <section className="mix-master-circle--img">
              <iframe
                title={work.title}
                className={`${work.from}`}
                src={work.site}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </section>
            <section className="mix-master-section--column">
              <section className="mix-master-text">
              <p className="mix-master-title--proy">{work.title}</p>
              <p className="mix-master-title--year">{work.year}</p>
              </section>
                <p className="mix-master-title--desc">{work.describe}</p>
            </section>
          </article>
        );
      })}
    </div>
  );
};

export default MixMaster;