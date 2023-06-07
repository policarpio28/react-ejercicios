import "./49_51.Modal.css";

// props.children es una palabra reservada que recibe desde la ventana padre
// que son las cosas que hay entre <Modal>...</Modal>
const Modal = ({ children, isOpen, closeModal }) => {
  //esto hace que cuando pulsamos dentro del modal no se cierre solo por cupa el onclick del article
  const hadleModalContainerClick = (e) => e.stopPropagation();
  return (
    //con la clase style "modal" solo no se veria pero si le llega isOpen añade el is-open que es el que lo muestra
    // añadimos el onClick para poder tambien dar fuera del modal y cerrarlo pero ponemos hadleModalContainerClick
    // para que no se cieere el modal pulsar dentro del él
    <article className={`modal ${isOpen && "is-open"}`} onClick={closeModal}>
      <div className="modal-container" onClick={hadleModalContainerClick}>
        <button className="modal-close" onClick={closeModal}>
          X
        </button>
        {children}
      </div>
    </article>
  );
};

export default Modal;
