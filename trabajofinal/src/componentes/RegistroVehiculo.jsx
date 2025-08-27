import React, { Component } from 'react';

class RegistroVehiculo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      marca: '',
      modelo: '',
      año: '',
      precio: '',
      descripcion: '',
      imagen1: '',
      imagen2: ''
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleImageUpload = e => {
    const { name, files } = e.target;
    const reader = new FileReader();
    reader.onload = () => {
      this.setState({ [name]: reader.result });
    };
    if (files[0]) reader.readAsDataURL(files[0]);
  };

  handleSubmit = e => {
    e.preventDefault();
    localStorage.setItem('vehicleData', JSON.stringify(this.state));
    alert('Información del vehículo guardada en localStorage');
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Información del Vehículo</h2>
        <input name="marca" placeholder="Marca" onChange={this.handleChange} required />
        <input name="modelo" placeholder="Modelo" onChange={this.handleChange} required />
        <input name="año" type="number" placeholder="Año" onChange={this.handleChange} required />
        <input name="precio" type="number" placeholder="Precio" onChange={this.handleChange} required />
        <textarea name="descripcion" placeholder="Descripción" onChange={this.handleChange} required />
        <input name="imagen1" type="file" accept="image/*" onChange={this.handleImageUpload} required />
        <input name="imagen2" type="file" accept="image/*" onChange={this.handleImageUpload} required />
        <button type="submit">Guardar Vehículo</button>
      </form>
    );
  }
}

export default RegistroVehiculo;