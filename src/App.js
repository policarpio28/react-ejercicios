import React from "react";
import CrudApp from "./components/28_31.CrudApp";
import CrudApi from "./components/32_36.CrudApi";
import SongSearch from "./components/37_41.SongSearch";
import SelectsAnidados from "./components/42_44.SelectsAnidados";
import ContactForm from "./components/45_48.ContactForm";
import Modals from "./components/49_51.Modals";

function App() {
  return (
    <>
      <h1>Ejercicios con React</h1>
      <Modals />
      <hr />
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
