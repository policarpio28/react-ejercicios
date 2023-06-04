import { useState } from "react";

export const use45_48Form = (initialForm, validateForm) => {
  // partes de los q es la gestion del formulario
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  // eventos de los input y formulario
  // crea una copia y actualiza el elemento que cambia
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  // cuando pierde el foco y lo usaremos para comprobar la validacion
  const handleBlur = (e) => {
    handleChange(e);
    setErrors(validateForm(form));
  };
  const handleSubmit = (e) => {};

  return {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};
