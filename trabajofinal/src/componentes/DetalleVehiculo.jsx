import "./DetalleVehiculo.css";

function DetalleVehiculo({ vehiculo, onVolver }) {
  return (
    <div className="detalle-card">
      <button className="detalle-volver" onClick={onVolver}>⬅ Volver</button>
      <img className="detalle-imagen" src={vehiculo.imagen2} alt={vehiculo.modelo} />
      <h2>{vehiculo.marca} {vehiculo.modelo}</h2>
      <p><strong>Año:</strong> {vehiculo.año}</p>
      <p><strong>Precio:</strong> ${vehiculo.precio}</p>
      <p><strong>Motor:</strong> {vehiculo.motor}</p>
      <p><strong>Transmision:</strong> {vehiculo.transmision}</p>
      <p><strong>Combustible:</strong> {vehiculo.combustible}</p>
      <p><strong>Color:</strong> {vehiculo.color}</p>
      <p><strong>Puertas:</strong> {vehiculo.puertas}</p>
      <p><strong>Potencia:</strong> {vehiculo.potencia}</p>
    </div>
  );
}

export default DetalleVehiculo;
