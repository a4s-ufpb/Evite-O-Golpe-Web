import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Home.module.css';

const Home = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/quiz');
  };

  return (
    <div className={styles.container}>
      <div className={styles.mainMenu}>
        <h1 className={styles.title}>Evite o Golpe</h1>
        <img className={styles.imageContainer}  alt="Descrição da imagem" />
      </div>
      <button type="button" onClick={handleNavigate} className={styles.btn}>Iniciar</button>
    </div>
  );
}

export default Home;
