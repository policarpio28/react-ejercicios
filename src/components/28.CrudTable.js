import React from "react";
import CrudTableRow from "./28.CrudTableRow";

//recibe props pero cogemos props.data
const CrudTable = ({ data }) => {
  return (
    <div>
      <h3>Tabla de Datos</h3>
      <table border="1px">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Constelacion</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {/*si no hay datos pone el sin datos sino el otro pasandole cada elemento destructurado*/}
          {data.length === 0 ? (
            <tr>
              <td colSpan="3">Sin datos</td>
            </tr>
          ) : (
            //descomponemos todos los json con map que crea el bucle
            data.map((elemento) => (
              //pasamos key para que no haya duplicados y tal y el elemento
              <CrudTableRow key={elemento.id} elemento={elemento} />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CrudTable;
