import React from "react";
import Modal from "./49_51.Modal";

const Modals = () => {
  return (
    <div>
      <h2>Modales</h2>
      <button>Modal 1</button>
      {/*las cosas que hay entre <Modal>...</Modal> son las cosasa que se le pasa al modal 
      en la propiedad children que es propia de react */}
      <Modal>
        <h3>Modal 1</h3>
        <p>Este es el contenido del modal 1</p>
        <img src="https://placeimg.com/400/400/animals" alt="Animals" />
      </Modal>
      <Modal>
        <h3>Otro Modal</h3>
        <p>dsfdsfdsfdsfdfsfdfs</p>
        <img src="https://placeimg.com/400/400/nature" alt="Nature" />
      </Modal>
    </div>
  );
};

export default Modals;
