import React, { useEffect, useState } from "react";

//formato del formulario
const initiacialForm = {
  id: null,
  name: "",
  constellation: "",
};

const CrudForm = () => {
  {
    /*constante que engloba a los input*/
  }
  const [form, setForm] = useState(initiacialForm);

  const handleChange = (e) => {};
  const handleSubmit = (e) => {};
  const handleReset = (e) => {};

  return (
    <div>
      <h3>Agregar</h3>
      {/*evento del submit*/}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          onChange={handleChange}
          //asignacion del valor al formato
          value={form.name}
        />
        <input
          type="text"
          name="constellation"
          placeholder="Constelacion"
          onChange={handleChange}
          //asignacion del valor al formato
          value={form.constellation}
        />
        <input type="submit" value="Enviar" />
        <input type="reset" value="Limpiar" onClick={handleReset} />
      </form>
    </div>
  );
};

export default CrudForm;
