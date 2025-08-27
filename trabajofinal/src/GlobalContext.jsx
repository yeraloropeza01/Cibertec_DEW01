import React, { createContext, Component } from 'react';

export const GlobalContext = createContext();

export class GlobalProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vehiculos: [], // Tu array global
      marcas: [
            { nombre: "Volkswagen", imagen: "volkswagen.png" },
            { nombre: "Mercedes", imagen: "mercedez.png" },
            { nombre: "Nissan", imagen: "nissan.png" },
            { nombre: "Mazda", imagen: "mazda.png" },
            { nombre: "Honda", imagen: "honda.png" },
            { nombre: "Lexus", imagen: "lexus.png" },
            { nombre: "Lamborghini", imagen: "lamboghini.png" },
            { nombre: "BMW", imagen: "bmw.png" }
      ]
    };
  }

  mostrarMensaje = () => {
      alert("holi")
  }

  addVehiculo = vehiculo => {
    this.setState(prev => ({
      vehiculos: [...prev.vehiculos, vehiculo]
    }));
  };

  render() {
    return (
      <GlobalContext.Provider
        value={{
          vehiculos: this.state.vehiculos,
          marcas: this.state.marcas,
          addVehiculo: this.addVehiculo,
          mostrarMensaje: this.mostrarMensaje
        }}
      >
        {this.props.children}
      </GlobalContext.Provider>
    );
  }
}