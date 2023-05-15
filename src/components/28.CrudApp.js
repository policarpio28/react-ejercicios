import React, { useState } from "react";
import CrudForm from "./28.CrudForm";
import CrudTable from "./28.CrudTable";

// constante con todos los objetos json
const inicialDb = [
  {
    id: 1,
    name: "Seiya",
    constellation: "Pegaso",
  },
  {
    id: 2,
    name: "Shiryu",
    constellation: "Dragón",
  },
  {
    id: 3,
    name: "Hyoga",
    constellation: "Cisne",
  },
  {
    id: 4,
    name: "Shun",
    constellation: "Andrómeda",
  },
  {
    id: 5,
    name: "Ikki",
    constellation: "Fénix",
  },
];

const CrudApp = () => {
  // esto es lo q nos traeria de bbdd q es un json
  const [db, setDb] = useState(inicialDb);

  // elemento que se va a editar
  const [dataToEdit, setDataToEdit] = useState(null);

  // añade un registro al array y repinta el render
  const createData = (data) => {
    // creamos un id
    data.id = Date.now();
    // lo que ya tenga el objeto , objeto a añadir
    // repinta el render
    setDb([...db, data]);
  };

  const updateData = (data) => {
    // comparamos el elemento, si es el mismo id reemplzamos el elemento por
    //el data que es modificado sino dejamos el mismo
    let newData = db.map((el) => (el.id === data.id ? data : el));
    // añadimos la nueva lista |  repinta el render
    setDb(newData);
  };
  const delateData = (id) => {};

  return (
    <>
      <h2>CRUD App con datos locales (Sin apis)</h2>
      {/*formulario para añadir mas objetos*/}
      <CrudForm
        //en vez de crear los metodos en el form se los pasamos desde aqui para probar q se puede hacer
        createData={createData}
        updateData={updateData}
        dataToEdit={dataToEdit}
        setDataToEdit={setDataToEdit}
      />
      {/*tabla donde mostrar todo pasando los objetos*/}
      <CrudTable
        data={db}
        setDataToEdit={setDataToEdit}
        delateData={delateData}
      />
    </>
  );
};

export default CrudApp;
