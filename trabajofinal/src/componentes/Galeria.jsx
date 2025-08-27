import { useState } from "react";
import DetalleVehiculo from "./DetalleVehiculo.jsx";
import "./Galeria.css";

function Galeria({ marca }) {
  const [vehiculoSeleccionado, setVehiculoSeleccionado] = useState(null);

  // lista de vehículos (agrega/edita según tus imágenes en /public/modelos/)
  const vehiculos = [
    { marca: "Volkswagen", modelo: "Golf", año: 2021, precio: 18000, imagen: "/modelos/1volkswagenLateral.png", motor: "1.4L TSI", transmision: "DSG 7 vel.", combustible: "Gasolina", color: "Rojo", puertas: 5, potencia: "150 HP" },
    { marca: "Volkswagen", modelo: "Passat", año: 2019, precio: 20000, imagen: "/modelos/1VOLKSWAGENPASAT LATERAL.png", motor: "2.0L TSI", transmision: "DSG 6 vel.", combustible: "Gasolina", color: "Negro", puertas: 4, potencia: "190 HP" },

    { marca: "Mercedes", modelo: "Clase A", año: 2022, precio: 30000, imagen: "/modelos/2MBClaseALateral.png", motor: "1.3L Turbo", transmision: "Automática 7 vel.", combustible: "Gasolina", color: "Plata", puertas: 5, potencia: "163 HP" },
    { marca: "Mercedes", modelo: "Clase C", año: 2020, precio: 35000, imagen: "/modelos/2MBClaseClateral.png", motor: "2.0L Turbo", transmision: "Automática 9 vel.", combustible: "Gasolina", color: "Blanco", puertas: 4, potencia: "255 HP" },

    { marca: "Nissan", modelo: "Sentra", año: 2021, precio: 17000, imagen: "/modelos/3nisancentraLateral.png", motor: "1.6L", transmision: "Automática CVT", combustible: "Gasolina", color: "Gris", puertas: 4, potencia: "122 HP" },
    { marca: "Nissan", modelo: "Altima", año: 2021, precio: 17000, imagen: "/modelos/3nissanaltimaLateral.png", motor: "1.6L", transmision: "Automática CVT", combustible: "Gasolina", color: "Gris", puertas: 4, potencia: "122 HP" },

    { marca: "Mazda", modelo: "Mazda 3", año: 2022, precio: 21000, imagen: "/modelos/4Mazda3lateral.png", motor: "2.0L Skyactiv", transmision: "Automática 6 vel.", combustible: "Gasolina", color: "Azul", puertas: 4, potencia: "155 HP" },
    { marca: "Mazda", modelo: "Mazda CX-5", año: 2022, precio: 21000, imagen: "/modelos/4MazdaCX-5lateral.png", motor: "2.0L Skyactiv", transmision: "Automática 6 vel.", combustible: "Gasolina", color: "Azul", puertas: 4, potencia: "155 HP" },

    { marca: "Honda", modelo: "Civic", año: 2021, precio: 19000, imagen: "/modelos/5CivicLateral.png", motor: "2.0L", transmision: "CVT", combustible: "Gasolina", color: "Negro", puertas: 4, potencia: "158 HP" },
    { marca: "Honda", modelo: "Accord", año: 2021, precio: 19000, imagen: "/modelos/5HondaAccordLateral.png", motor: "2.0L", transmision: "CVT", combustible: "Gasolina", color: "Negro", puertas: 4, potencia: "158 HP" },

    { marca: "Lexus", modelo: "IS 300", año: 2022, precio: 38000, imagen: "/modelos/6LexusIS 300Lateral.png", motor: "2.0L Turbo", transmision: "Automática 8 vel.", combustible: "Gasolina", color: "Blanco", puertas: 4, potencia: "241 HP" },
    { marca: "Lexus", modelo: "RX 350", año: 2022, precio: 38000, imagen: "/modelos/6LexusLSRX 350LATERAL.png", motor: "2.0L Turbo", transmision: "Automática 8 vel.", combustible: "Gasolina", color: "Blanco", puertas: 4, potencia: "241 HP" },

    { marca: "Lamborghini", modelo: "Aventador", año: 2021, precio: 200000, imagen: "/modelos/7LGAventadorLateral.png", motor: "5.2L V10", transmision: "Automática 7 vel.", combustible: "Gasolina", color: "Amarillo", puertas: 2, potencia: "610 HP" },
    { marca: "Lamborghini", modelo: "Huracán", año: 2021, precio: 200000, imagen: "/modelos/7LGHuracánLateral.png", motor: "5.2L V10", transmision: "Automática 7 vel.", combustible: "Gasolina", color: "Amarillo", puertas: 2, potencia: "610 HP" },

    { marca: "BMW", modelo: "Serie 3", año: 2021, precio: 33000, imagen: "/modelos/8BMWSerie 3LATERAL.png", motor: "2.0L Turbo", transmision: "Automática 8 vel.", combustible: "Gasolina", color: "Gris", puertas: 4, potencia: "255 HP" },
    { marca: "BMW", modelo: "X5", año: 2019, precio: 50000, imagen: "/modelos/8BMWX5LATERAL.png", motor: "3.0L", transmision: "Automática 8 vel.", combustible: "Gasolina", color: "Negro", puertas: 5, potencia: "335 HP" }
  ];

  // filtrar por la marca recibida (case-insensitive)
   const filtrados = vehiculos.filter(v => v.marca === marca);

  if (vehiculoSeleccionado) {
    return (
      <DetalleVehiculo
        vehiculo={vehiculoSeleccionado}
        onVolver={() => setVehiculoSeleccionado(null)}
      />
    );
  }

  return (
    <div className="vehiculo-contenedor">
      {filtrados.map((v, index) => (
        <div key={index} className="vehiculo-card" onClick={() => setVehiculoSeleccionado(v)}>
          <img src={v.imagen} alt={v.modelo} />
          <h3>{v.modelo}</h3>
          <p>Año: {v.año}</p>
          <p>Precio: ${v.precio}</p>
        </div>
      ))}
    </div>
  );
}

export default Galeria;