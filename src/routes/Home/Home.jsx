import React from 'react';
import { useNavigate } from 'react-router-dom';
import imagem from '../../img/idoso.png';
import '../Home/home.css'; // Importação do CSS de forma global

const Home = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/Quiz');
  };

  return (
    <div className="container">
        <div className="main-menu">
            <h1>Evite o Golpe</h1>
            <img className="imagem" src={imagem} alt="Descrição da imagem" />
        </div>
        <button type="button" onClick={handleNavigate} className="btn">Iniciar</button>
    </div>
  );
}

export default Home;
