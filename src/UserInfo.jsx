import React, { useState, useEffect } from "react";
import axios from "axios";
import person from "./icons/icons8-person-30.png";
import email from "./icons/icons8-email-30.png";
import calendar from "./icons/icons8-calendar-30.png";
import location from "./icons/icons8-google-maps-30.png";
import phone from "./icons/icons8-phone-30.png";
import security from "./icons/icons8-privacy-30.png";

import "./App.css";

function UserInfo() {
  const tab = "\u00A0";
  const [user, setUser] = useState(null);
  const [state, setState] = useState({ text: "", data: "" });

  useEffect(() => {
    axios
      .get("https://randomuser.me/api/")
      .then((response) => {
        setUser(response.data.results[0]);
      })
      .catch((error) => {
        console.error("Error al obtener los datos del usuario", error);
      });
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handlerPersons() {
    setState({
      text: "Mi nombre es",
      data: `${user.name.first} ${user.name.last}`
    });
  }

  function handlerEmail() {
    setState({
      text: "Mi correo electronico es",
      data: user.email
    });
  }
  function handlerDate() {
    setState({
      text: "Mi fecha de cumpleaños es",
      data: user.dob.date
    });
  }
  function handlerAddress() {
    setState({
      text: "Mi dirección es",
      data: `${user.location.street.number} ${user.location.street.name}`
    });
  }
  function handlerPhone() {
    setState({
      text: "Mi teléfono es",
      data: user.phone
    });
  }
  function handlerPassw() {
    setState({
      text: "Mi contraseña es",
      data: user.login.password
    });
  }

  return (
    <div>
      {user ? (
        <div className="App">
          <h2 className="title-form">Datos Usuario</h2>
          <header className="App-header">
            <img src={user.picture.thumbnail} className="App-logo" alt="logo" />
            <label>{state.text}</label>
            <label>{state.data}</label>
          </header>
          <form className="App-buttons" onSubmit={handleSubmit}>
            <button onClick={handlerPersons}>
              <img src={person} alt="Persona" />{" "}
            </button>{" "}
            {tab}
            <button onClick={handlerEmail}>
              <img src={email} alt="Correo" />
            </button>{" "}
            {tab}
            <button onClick={handlerDate}>
              <img src={calendar} alt="Calendario" />
            </button>{" "}
            {tab}
            <button onClick={handlerAddress}>
              <img src={location} alt="Ubicacion" />
            </button>{" "}
            {tab}
            <button onClick={handlerPhone}>
              <img src={phone} alt="Telefono" />
            </button>{" "}
            {tab}
            <button onClick={handlerPassw}>
              <img src={security} alt="Password" />
            </button>{" "}
            {tab}
          </form>
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
}

export default UserInfo;
