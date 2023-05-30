import React from "react";

const SongCancion = ({ titulo, cancion }) => {
  return (
    <section>
      <h3>{titulo}</h3>
      <blockquote>{cancion}</blockquote>
    </section>
  );
};

export default SongCancion;
