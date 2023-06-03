import { useState, useEffect } from "react";

export const useFetch42HookPersonalizado = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // se ejecuta cuando cambie la url de llamada
  useEffect(() => {
    // para cuando el API no te está respondiendo
    const abortController = new AbortController();
    const signal = abortController.signal;

    // llamada a la api
    const fetchData = async () => {
      setLoading(true);

      try {
        // llamada
        const res = await fetch(url);

        //toda llamada fecth siempre responde con Ok
        // si no hay ok es un error
        if (!res.ok) {
          //cremos nuestro error
          let err = new Error("Error en la peticion Fetch");
          // si el api no el codigo de error lo ponemos nosotros (00) y lo mismo con el menaje
          err.status = res.status || "00";
          err.statusText = res.statusText || "Ocurrio un error";
          // cremos la excepcion de error que lo manda al catch
          throw err;
        }

        // si llega aqui no hay error y convierte la respuesta a json
        const json = await res.json();

        // si no ha sido realmente abortado seteamos el valor
        if (!signal.aborted) {
          setData(json);
          setError(null);
        }
      } catch (error) {
        if (!signal.aborted) {
          setData(null);
          setError(error);
        }
      } finally {
        if (!signal.aborted) {
          setLoading(false);
        }
      }
    };

    // llamada al metodo
    fetchData();

    // para diagamos desmontar la conexion por temas de rendimiento desconectamos
    return () => abortController.abort();
  }, [url]);

  return { data, error, loading };
};
