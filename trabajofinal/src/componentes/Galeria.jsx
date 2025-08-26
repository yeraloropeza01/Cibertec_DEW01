import React, { Component } from 'react';

class GaleriaVehiculos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vehiculos: [
        { marca: 'Toyota', modelo: 'Corolla', año: 2020, precio: 15000 },
        { marca: 'Honda', modelo: 'Civic', año: 2019, precio: 14000 },
        { marca: 'Ford', modelo: 'Focus', año: 2021, precio: 16000 },
        { marca: 'Toyota', modelo: 'Yaris', año: 2018, precio: 12000 },
        { marca: 'Honda', modelo: 'Accord', año: 2022, precio: 20000 },
        { marca: 'Ford', modelo: 'Fiesta', año: 2020, precio: 13000 }
      ]
    };
  }

  render() {
    const { marca } = this.props;
    const vehiculosFiltrados = this.state.vehiculos.filter(
      (vehiculo) => vehiculo.marca.toLowerCase() === marca.toLowerCase()
    );

    return (
      <div>
        <h2>Galería de Vehículos - Marca: {marca}</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
          {vehiculosFiltrados.map((vehiculo, index) => (
            <div
              key={index}
              style={{
                border: '1px solid #ccc',
                padding: '10px',
                width: '200px',
                borderRadius: '8px',
                backgroundColor: '#f9f9f9'
              }}
            >
              <h3>{vehiculo.modelo}</h3>
              <p><strong>Año:</strong> {vehiculo.año}</p>
              <p><strong>Precio:</strong> ${vehiculo.precio}</p>
            </div>
          ))}
          {vehiculosFiltrados.length === 0 && (
            <p>No se encontraron vehículos de la marca "{marca}".</p>
          )}
        </div>
      </div>
    );
  }
}

export default GaleriaVehiculos;