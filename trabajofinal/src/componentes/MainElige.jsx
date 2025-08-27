import { useContext, useState } from "react";
import "./MainElige.css";
import GaleriaVehiculos from "./Galeria.jsx";
import { GlobalContext } from "../GlobalContext.jsx";

function MainElige() {
  const contextType = GlobalContext
  const [marcaSeleccionada, setMarcaSeleccionada] = useState(null);
  const {marcas} = useContext(GlobalContext)


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
    
    <main className="sombra contenedor1080px">
      <div>
        <h2 className="titulo">Elige tu Marca</h2>
        <section className="marcas">
          {marcas.map((m, index) => (
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
