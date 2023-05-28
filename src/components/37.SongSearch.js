import React, { useEffect, useState } from "react";
import SongForm from "./37.SongForm";
import SongDetails from "./37.SongDetails";
import Loader from "./32_36.Loader";
import { helpHttp } from "../helpers/32_36.helpHttp";

const SongSearch = () => {
  const [search, setSearch] = useState(null);
  const [cancion, setCancion] = useState(null);
  const [biografia, setBiografia] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    //para no renderizar innecesariamente
    if (search === null) {
      return;
    }

    const fetchData = async () => {
      const { artist, cancion } = search;

      let artistUrl = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${artist}`;
      let cancionUrl = `https://api.lyrics.ovh/v1/${artist}/${cancion}`;

      setLoading(true);

      // con all hace todas las peticiones y lo guarda la respuesta en cada una
      const [artistRes, cancionRes] = await Promise.all([
        helpHttp().get(artistUrl),
        helpHttp().get(cancionUrl),
      ]);

      //setea los valores de la respuesta
      setBiografia(artistRes);
      setCancion(cancionRes);

      setLoading(false);
    };
    // cuando es asincrona react recomienda ponerlo asi por separado
    fetchData();
  }, [search]);

  const handleSearch = (data) => {
    setSearch(data);
  };

  return (
    <div>
      <h2>Buscador de canciones</h2>
      {loading && <Loader />}
      <SongForm handleSearch={handleSearch} />
      {search && !loading && (
        <SongDetails search={search} cancion={cancion} biografia={biografia} />
      )}
    </div>
  );
};

export default SongSearch;
