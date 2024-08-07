// src/pages/Home.js
import React from "react";
import "../styles/home.css";
import Notebook from "../assets/home-photo.png";
const Home = () => {
  return (
    <section className="container">
      <div className="signin">
        <div className="login">
        <h1>Olá</h1>
          <h2>Para continuar navegando de forma segura, efetue o login na rede.</h2>
        
        <form>
        <h3>Login</h3>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
        </div>
        
      <div className="right-side">
        <img src={Notebook} alt="Placeholder" />
      </div>
    </section>
  );
};

export default Home;
