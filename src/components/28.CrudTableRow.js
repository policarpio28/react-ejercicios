import React from "react";

//recibe props pero cogemos props.elemento
const CrudTableRow = ({ elemento }) => {
  return (
    <tr>
      <td>{elemento.name}</td>
      <td>{elemento.constellation}</td>
      <td>
        <button>Editar</button>
        <button>Eliminar</button>
      </td>
    </tr>
  );
};

export default CrudTableRow;
