import React from "react";
import { use45_48Form } from "../hooks/use45_48Form";
import Loader from "./32_36.Loader";
import Message from "./32_36.Message";

//valores iniciales
const initialForm = {
  name: "",
  email: "",
  subject: "",
  comments: "",
};

// funcion de las validaciones || la ponemos aqui xq si se pone en el use quizas hay
// validaciones que no nos interesa para otros sitios
const validationsForm = (form) => {
  let errors = {};
  // expresiones regulares
  //hace que solo acepte de la A-Z y los acentos y Ñ y espacion en blanco \s
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  //para el email
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  // para que el maximo sea 255 caracteres
  let regexComments = /^.{1,255}$/;

  if (!form.name.trim()) {
    errors.name = "El campo Nombre es obligatorio";
  } else if (!regexName.test(form.name.trim())) {
    errors.name = "El campo Nombre solo acepta letras y espacios en blanco";
  }

  if (!form.email.trim()) {
    errors.email = "El campo Email es obligatorio";
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = "El campo Email es incorrecto";
  }

  if (!form.subject.trim()) {
    errors.subject = "El campo Asunto es obligatorio";
  }

  if (!form.comments.trim()) {
    errors.comments = "El campo Comentarios es obligatorio";
  } else if (!regexComments.test(form.comments.trim())) {
    errors.comments = "El campo Comentarios solo acepta 255 caracteres";
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

        <input
          type="hidden"
          name="_subject"
          value="Nuevo correo pregunta!"
        ></input>
      </form>

      {loading && <Loader />}
      {response && (
        <Message msg="Los datos han sido enviados" bgColor="#198754" />
      )}
    </div>
  );
};

export default ContactForm;
