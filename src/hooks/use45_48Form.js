import { useState } from "react";
import { helpHttp } from "../helpers/32_36.helpHttp";

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

    // podemos validar mejor en el submit y no hacer el BLUR
    setErrors(validateForm(form));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //validamos
    setErrors(validateForm(form));
    // comprobamos que el tipo de Objeto en este caso errors está vacio pues enviamos
    if (Object.keys(errors).length === 0) {
      setLoading(true);
      helpHttp()
        .post("https://formsubmit.co/ajax/1smr2.marcos.martin@gmail.com", {
          body: form,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        })
        .then((res) => {
          setLoading(false);
          setResponse(true);
          setForm(initialForm);
          // al poner el response a true saca un mensaje en el form pero para que no esté ahi
          //todo el rato lo cambiamos al false a los 5 segundos
          setTimeout(() => {
            setResponse(false);
          }, 5000);
        });
    } else {
      return;
    }
  };

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
