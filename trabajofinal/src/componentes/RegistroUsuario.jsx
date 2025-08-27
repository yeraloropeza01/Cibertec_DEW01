import React, { Component } from 'react';
import "../componentes/RegistroUsuario.css";
import { GlobalContext } from '../GlobalContext';

class RegistroUsuario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: '',
      correo: '',
      telefono: ''
    };
  }

  static contextType = GlobalContext

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { nombre, correo, telefono } = this.state;
    localStorage.setItem('userData', JSON.stringify({ nombre, correo, telefono }));
    console.log("usuario registrado: " + this.state.nombre)
    this.props.mostrarPagina('registro_vehiculo')
    this.context.mostrarMensaje();
  };

  render() {
    return (
        <div className='registroUsuario contenedor1080px'>
            <div className='arri'>
                <h1 className="titulo">Registro de Usuario</h1>
            </div>
            <div className='imagen'>
              Colocar aqui una imagen
            </div>
            <form className='formulario' onSubmit={this.handleSubmit}>
                <div className='control'>
                    <label>¿Cuál es tu Nombre?</label>
                    <input name="nombre" placeholder="Nombre" onChange={this.handleChange} required autoComplete='off'/>
                </div>
                <div className='control'>
                    <label>¿Cuál es tu correo?</label>
                    <input name="correo" type="email" placeholder="Correo" onChange={this.handleChange} required  autoComplete='off'/>
                </div>
                <div className='control'>
                    <label>¿Cuál es tu celular?</label>
                    <input name="telefono" placeholder="Teléfono" onChange={this.handleChange} required  autoComplete='off'/>
                </div>
                <button type="submit">Continuar</button>
            </form>
        </div>
    );
  }
}

export default RegistroUsuario;