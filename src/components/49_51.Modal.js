import "./49_51.Modal.css";

// props.children es una palabra reservada que recibe desde la ventana padre
// que son las cosas que hay entre <Modal>...</Modal>
const Modal = ({ children }) => {
  return (
    <article className="modal is-open">
      <div className="modal-container">
        <button className="modal-close">X</button>
        {children}
      </div>
    </article>
  );
};

export default Modal;
