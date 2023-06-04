import React from "react";
import { use45_48Form } from "../hooks/use45_48Form";

//valores iniciales
const initialForm = {
  name: "",
  email: "",
  subject: "",
  textarea: "",
};

// funcion de las validaciones || la ponemos aqui xq si se pone en el use quizas hay
// validaciones que no nos interesa para otros sitios
const validationsForm = (form) => {
  let errors = {};

  if (!form.name.trim()) {
    errors.name = "El campo Nombre es obligatorio";
  }

  return errors;
};

let styles = {
  fontWeight: "bold",
  color: "#dc3545",
};

const ContactForm = () => {
  // cosas que nos devuelve el use personalizado
  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = use45_48Form(initialForm, validationsForm);

  return (
    <div>
      <h2>Formulario de contacto</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Escribe tu nombre"
          onChange={handleChange}
          onBlur={handleBlur}
          //asignacion del valor al formato
          value={form.name}
          required
        />
        {/*ensaje de error*/}
        {errors.name && <p style={styles}>{errors.name}</p>}

        <input
          type="email"
          name="email"
          placeholder="Escribe tu email"
          onChange={handleChange}
          onBlur={handleBlur}
          //asignacion del valor al formato
          value={form.email}
          required
        />
        {errors.email && <p style={styles}>{errors.email}</p>}

        <input
          type="text"
          name="subject"
          placeholder="Asunto a tratar"
          onChange={handleChange}
          onBlur={handleBlur}
          //asignacion del valor al formato
          value={form.subject}
          required
        />
        {errors.subject && <p style={styles}>{errors.subject}</p>}

        <textarea
          name="comments"
          cols="50"
          rows="5"
          placeholder="Escribe tu comentario"
          onChange={handleChange}
          onBlur={handleBlur}
          //asignacion del valor al formato
          value={form.comments}
          required
        />
        {errors.comments && <p style={styles}>{errors.comments}</p>}

        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default ContactForm;
