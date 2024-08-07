// src/pages/Home.js
import React from 'react';
import '../styles/home.css';
import Notebook from '../assets/home-photo.png';
const Home = () => {
  return (
    <section className="container">
      <div className="left-side">
        <h2>Login</h2>
        <form>
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
      <div className="right-side">
        <img src={Notebook} alt="Placeholder" />
      </div>
    </section>
  );
};

export default Home;
