import "./DetalleVehiculo.css";
function DetalleVehiculo({ vehiculo, onVolver }) {
  return (
    <div className="detalle-card">
      <button className="detalle-volver" onClick={onVolver}>⬅ Volver</button>
      <img className="detalle-imagen" src={vehiculo.imagen2} alt={vehiculo.modelo} />
      <h2>{vehiculo.marca} {vehiculo.modelo}</h2>
      <div className="vehiculo-info-grid">
        <div><span>Año:</span> {vehiculo.año}</div>
        <div><span>Precio:</span> ${vehiculo.precio}</div>
        <div><span>Tipo:</span> {vehiculo.tipo}</div>
        <div><span>Color:</span> {vehiculo.color}</div>
        <div><span>Puertas:</span> {vehiculo.puertas}</div>
        <div><span>Asientos:</span> {vehiculo.asientos}</div>
        <div><span>Motor:</span> {vehiculo.motor}</div>
        <div><span>Tipo de Motor:</span> {vehiculo.tipoMotor}</div>
        <div><span>Potencia:</span> {vehiculo.potencia}</div>
        <div><span>Transmisión:</span> {vehiculo.transmision}</div>
        <div><span>Tracción:</span> {vehiculo.traccion}</div>
        <div><span>Aceleración:</span> {vehiculo.aceleracion}</div>
        <div><span>Consumo Ciudad:</span> {vehiculo.consumoCiudad}</div>
        <div><span>Consumo Carretera:</span> {vehiculo.consumoCarretera}</div>
      </div>
    </div>
  );
}
export default DetalleVehiculo;
