import React from "react";
import defaultImg from "./img/defaultImg.svg";
import "./MixMaster.scss";

const MixMaster = () => {
  const theworks = [
    {
      title: "niÑo Perdido EP",
      year: "2020",
      describe: "",
      estilo: "singer-songwriter",
      type: "mezcla/mastering",
      site: "https://open.spotify.com/artist/0qxncsCv6Dn18p3dgR8TPd?si=ntOqU9ssRN2tjboHIZtLXg",
      img: defaultImg,
    },
    {
      title: "Guapos y Guapas - Juan Grabina y Vale Tubert",
      year: "2019",
      estilo: "singer-songwriter",
      describe: "",
      type: "mezcla/mastering",
      site: "https://www.youtube.com/watch?v=V8-7DOYkYzU",
      img: defaultImg,
    },
    {
      title: "Melina Plaza EP",
      year: "2018",
      estilo: "singer-songwriter",
      describe: "",
      type: "mezcla",
      site: "https://open.spotify.com/album/0itmj7ddXJDLcTWngnUBTs?si=7dDl-IDYTGOvYsngvgCWEg",
      img: defaultImg,
    },
    {
      title: "La Mentira - Alerta Pachuca",
      year: "2020",
      estilo: "indie",
      describe: "",
      type: "mezcla",
      site: "https://open.spotify.com/track/7xsmzZygbcNEmTfEAdzgwF?si=SpoyX9w2QD268C7VNWsYZg",
      img: defaultImg,
    },
    {
        title: "Palomita Blanca",
        year: "2016",
        estilo: "tango/folklore",
        describe: "",
        type: "mezcla/mastering",
        site: "https://open.spotify.com/track/7xsmzZygbcNEmTfEAdzgwF?si=SpoyX9w2QD268C7VNWsYZg",
        img: defaultImg,
      },
      {
        title: "La Kosher Nostra",
        year: "2017",
        estilo: "jewish",
        describe: "",
        type: "mezcla/mastering",
        site: "https://www.youtube.com/watch?v=tvrhpD-Al0o",
        img: defaultImg,
      },
  ];

  return (
    <div className="mix-master-wrapper--works" id="works">
      {theworks.map((work, index) => {
        return (
          <article key={index + "work"} id={"work" + index} className="mix-master-work">
            <a href={work.site} target="_blank">
              <img src={work.img} className="mix-master-circle--img" alt="img" />
            </a>
            <section className="text">
              <p className="title--proy">{work.title}</p>
              <p className="title--year">{work.year}</p>
              <p className="title--desc">{work.describe}</p>
            </section>
          </article>
        );
      })}
    </div>
  );
};

export default MixMaster;
