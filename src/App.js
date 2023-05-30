import React from "react";
import CrudApp from "./components/28_31.CrudApp";
import CrudApi from "./components/32_36.CrudApi";
import SongSearch from "./components/37_41.SongSearch";

function App() {
  return (
    <>
      <h1>Ejercicios con React</h1>
      <SongSearch />
      <hr />
      <CrudApi />
      <hr />
      <CrudApp />
    </>
  );
}

export default App;
