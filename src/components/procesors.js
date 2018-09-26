import React from "react";

const Procesadores = ({ procesors: procesadores }) => {
  return (
    <div>
      {procesadores.map(procesador => {
        return <li key={procesador.id}>{procesador.name}</li>;
      })}
    </div>
  );
};

export default Procesadores;
