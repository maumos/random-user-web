import React, { Component } from 'react'
import logo from './Person1.png';
import person from './icons/icons8-person-30.png';
import email from './icons/icons8-email-30.png';
import calendar from './icons/icons8-calendar-30.png';
import location from './icons/icons8-google-maps-30.png';
import phone from './icons/icons8-phone-30.png';
import security from './icons/icons8-privacy-30.png';

import './App.css';
const tab = '\u00A0';
export class Persons extends Component {
  constructor(props){
    super(props)
    this.state = {
        namep: 'Pedro Perez',
        emailp: 'noloconozco2023@gmailcom',
        countryp: 'Colombia',
        datep: '31 Agosto',
        addressp: 'Carrera 54 # 36 - 83',
        phonep: '323 644 23 34',
        passwordp: '*********',
        text: 'Mi Nombre es',
        data: 'Mao Mos'
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();

  }

  handlerPersons = () => {
    this.setState ({
      text: 'Mi nombre es',
      data: this.state.namep
    })
  }
  handlerEmail = () => {
    this.setState ({
        text: 'Mi correo electronico es',
        data: this.state.emailp
    })
  }
  handlerDate = () => {
    this.setState ({
        text: 'Mi fecha de cumpleaños es',
        data: this.state.datep
    })
  }
  handlerAddress = () => {
    this.setState ({
        text: 'Mi dirección es',
        data: this.state.addressp
    })
  }
  handlerPhone = () => {
    this.setState ({
        text: 'Mi teléfono es',
        data: this.state.phonep
    })
  }
  handlerPassw = () => {
    this.setState ({
        text: 'Mi contraseña es',
        data: this.state.passwordp
    })
  }
  state={};
  render() {
    return (
      <div className="App">
        <h2 className='title-form'>Nuevo Usuario</h2>
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <label>{this.state.text}</label> 
            <label>{this.state.data}</label> 
        </header>
        <form className='App-buttons' onSubmit={this.handleSubmit}>
            <button onClick={this.handlerPersons}><img src={person} alt="Persona" /> </button> {tab}
            <button onClick={this.handlerEmail}><img src={email} alt="Correo" /></button> {tab}
            <button onClick={this.handlerDate}><img src={calendar} alt="Calendario" /></button> {tab}
            <button onClick={this.handlerAddress}><img src={location} alt="Ubicacion" /></button> {tab}
            <button onClick={this.handlerPhone}><img src={phone} alt="Telefono" /></button> {tab}
            <button onClick={this.handlerPassw}><img src={security} alt="Password" /></button> {tab}
        </form>
      </div>
    )
  }
}

export default Persons;
