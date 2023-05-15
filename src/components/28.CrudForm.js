import React, { useEffect, useState } from "react";

//formato del formulario
const initiacialForm = {
  id: null,
  name: "",
  constellation: "",
};

//desestructruramos las propiedades pasadas desde el CrudApp props.createDate  ....
const CrudForm = ({ createData, updateData, dataToEdit, setDataToEdit }) => {
  {
    /*constante que engloba a los input*/
  }
  const [form, setForm] = useState(initiacialForm);

  const handleChange = (e) => {
    setForm({
      // lo que ya tenga el objeto , nombre del objeto : valor del objeto
      // en este caso puede ser form, constellation : lo_que_escribas
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault(); // para no autoprocesar el formulario

    //validacion
    if (!form.name || !form.constellation) {
      alert("Datos incompletos");
      return;
    }

    // si no tiene id es nuevo sino es actualizacion
    if (form.id === null) {
      createData(form);
    } else {
      updateData(form);
    }

    handleReset();
  };

  //limpia los input
  const handleReset = (e) => {
    setForm(initiacialForm);
    setDataToEdit(null);
  };

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
