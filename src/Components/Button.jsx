import React from "react";

// Componente Button
// Recibe 5 props:
// children: para el contenido del button
// action: la funcion que ejecuta el boton al ser clickeado
// variant: cambia el estilo del boton dependiendo de si es "primary" o "secondary"
// fw: default false, con true el botton ocupa todo el contenedor
const Button = ({
  children,
  variant = "primary",
  action,
  fw = false,
  className = "",
}) => {
  return (
    <button
      className={`border-0 bg-${variant} px-7 py-3 font-medium transition duration-150 active:bg-accent hover:${
        variant === "primary" ? "bg-secondary" : "bg-primary"
      } ${fw ? "min-w-full" : ""} ${className}`}
      type="button"
      onClick={action}
    >
      {children}
    </button>
  );
};

export default Button;
