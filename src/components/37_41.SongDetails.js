import React from "react";
import SongArtist from "./37_41.SongArtist";
import SongCancion from "./37_41.SongCancion";
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
          //cancion.lyrics el lyrics es la propiedad q devuelve la API
          <SongCancion titulo={search.cancion} cancion={cancion.lyrics} />
        )}
        {biografia.artist ? (
          //biografia.artists[0] es lo que devuelve la API y queremos el de la posicion 0
          <SongArtist artist={biografia.artists[0]} />
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
