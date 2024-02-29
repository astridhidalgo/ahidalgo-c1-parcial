import React from "react";

const Card = ({ data }) => {
  return (
    <div>
      <h2 style={{ color: "green", textAlign: "center" }}>Datos Ingresados</h2>
      <p>Nombre: {data.nombre}</p>
      <p>Apellido: {data.apellido}</p>
      {data.hobby && <p>Hobby: {data.hobby}</p>}
      {data.animal && <p>Animal Favorito: {data.animal}</p>}
      {data.comida && <p>Comida Favorita: {data.comida}</p>}
      {data.pelicula && <p>Pelicula Favorita: {data.pelicula}</p>}
      {data.musica && <p>Música Favorita: {data.musica}</p>}
      {data.libro && <p>Libro Favorito: {data.libro}</p>}
      <h4 style={{ textAlign: "center" }}>
        Gracias por permitirnos conocer un poco más de ti...
      </h4>
    </div>
  );
};

export default Card;
