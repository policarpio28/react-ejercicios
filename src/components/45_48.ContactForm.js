import React from "react";
import { use45_48Form } from "../hooks/use45_48Form";

const initialForm = {};
const validationsForm = (form) => {};

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

        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default ContactForm;
