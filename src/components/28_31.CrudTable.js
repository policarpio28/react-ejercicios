import React from "react";
import CrudTableRow from "./28_31.CrudTableRow";

//recibe props pero cogemos props.data
const CrudTable = ({ data, setDataToEdit, deleteData }) => {
  return (
    <div>
      <h3>Tabla de Datos</h3>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Constelacion</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {/*si no hay datos pone el sin datos sino el otro pasandole cada elemento destructurado*/}
          {data.length > 0 ? (
            //descomponemos todos los json con map que crea el bucle
            data.map((elemento) => (
              <CrudTableRow
                //pasamos key para que no haya duplicados y tal y el elemento
                key={elemento.id}
                elemento={elemento}
                // pasamos los eventos del hijo al padre y al reves
                setDataToEdit={setDataToEdit}
                deleteData={deleteData}
              />
            ))
          ) : (
            <tr>
              <td colSpan="3">Sin datos</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CrudTable;
