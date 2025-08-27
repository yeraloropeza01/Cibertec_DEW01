import React, { Component } from 'react';
import "../componentes/RegistroUsuario.css";
import registro from "../imagenes/registro.jpg"
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
  };
  handleDeleteuser = e => {
    localStorage.clear("userData")
    this.props.mostrarPagina('')
  }
  render() {
    let userData = localStorage.getItem('userData')
    userData = JSON.parse(userData)
    console.log(userData)
    return (
        <div className='registroUsuario contenedor1080px'>
            {
              userData? (
              <div className='arri'>
                <h1 className="titulo">Bienvenido {userData.nombre}</h1>
                <br/>
                <button onClick={ () => this.props.mostrarPagina('lista_vehiculos')}>Ver mis Vehiculos</button>
                <button onClick={ () => this.props.mostrarPagina('registro_vehiculo')}>Registrar Vehiculo</button>
                <button onClick={ this.handleDeleteuser}>Salir del Sistema</button>
                <br/>
              </div>
              ):(
                <div>
                  <div className='arri'>
                    <h1 className="titulo">Registro de Usuario</h1>
                  </div>
                  <div className='imagen'>
                    <img src={registro} alt="" />
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
              )
            }  
        </div>
    );
  }
}
export default RegistroUsuario;