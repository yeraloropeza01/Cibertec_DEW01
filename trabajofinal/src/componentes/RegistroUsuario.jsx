import React, { Component } from 'react';
import "../componentes/RegistroUsuario.css";

class RegistroUsuario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: '',
      correo: '',
      telefono: ''
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { nombre, correo, telefono } = this.state;
    localStorage.setItem('userData', JSON.stringify({ nombre, correo, telefono }));
    //this.setState({ redirect: true });
  };

  render() {
    return (
        <div id="RegistroUsuario" className='contenedor1080px'>
            <div className='arri'>
                <h1 className="titulo">Registro de Usuario</h1>
            </div>
            <form onSubmit={this.handleSubmit}>
                <div classnaç='control'>
                    <label>¿Cuál es tu Nombre?</label>
                    <input name="nombre" placeholder="Nombre" onChange={this.handleChange} required />
                </div>
                <div classnaç='control'>
                    <label>¿Cuál es tu correo?</label>
                    <input name="correo" type="email" placeholder="Correo" onChange={this.handleChange} required />
                </div>
                <div classnaç='control'>
                    <label>¿Cuál es tu celular?</label>
                    <input name="telefono" placeholder="Teléfono" onChange={this.handleChange} required />
                </div>
                <button type="submit">Registrar</button>
            </form>
        </div>
    );
  }
}

export default RegistroUsuario;