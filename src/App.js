import React from "react";
import CrudApp from "./components/28_31.CrudApp";
import CrudApi from "./components/32_36.CrudApi";
import SongSearch from "./components/37_41.SongSearch";
import SelectsAnidados from "./components/42_44.SelectsAnidados";
import ContactForm from "./components/45_48.ContactForm";

function App() {
  return (
    <>
      <h1>Ejercicios con React</h1>
      <ContactForm />
      <hr />
      <SelectsAnidados />
      <hr />
      <SongSearch />
      <hr />
      <CrudApi />
      <hr />
      <CrudApp />
    </>
  );
}

export default App;
