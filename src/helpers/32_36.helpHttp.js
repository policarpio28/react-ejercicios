export const helpHttp = () => {
  // configuraciones de propiedades de las peticiones
  const customFetch = async (ruta, options) => {
    // cabeceras que acepta
    const defaultHeader = {
      accept: "application/json",
    };

    //si no logra conectar/responder con el servidor puede llamar a esto para desconectar
    const controller = new AbortController();
    options.signal = controller.signal;
    // si al segundo no recibe conexion con el servidor aborta la conexion
    setTimeout(() => controller.abort(), 3000);

    //recoge los metodos pero si no llega ninguno usa por defecto GET
    options.method = options.method || "GET";

    // recoge las cabeceras pasadas y las añade a la lista defaultHeader sino hay usa las de por defecto
    options.headers = options.headers
      ? { ...defaultHeader, ...options.headers }
      : defaultHeader;

    // si recibe un body de la peticion lo convierte a json pero sino biene un body es falso y lo eliminamos
    // el ejemplo es el GET que como es de consulta no necesito mandar al server un como somo si en el POST
    options.body = JSON.stringify(options.body) || false;
    if (!options.body) {
      delete options.body;
    }

    // se va a usar la fetch que ha montado todo
    return await fetch(ruta, options)
      .then((res) =>
        //si responde con Ok convierte en json sino rechaza y coge el error
        res.ok
          ? res.json()
          : Promise.reject({
              err: true,
              status: res.status || "00",
              statusText: res.statusText || "Ocurrio un error",
            })
      )
      .catch((err) => err);
  };

  // SOLICITA DATOS  poner en un sola linea sino no funciona
  const get = (url, options = {}) => customFetch(url, options);

  // ENVIA DATOS Y EL SERVER LO TRATA COMO QUIERA
  const post = (url, options = {}) => {
    options.method = "POST";
    return customFetch(url, options);
  };

  // ENVIA DATOS Y ACTUALIZA O CREA SI NO EXISTE
  const put = (url, options = {}) => {
    options.method = "PUT";
    return customFetch(url, options);
  };

  // ELIMINA DATOS
  const del = (url, options = {}) => {
    options.method = "DELETE";
    return customFetch(url, options);
  };

  return {
    get,
    post,
    put,
    del,
  };
};
