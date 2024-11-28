import React from 'react';
import Navbar from './Navbar';
import Logo from '../../assets/Fg.png';
import '../styles/Home.css';
import Body from '../body/body'; // Caminho ajustado conforme necessário

const Home = () => {
  const scrollToExtracontainer = () => {
    const element = document.getElementById('extra-container'); // Garante que o ID exista no Body
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error('Elemento extra-container não encontrado.');
    }
  };

  return (
    <div className="home-container">
      <Navbar />
      <div className="content">
      <div className="logo-container">
        <img src={Logo} alt="Logo" />
      </div>
        <h1>Bem-vindo ao meu site!</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt nulla fuga debitis suscipit mollitia placeat recusandae. Ipsum, natus. Perspiciatis repudiandae corrupti officiis velit magni magnam debitis qui asperiores deleniti tempora!
        </p>
        <div className="button-container">
          <button className="btn yes" onClick={scrollToExtracontainer}>
            Sim
          </button>
          <button className="btn no">Não</button>
        </div>
      </div>
      <div className="body">
      <Body />
      </div>
    </div>
    
  );
};

export default Home;