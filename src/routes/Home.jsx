import React from 'react';
import { useNavigate } from 'react-router-dom';
import imagem from '../img/idoso.png';

const Home = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/Quiz');
  };

  return (
    <div>
        <div className="main-menu">
            <h1>Evite o Golpe</h1>
            <img className="imagem" src={imagem} alt="Descrição da imagem" />
        </div>
        <button className='button-iniciar' onClick={handleNavigate}>Iniciar</button>
    </div>
  );
}

export default Home;
