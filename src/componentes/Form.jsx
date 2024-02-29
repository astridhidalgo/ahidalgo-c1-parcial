import React, { useState } from "react";
import Card from "./Card";
import "./form.css";

const Form = () => {
  const [usuario, setUsuario] = useState({
    nombre: "",
    apellido: "",
    hobby: "",
    animal: "",
    comida: "",
    pelicula: "",
    musica: "",
    libro: "",
  });

  const [mostrar, setMostrar] = useState(false);
  const [err, setErr] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (usuario.nombre.trim().length >= 3 && usuario.apellido.length >= 6) {
      setMostrar(true);
      setErr(false);
    } else {
      setErr(true);
    }
  };

  return (
    <div className="contenedorPrincipal">
      {mostrar ? (
        <Card data={usuario} />
      ) : (
        <div>
          <h3>Queremos Conocerte Mejor</h3>
          <h5>Con este formulario buscamos recopilar información sobre ti</h5>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Nombre:</label>
              <input
                type="text"
                value={usuario.nombre}
                onChange={(event) =>
                  setUsuario({
                    ...usuario,
                    nombre: event.target.value,
                  })
                }
              />
            </div>
            <div>
              <label>Apellido:</label>
              <input
                type="text"
                value={usuario.apellido}
                onChange={(event) =>
                  setUsuario({ ...usuario, apellido: event.target.value })
                }
              />
            </div>
            <h3>Preferencias y gustos personales</h3>
            <div>
              <label>Hobby:</label>
              <input
                type="text"
                value={usuario.hobby}
                onChange={(event) =>
                  setUsuario({ ...usuario, hobby: event.target.value })
                }
              />
            </div>
            <div>
              <label>Animal Favorito:</label>
              <input
                type="text"
                value={usuario.animal}
                onChange={(event) =>
                  setUsuario({ ...usuario, animal: event.target.value })
                }
              />
            </div>
            <div>
              <label>Comida Favorita:</label>
              <input
                type="text"
                value={usuario.comida}
                onChange={(event) =>
                  setUsuario({ ...usuario, comida: event.target.value })
                }
              />
            </div>
            <div>
              <label>Película Favorita:</label>
              <input
                type="text"
                value={usuario.pelicula}
                onChange={(event) =>
                  setUsuario({ ...usuario, pelicula: event.target.value })
                }
              />
            </div>
            <div>
              <label>Música Favorita:</label>
              <input
                type="text"
                value={usuario.musica}
                onChange={(event) =>
                  setUsuario({ ...usuario, musica: event.target.value })
                }
              />
            </div>
            <div>
              <label>Libro Favorito:</label>
              <input
                type="text"
                value={usuario.libro}
                onChange={(event) =>
                  setUsuario({ ...usuario, libro: event.target.value })
                }
              />
            </div>
            <button>Enviar</button>
          </form>
        </div>
      )}
      {err && (
        <h4 style={{ color: "red", textAlign: "center" }}>
          Debe colocar la información correctamente
        </h4>
      )}
    </div>
  );
};

export default Form;
