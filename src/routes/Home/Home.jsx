import React from 'react';
import { useNavigate } from 'react-router-dom';
import imagem from '../../img/idoso.png';
import styles from './home.module.css';

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
        <button type="button" onClick={handleNavigate} class={styles.btn}>Iniciar</button>
    </div>
  );
}

export default Home;
