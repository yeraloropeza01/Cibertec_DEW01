import React, { useEffect, useState } from 'react';
const ListaVehiculos = () => {
  const [vehiculos, setVehiculos] = useState([]);
  useEffect(() => {
    const data = localStorage.getItem('vehicleData');
    if (data) {
      try {
        const parsed = JSON.parse(data);
        const lista = Array.isArray(parsed) ? parsed : [parsed];
        setVehiculos(lista);
      } catch (error) {
        console.error('Error al leer vehicleData:', error);
      }
    }
  }, []);
  const eliminarVehiculo = index => {
    const nuevosVehiculos = [...vehiculos];
    nuevosVehiculos.splice(index, 1);
    setVehiculos(nuevosVehiculos);
    localStorage.setItem('vehicleData', JSON.stringify(nuevosVehiculos));
  };
  return (
    <div className='contenedor1080px sombra'>
      <div className='arri'>
          <h1 className="titulo">Registro de Usuario</h1>
      </div>
      {vehiculos.length === 0 ? (
        <>
          <h1>No hay vehículos registrados.</h1>
        </>
      ) : (
        vehiculos.map((vehiculo, index) => (
          <div key={index} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
            <p><strong>Marca:</strong> {vehiculo.marca}</p>
            <p><strong>Modelo:</strong> {vehiculo.modelo}</p>
            <p><strong>Año:</strong> {vehiculo.año}</p>
            <p><strong>Precio:</strong> S/{vehiculo.precio}</p>
            <p><strong>Descripción:</strong> {vehiculo.descripcion}</p>
            {vehiculo.imagen1 && <img src={vehiculo.imagen1} alt="Imagen 1" style={{ width: '150px', marginRight: '10px' }} />}
            {vehiculo.imagen2 && <img src={vehiculo.imagen2} alt="Imagen 2" style={{ width: '150px' }} />}
            <br />
            <button onClick={() => eliminarVehiculo(index)} style={{ marginTop: '10px' }}>
              Eliminar
            </button>
          </div>
        ))
      )}
    </div>
  );
};
export default ListaVehiculos;