import React, { useState, useEffect } from "react";
import CrudForm from "./28_31.CrudForm";
import CrudTable from "./28_31.CrudTable";
import { helpHttp } from "../helpers/32_36.helpHttp";
import Loader from "./32_36.Loader";
import Message from "./32_36.Message";

const CrudApi = () => {
  // esto es lo q nos traeria de bbdd q es un json
  const [db, setDb] = useState(null);

  // elemento que se va a editar
  const [dataToEdit, setDataToEdit] = useState(null);

  // si hay algun error o si esta cargando
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // help y ruta
  let api = helpHttp();
  let ruta = "http://localhost:5000/santos";

  // llamada al cargar la pag la primera vez
  useEffect(() => {
    setLoading(true);
    api.get(ruta).then((res) => {
      //console.log(res);
      //cuando la respuesta no traiga err que se puso en Promise.reject(
      if (!res.err) {
        setDb(res);
        setError(null);
      } else {
        setDb(null);
        setError(res);
      }
      setLoading(false);
    });
  }, []);

  // añade un registro al API y repinta el render
  const createData = (data) => {
    // creamos un id || si no se pone el propio server falso le pone un id++ del ultimo
    data.id = Date.now();
    setLoading(true);
    // ponemos las opciones y reglas que necesita el server falso
    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };
    api.post(ruta, options).then((res) => {
      //console.log(res);
      if (!res.err) {
        // lo que ya tenga el objeto , objeto a añadir repinta el render
        setDb([...db, res]);
        setError(null);
      } else {
        setError(res);
      }
    });
    setLoading(false);
  };

  const updateData = (data) => {
    //ruta del elemento a modificar | esa asi la ruta porque el server lo dice asi
    let rutaMod = `${ruta}/${data.id}`;

    // ponemos las opciones y reglas que necesita el server falso
    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    // llamamos al put
    api.put(rutaMod, options).then((res) => {
      //console.log(res);
      if (!res.err) {
        // comparamos el elemento, si es el mismo id reemplzamos el elemento por
        //el data que es modificado sino dejamos el mismo
        let newData = db.map((el) => (el.id === data.id ? data : el));
        // añadimos la nueva lista |  repinta el render
        setDb(newData);
        setError(null);
      } else {
        setError(res);
      }
    });
    setLoading(false);
  };

  const deleteData = (id) => {
    let isDelete = window.confirm(
      `Estas seguro de eliminar el registro con id '${id}' ??`
    );

    if (isDelete) {
      //ruta del elemento a eliminar | esa asi la ruta porque el server lo dice asi
      let rutaDel = `${ruta}/${id}`;

      // ponemos las opciones y reglas que necesita el server falso
      let options = {
        headers: { "content-type": "application/json" },
      };
      // llamamos al put
      api.del(rutaDel, options).then((res) => {
        if (!res.err) {
          // filtra por los elemento que no es el id pasado para nuevo añadirlos a la setData
          //en vez de hacer un delete del propio elemento
          let newData = db.filter((el) => el.id !== id);
          // añadimos la nueva lista |  repinta el render
          setDb(newData);
          setError(null);
        } else {
          setError(res);
        }
      });
      setLoading(false);
    } else {
      return;
    }
  };

  return (
    <>
      <h2>CRUD API con simulacion de API</h2>
      <article className="grid-1-2">
        {/*formulario para añadir mas objetos*/}
        <CrudForm
          //en vez de crear los metodos en el form se los pasamos desde aqui para probar q se puede hacer
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
        />
        {/*cuando carge muestra el loading*/}
        {loading && <Loader />}
        {/*cuando cargue muestra el loading*/}
        {error && (
          <Message
            msg={`Error ${error.status}: ${error.statusText}`}
            bgColor={"#dc3545"}
          />
        )}
        {/*tabla donde mostrar todo pasando los objetos | solo se muestra si tiene datos*/}
        {db && (
          <CrudTable
            data={db}
            setDataToEdit={setDataToEdit}
            deleteData={deleteData}
          />
        )}
      </article>
    </>
  );
};

export default CrudApi;
