import React, { useState } from "react";

const initialForm = {
  artist: "",
  cancion: "",
};

const SongForm = ({ handleSearch }) => {
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    // lo que ya tenga el objeto , nombre del objeto : valor del objeto
    // en este caso puede ser form, constellation : lo_que_escribas
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // para no autoprocesar el formulario

    if (!form.artist || !form.cancion) {
      alert("Datos incompletos");
      return;
    } else {
      handleSearch(form);
      //limpiamos el formulario
      setForm(initialForm);
    }
  };

  return (
    <di>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="artist"
          placeholder="Nombre del interprete"
          onChange={handleChange}
          value={form.artist}
        />
        <input
          type="text"
          name="cancion"
          placeholder="Nombre de la cancion"
          onChange={handleChange}
          value={form.cancion}
        />
        <input type="submit" value="Enviar" />
      </form>
    </di>
  );
};

export default SongForm;
