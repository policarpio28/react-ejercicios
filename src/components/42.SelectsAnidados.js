import React, { useState } from "react";
import SelectList from "./42.SelectList";

const SelectsAnidados = () => {
  const [estados, setEstados] = useState("");
  const [municipios, setMunicipios] = useState("");
  const [barrios, setBarrios] = useState("");

  return (
    <div>
      <h2>Selects Anidados</h2>
      <h2>México</h2>

      <SelectList
        title="Estados"
        url=""
        handleChange={(e) => {
          setEstados(e.target.value);
        }}
      />

      {estados && (
        <SelectList
          title="Municipios"
          url=""
          handleChange={(e) => {
            setMunicipios(e.target.value);
          }}
        />
      )}

      {barrios && (
        <SelectList
          title="Barrios"
          url=""
          handleChange={(e) => {
            setBarrios(e.target.value);
          }}
        />
      )}

      <pre>
        <code>
          {estados} - {municipios} - {barrios}
        </code>
      </pre>
    </div>
  );
};

export default SelectsAnidados;
