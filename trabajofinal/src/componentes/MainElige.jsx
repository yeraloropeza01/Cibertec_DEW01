import { useState } from "react";
import "./MainElige.css";
import GaleriaVehiculos from "./Galeria.jsx";

function MainElige() {
  const [marcaSeleccionada, setMarcaSeleccionada] = useState(null);

  const marcasUno = [
    { nombre: "Volkswagen", imagen: "volkswagen.png" },
    { nombre: "Mercedes", imagen: "mercedez.png" },
    { nombre: "Nissan", imagen: "nissan.png" },
    { nombre: "Mazda", imagen: "mazda.png" },
    { nombre: "Honda", imagen: "honda.png" },
    { nombre: "Lexus", imagen: "lexus.png" },
    { nombre: "Lamborghini", imagen: "lamboghini.png" },
    { nombre: "BMW", imagen: "bmw.png" }
  ];

  // 👇 Si ya seleccionó una marca, mostramos la galería
  if (marcaSeleccionada) {
    return (
      <div>
        <button
          className="boton-volver"
          onClick={() => setMarcaSeleccionada(null)}
        >
          ⬅ Volver
        </button>
        <GaleriaVehiculos marca={marcaSeleccionada} />
      </div>
    );
  }

  // 👇 Si no hay marca seleccionada, mostramos la lista de marcas
  return (
    <main className="contenedor1080px">
      <div>
        <h2 className="titulo">Elige tu Marca</h2>
        <section className="marcas">
          {marcasUno.map((m, index) => (
            <div className="marca" key={index}>
              <div className="imagenM">
                <img src={`/marcas/${m.imagen}`} alt={m.nombre} />
              </div>
              <button
                className="botonM"
                onClick={() => setMarcaSeleccionada(m.nombre)}
              >
                <span>{m.nombre}</span>
              </button>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}

export default MainElige;
