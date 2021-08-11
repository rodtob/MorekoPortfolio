import React from "react";

import "./Mimusica.scss";

const Mimusica = () => {
  const theworks = [
    {
      title: "Esperandote",
      year: "2019",
      describe: "Un gran disco",
      estilo: "Pop",
      site: "https://open.spotify.com/embed/track/1CEEsUrcplfYapCR8FRtW8",
    },
    {
      title: "Anestesiados",
      year: "2019",
      describe: "boxr",
      site: "https://open.spotify.com/embed/track/0LdQ1Mu3V4qx96xxMGfdmN",
    },
    {
      title: "Extraña",
      year: "2021",
      describe: "boxr",
      site: "https://open.spotify.com/embed/album/0cHNwjuI4B8WYfO4uzVFK5",
    },
    {
      title: "Glosa",
      year: "2020",
      describe: "boxr",
      site: "https://open.spotify.com/embed/track/7C1BA9hv7eD105mPaCHQpF",
    },
  ];

  return (
    <div className="wrapper--works heightAllSections" id="works">
      {theworks.map((work, index) => {
        return (
          <iframe
            title={work.title}
            key={index}
            src={work.site}
            className="iframeSpoty"
            frameBorder="0"
            allowtransparency="true"
            allow="encrypted-media"
          ></iframe>
        );
      })}
    </div>
  );
};

export default Mimusica;
