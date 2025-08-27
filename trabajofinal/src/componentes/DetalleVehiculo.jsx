import "./DetalleVehiculo.css";

function DetalleVehiculo({ vehiculo, onVolver }) {
  return (
    <div className="detalle-card">
      <button className="detalle-volver" onClick={onVolver}>⬅ Volver</button>
      <img className="detalle-imagen" src={vehiculo.imagen} alt={vehiculo.modelo} />
      <h2>{vehiculo.marca} {vehiculo.modelo}</h2>
      <p><strong>Año:</strong> {vehiculo.año}</p>
      <p><strong>Precio:</strong> ${vehiculo.precio}</p>
    </div>
  );
}

export default DetalleVehiculo;
