import React from "react";
import SongArtist from "./37.SongArtist";
import SongCancion from "./37.SongCancion";

const SongDetails = ({ search, cancion, biografia }) => {
  return (
    <div>
      <h3>Detalles</h3>
      <SongArtist />
      <SongCancion />
    </div>
  );
};

export default SongDetails;
