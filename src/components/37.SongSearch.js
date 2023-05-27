import React, { useEffect, useState } from "react";
import SongForm from "./37.SongForm";
import SongDetails from "./37.SongDetails";
import Loader from "./32_36.Loader";

const SongSearch = () => {
  const [search, setSearch] = useState(null);
  const [cancion, setCancion] = useState(null);
  const [biografia, setBiografia] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = (data) => {
    console.log(data);
  };

  return (
    <div>
      <h2>Buscador de canciones</h2>
      {loading && <Loader />}
      <SongForm handleSearch={handleSearch} />
      <SongDetails search={search} cancion={cancion} biografia={biografia} />
    </div>
  );
};

export default SongSearch;
