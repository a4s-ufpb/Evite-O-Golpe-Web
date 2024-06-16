// Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Home.module.css';
import imagem from '../../assets/imageMenu.png';

const Home = () => {
  const navigate = useNavigate();

  const handleNavigateToQuiz = () => {
    navigate('/EviteOgolpeWEB/Quiz');
  };

  const handleNavigateToTutorial = () => {
    navigate('/EviteOgolpeWEB/Tutorial')
  }

  return (
    <div className={styles.container}>
      <div className={styles.mainMenu}>
        <h1 className={styles.title}>Evite o Golpe</h1>
        <img className={styles.imageContainer} src={imagem} alt="Imagem de idoso" />
      </div>
      <button type="button" onClick={handleNavigateToQuiz} className={styles.btn}>Iniciar</button>
      <button type="button" onClick={handleNavigateToTutorial} className={styles.btn}>Tutorial</button>
    </div>
  );
}

export default Home;
