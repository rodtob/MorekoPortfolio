// imagenes
// import defaultImg from "./img/defaultImg.svg";
import beatzImg from "./img/7beatz.png";
import adImg from "./img/ad.jpg";
import creditDonkeyImg from "./img/creditDonkeyPodcast.jpg";
import meditationImg from "./img/meditation.jpg";
import podcastImg from "./img/podcast.png";
import upbeatImg from "./img/upbeat.jpg";
import filmsImg from "./img/film.jpg";

// tracks 7 beatz
import analogCandombeTrack from "./tracks/7beatz/analog-candombe.mp3";
import candombeHopTrack from "./tracks/7beatz/candombe-hop.mp3";
import chillFinTrack from "./tracks/7beatz/chill-fin.mp3";
import dobleTrapTrack from "./tracks/7beatz/doble-trap.mp3";
import downtempoTalloTrack from "./tracks/7beatz/downtempo-tallo.mp3";
import rainyDayTrack from "./tracks/7beatz/rainy-day.mp3";
import tingTongTrack from "./tracks/7beatz/ting-tong.mp3";

// tracks advertising
import childrenTrack from "./tracks/ad/Children Music App.mp3";
import citySlickerTrack from "./tracks/ad/City Slicker.mp3";
import epicTechnologyTrack from "./tracks/ad/Epic Technology.mp3";
import crowdTrack from "./tracks/ad/crowd.mp3";
import socialMediaTrack from "./tracks/ad/Gaj Ad Social Media.mp3";
import rockNestleAdTrack from "./tracks/ad/Rock Nestle Ad.mp3";
import whistleCookingTrack from "./tracks/ad/Whistle Cooking Video.mp3";
import whistleNestleTrack from "./tracks/ad/Whistle Nestle Ad.mp3";
import wizaTrack from "./tracks/ad/Wiza.mp3";

// tracks films
import animeTrack from "./tracks/films/Anime - orchestral.mp3";
import fantasyTrack from "./tracks/films/Fantasy - orchestral.mp3";
import horrorTrack from "./tracks/films/Horror music.mp3";

// tracks meditation
import priestessTrack from "./tracks/meditation/Guided Meditation - Priestess Visualization SAMPLE.mp3";
import omniTrack from "./tracks/meditation/Meditation Omni.mp3";
import divineMotherBinaural from "./tracks/meditation/Divine Mother - Binaural Sample.mp3";

// tracks podcast
import geetaTrack from "./tracks/podcast/Intro Podcast Geeta V2.mp3";
import creditDonkeyTrack from "./tracks/podcast/creditDonkey.mp3";

// tracks upbeat
import shayTrack from "./tracks/upbeat/Shay Youtube Channel.mp3";
import upbeatBackingTrack from "./tracks/upbeat/Upbeat backing track.mp3";
import upbeatDrumsTrack from "./tracks/upbeat/Upbeat Drums.mp3";

const baseProductions = [
  {
    id: 0,
    name: "Analog Candombe",
    genre: "7beatz-lofi",
    track: analogCandombeTrack,
    img: beatzImg,
  },
  {
    id: 1,
    name: "Candombe Hop",
    genre: "7beatz-lofi",
    track: candombeHopTrack,
    img: beatzImg,
  },
  {
    id: 2,
    name: "Chill Fin",
    genre: "7beatz-lofi",
    track: chillFinTrack,
    img: beatzImg,
  },
  {
    id: 3,
    name: "Doble Trap",
    genre: "7beatz-lofi",
    track: dobleTrapTrack,
    img: beatzImg,
  },
  {
    id: 4,
    name: "Downtempo Tallo",
    genre: "7beatz-lofi",
    track: downtempoTalloTrack,
    img: beatzImg,
  },
  {
    id: 5,
    name: "Rainy Day",
    genre: "7beatz-lofi",
    track: rainyDayTrack,
    img: beatzImg,
  },
  {
    id: 6,
    name: "Ting Tong",
    genre: "7beatz-lofi",
    track: tingTongTrack,
    img: beatzImg,
  },
  {
    id: 25,
    name: "Wiza Software Ad",
    genre: "advertising",
    track: wizaTrack,
    img: adImg,
  },
  {
    id: 7,
    name: "Childen App Music",
    genre: "advertising",
    track: childrenTrack,
    img: adImg,
  },
  {
    id: 8,
    name: "City Slicker - ForePlay",
    genre: "advertising",
    track: citySlickerTrack,
    img: adImg,
  },
  {
    id: 9,
    name: "Follow the Crowd - ForePlay",
    genre: "advertising",
    track: crowdTrack,
    img: adImg,
  },
  {
    id: 10,
    name: "Epic Technology - ForePlay",
    genre: "advertising",
    track: epicTechnologyTrack,
    img: adImg,
  },
  {
    id: 11,
    name: "Gaj Ad Social Media",
    genre: "advertising",
    track: socialMediaTrack,
    img: adImg,
  },
  {
    id: 12,
    name: "Rock Nestle Ad",
    genre: "advertising",
    track: rockNestleAdTrack,
    img: adImg,
  },
  {
    id: 13,
    name: "Whistle Cooking Video",
    genre: "advertising",
    track: whistleCookingTrack,
    img: adImg,
  },
  {
    id: 14,
    name: "Whistle Nestle Ad",
    genre: "advertising",
    track: whistleNestleTrack,
    img: adImg,
  },
  {
    id: 15,
    name: "Anime - Orchestral",
    genre: "films",
    track: animeTrack,
    img: filmsImg,
  },
  {
    id: 16,
    name: "Fantasy - Orchestral",
    genre: "films",
    track: fantasyTrack,
    img: filmsImg,
  },
  {
    id: 17,
    name: "Horror Music",
    genre: "films",
    track: horrorTrack,
    img: filmsImg,
  },
  {
    id: 18,
    name: "Guided Meditation - Priestess Visualization",
    genre: "meditation",
    track: priestessTrack,
    img: meditationImg,
  },
  {
    id: 19,
    name: "Omni Meditation",
    genre: "meditation",
    track: omniTrack,
    img: meditationImg,
  },
  {
    id: 20,
    name: "Intro Podcast Geeta",
    genre: "podcasts-intros",
    track: geetaTrack,
    img: podcastImg,
  },
  {
    id: 21,
    name: "Intro Credit Donkey",
    genre: "podcasts-intros",
    track: creditDonkeyTrack,
    img: creditDonkeyImg,
  },
  {
    id: 22,
    name: "Shay Youtube Channel",
    genre: "upbeat",
    track: shayTrack,
    img: upbeatImg,
  },
  {
    id: 23,
    name: "Upbeat Backing Track",
    genre: "upbeat",
    track: upbeatBackingTrack,
    img: upbeatImg,
  },
  {
    id: 24,
    name: "Upbeat Drums",
    genre: "upbeat",
    track: upbeatDrumsTrack,
    img: upbeatImg,
  },
  {
    id: 25,
    name: "Divine Mother Meditation - Binaural Sample",
    genre: "meditation",
    track: divineMotherBinaural,
    img: meditationImg,
  },
];

export default baseProductions;