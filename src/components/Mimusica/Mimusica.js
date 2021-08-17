import React from "react";

import "./Mimusica.scss";

const Mimusica = () => {
  const theworks = [
    "https://open.spotify.com/embed/track/1CEEsUrcplfYapCR8FRtW8",
    "https://open.spotify.com/embed/track/0LdQ1Mu3V4qx96xxMGfdmN",
    "https://open.spotify.com/embed/track/7t0yLScVFJcLdtoO2nXylX",
    "https://open.spotify.com/embed/track/7C1BA9hv7eD105mPaCHQpF",
  ];

  return (
    <div className="wrapper--works heightAllSections" id="works">
      {theworks.map((work, index) => {
        return (
          <iframe
            key={index}
            src={work}
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
