import React from "react";

//recibe props pero cogemos props.elemento
const CrudTableRow = ({ elemento, setDataToEdit, delateData }) => {
  // destructuras el elemento en su cosas y asi abajo solo hace falta llamar a cada cosa
  let { name, constellation, id } = elemento;

  return (
    <tr>
      <td>{name}</td>
      <td>{constellation}</td>
      <td>
        {/*se pasa el elemento al metodo*/}
        <button onClick={() => setDataToEdit(elemento)}>Editar</button>
        <button onClick={() => delateData(id)}>Eliminar</button>
      </td>
    </tr>
  );
};

export default CrudTableRow;
