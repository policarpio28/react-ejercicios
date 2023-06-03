import React, { useState } from "react";
import SelectList from "./42_44.SelectList";

const SelectsAnidados = () => {
  const [estados, setEstados] = useState("");
  const [municipios, setMunicipios] = useState("");
  const [colonias, setColonias] = useState("");

  //const TOKEN = "cc148ca3-5bb3-426c-8476-145949eeb8d0"; // TOKEN BUENO
  const TOKEN = "cc148ca3-5bb3-426c-8476-145949eeb8d"; // TOKEN MALO
  return (
    <div>
      <h2>Selects Anidados (PONER EL TOKEN BUENO EN EL CODIGO QUE SE GASTA)</h2>
      <h4>API --> https://api-sepomex.hckdrk.me/ 1smr2.marcos.martin Alumno</h4>
      <h2>México</h2>

      <SelectList
        title="estado"
        url={`https://api.copomex.com/query/get_estados?token=${TOKEN}`}
        handleChange={(e) => {
          setEstados(e.target.value);
        }}
      />

      {estados && (
        <SelectList
          title="municipios"
          url={`https://api.copomex.com/query/get_municipio_por_estado/${estados}?token=${TOKEN}`}
          handleChange={(e) => {
            setMunicipios(e.target.value);
          }}
        />
      )}

      {municipios && (
        <SelectList
          title="colonia"
          url={`https://api.copomex.com/query/get_colonia_por_municipio/${municipios}?token=${TOKEN}`}
          handleChange={(e) => {
            setColonias(e.target.value);
          }}
        />
      )}

      <pre>
        <code>
          {estados} - {municipios} - {colonias}
        </code>
      </pre>
    </div>
  );
};

export default SelectsAnidados;
