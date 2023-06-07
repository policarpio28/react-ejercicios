import { useState } from "react";

// inicializado a falso
export const use45_48Modal = (initialValue = false) => {
  // partes de los q es la gestion del formulario
  const [isOpen, setIsOpen] = useState(initialValue);

  const openModal = () => setIsOpen(true);

  const closeModal = () => setIsOpen(false);

  // retorno y lo pone con [] xq yo que sé
  return [isOpen, openModal, closeModal];
};
