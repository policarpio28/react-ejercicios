import React from "react";
import { useFetch42HookPersonalizado } from "../hooks/useFetch42_44HookPersonalizado";
import Loader from "./32_36.Loader";
import Message from "./32_36.Message";

const SelectList = ({ title, url, handleChange }) => {
  const { data, error, loading } = useFetch42HookPersonalizado(url);

  // mientras no tenga valor no pintamos nada para no renderizar innecesariamente
  if (!data) return null;

  // si hay error sacamos mensaje
  if (error) {
    <Message
      msg={`Error ${error.status}: ${error.statusText}`}
      bgColor="#dc3545"
    />;
  }

  // cremos un id
  let id = `select-${title}`;
  // el response se llama asi porque es xq lo devuelve asi el api
  // quiero coger lo que devuelve la api que ademas hemos hecho que corresponda con el titulo
  // data.response[estado | municipios |colonia]
  let options = data.response[title];

  return (
    <>
      <label htmlFor={id}>{title} </label>
      {loading && <Loader />}
      {/* cuando se cambien de valor ejecuta el metodo handleChange*/}
      <select name={id} id={id} onChange={handleChange}>
        <option value="">Elige un {title}</option>
        {data && options.map((el) => <option value={el}>{el}</option>)}
      </select>
    </>
  );
};

export default SelectList;
