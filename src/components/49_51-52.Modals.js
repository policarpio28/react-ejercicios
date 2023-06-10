import React from "react";
import Modal from "./49_51.Modal";
import { use45_48Modal } from "../hooks/use49_51Modal";
import ContactForm from "./45_48.ContactForm";
import ModalPortal from "./52.ModalPortal";

const Modals = () => {
  // se hacen aqui las invocaciones y no en 49_51.Modal.js para controlar cada modal por seraparado
  const [isOpenModal1, openModal1, closeModal1] = use45_48Modal(false);
  const [isOpenModal2, openModal2, closeModal2] = use45_48Modal(false);
  const [isOpenModalContact, openModalContact, closeModalContact] =
    use45_48Modal(false);

  const [isOpenModalPortal, openModalPortal, closeModalPortal] =
    use45_48Modal(false);

  return (
    <div>
      <h2>Modales</h2>
      <button onClick={openModal1}>Modal 1</button>
      {/*las cosas que hay entre <Modal>...</Modal> son las cosasa que se le pasa al modal 
      en la propiedad children que es propia de react */}
      <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
        <h3>Modal 1</h3>
        <p>Este es el contenido del modal 1</p>
        <img src="https://placeimg.com/400/400/animals" alt="Animals" />
      </Modal>
      <button onClick={openModal2}>Modal 2</button>
      <Modal isOpen={isOpenModal2} closeModal={closeModal2}>
        <h3>Modal 2</h3>
        <p>dsfdsfdsfdsfdfsfdfs</p>
        <img src="https://placeimg.com/400/400/nature" alt="Nature" />
      </Modal>
      <button onClick={openModalContact}>Modal Form</button>
      <Modal isOpen={isOpenModalContact} closeModal={closeModalContact}>
        <ContactForm />
      </Modal>

      {/*Modal portal de la clase 52 , se ha tocado el index.html para esto añadiendo un div */}
      <button onClick={openModalPortal}>Modal Portal</button>
      <ModalPortal isOpen={isOpenModalPortal} closeModal={closeModalPortal}>
        <h3>Modal Portal</h3>
        <p>
          Este es el contenido de un modal que carga en otro nodo DOM difrente a
          donde carga nuestra app de react, gracias a un react portal.
        </p>
        <img src="https://placeimg.com/400/400/tech" alt="Tech" />
      </ModalPortal>
    </div>
  );
};

export default Modals;
