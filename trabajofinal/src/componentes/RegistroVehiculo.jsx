import React, { Component } from 'react';
import { GlobalContext } from '../GlobalContext';
import "../componentes/RegistroVehiculo.css";

class RegistroVehiculo extends Component {
  static contextType = GlobalContext
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
    console.log(e.target.value)
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
    this.props.mostrarPagina('lista_vehiculos')
  };

  render() {
    const {marcas} = this.context
    console.log(marcas)
    return (
      <div className='registroVehiculo contenedor1080px'>
        <div className='arri'>
            <h1 className="titulo">Registro de Vehiculo</h1>
        </div>
        <form className='formulario' onSubmit={this.handleSubmit}>
          <div className='izquierda'>

            <div className='control'>
            <label>Elije la Marca</label>
            <select name='marca' onChange={this.handleChange} required>
              <option value="">--- Marca Seleccionada ---</option>
              {
                marcas.map( 
                  (marca, index) => (
                    <option key={index} value={marca.nombre}>
                      {marca.nombre}
                    </option>
                  )
                )
              }
            </select>
          </div>
          <div className='control'>
            <label>Modelo</label>
            <input name="modelo" placeholder="Modelo" onChange={this.handleChange} required />
          </div>
          <div className='control'>
            <label>Año de Fabricación</label>
            <input name="año" type="number" placeholder="Año" onChange={this.handleChange} required />
          </div>
          <div className='control'>
            <label>Precio de Venta</label>
            <input name="precio" type="number" placeholder="Precio" onChange={this.handleChange} required />
          </div>
          <div className='control'>
            <label>Comentario</label>
            <textarea name="descripcion" placeholder="Descripción" onChange={this.handleChange} required />
          </div>
          </div>
          <div className='derecha'>
            <div className='control'>
              <input name="imagen1" type="file" accept="image/*" onChange={this.handleImageUpload} required />
                
                  {this.state.imagen1 && (
                    <div style={{ marginTop: '10px' }}>
                      <p>Vista previa de la Imagen 1:</p>
                      <img
                        src={this.state.imagen1}
                        alt="Vista previa del vehículo"
                        style={{ height: '150px', borderRadius: '8px' }}
                      />
                    </div>
                  )}

            </div>
            <div className='control'>
              <input name="imagen2" type="file" accept="image/*" onChange={this.handleImageUpload} required />                        
                {this.state.imagen2 && (
                  <div style={{ marginTop: '10px' }}>
                    <p>Vista previa de la Imagen 2:</p>
                    <img
                      src={this.state.imagen2}
                      alt="Vista previa del vehículo"
                      style={{ width: '150px', borderRadius: '8px' }}
                    />
                  </div>
                )}
            </div>
          </div>

         
 
          <div className='nofloat'>
            <br/>
            <button type="submit">Guardar Vehículo</button>
          </div>
        </form>
      </div>
      
    );
  }
}

export default RegistroVehiculo;