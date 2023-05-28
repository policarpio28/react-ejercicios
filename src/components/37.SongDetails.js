import React from "react";
import SongArtist from "./37.SongArtist";
import SongCancion from "./37.SongCancion";
import Message from "./32_36.Message";

const SongDetails = ({ search, cancion, biografia }) => {
  // para no renderizar a lo tonto
  if (!cancion || !biografia) {
    return null;
  } else {
    return (
      //error del api || error de nuestro helpHttp.js || error del api
      <>
        {cancion.error || cancion.err || cancion.name === "AbortError" ? (
          <Message
            msg={`Error: no existe la cancion ${search.cancion}`}
            bgColor="#dc3545"
          />
        ) : (
          <SongCancion />
        )}
        {biografia.artist ? (
          <SongArtist />
        ) : (
          <Message
            msg={`Error: no existe el cantante ${search.artist}`}
            bgColor="#dc3545"
          />
        )}
      </>
    );
  }
};

export default SongDetails;
