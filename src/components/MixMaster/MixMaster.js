import React from "react";
import defaultImg from "./img/defaultImg.svg";
import "./MixMaster.scss";

const MixMaster = () => {
  const theworks = [
        {
      title: "La Mentira - Alerta Pachuca",
      year: "2020",
      estilo: "indie",
      describe:"CANCIÓN - Mezcla",
      type: "mezcla",
      site: "https://open.spotify.com/embed/track/7xsmzZygbcNEmTfEAdzgwF",
      img: defaultImg,
    },
    {
      title: "niÑo Perdido EP",
      year: "2020",
      describe:"SINGER-SONGWRITER - Mezcla/Mastering",
      estilo: "singer-songwriter",
      type: "mezcla/mastering",
      site: "https://open.spotify.com/embed/artist/0qxncsCv6Dn18p3dgR8TPd",
      img: defaultImg,
    },
    {
      title: "Guapos y Guapas - Juan Grabina y Vale Tubert",
      year: "2019",
      estilo: "singer-songwriter",
      describe:"CANCIÓN - Grabación/Mezcla/Mastering",
      type: "mezcla/mastering",
      site: "https://www.youtube.com/embed/V8-7DOYkYzU",
      img: defaultImg,
    },
    {
      title: "Melina Plaza EP",
      year: "2018",
      estilo: "singer-songwriter",
      describe:"SINGER-SONGWRITER - Mezcla",
      type: "mezcla",
      site: "https://open.spotify.com/embed/album/0itmj7ddXJDLcTWngnUBTs",
      img: defaultImg,
    },
    {
      title: "Palomita Blanca",
      year: "2016",
      estilo: "tango/folklore",
      describe:"TANGO Y FOLKLORE ARGENTINO - Grabacion/Mezcla/Mastering",
      type: "mezcla/mastering",
      site: "https://www.youtube.com/embed/wCWBU6tsFkM",
      img: defaultImg,
    },
    {
      title: "La Kosher Nostra",
      year: "2017",
      estilo: "jewish",
      describe: "WORLD MUSIC - Grabacion - Mezcla/Mastering",
      type: "mezcla/mastering",
      site: "https://www.youtube.com/embed/tvrhpD-Al0o",
      img: defaultImg,
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
            <iframe
              title={work.title}
              className="mix-master-circle--img"
              src={work.site}
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
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