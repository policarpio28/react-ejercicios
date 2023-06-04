import { useState } from "react";

export const use45_48Form = (initialForm, validateForm) => {
  // partes de los q es la gestion del formulario
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  // eventos de los input y formulario
  const handleChange = (e) => {};
  // cuando pierde el foco
  const handleBlur = (e) => {};
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
