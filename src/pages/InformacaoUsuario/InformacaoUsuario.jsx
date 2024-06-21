import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './InformacaoUsuario.module.css'; // Ensure correct path

const InformacaoUsuario = () => {
  const [userID, setUserID] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userID.trim()) {
      sessionStorage.setItem('userID', userID);
      navigate('/EviteOgolpeWEB/Quiz');
    }
  };

  const handleAnonymousSubmit = () => {
    sessionStorage.setItem('userID', 'Anonymous');
    navigate('/EviteOgolpeWEB/Quiz');
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2>Digite seu nome:</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="userID"
            name="userID"
            value={userID}
            onChange={(e) => setUserID(e.target.value)}
            required
          />
        </form>
        <div className={styles.buttonContainer}>
        <button type="submit" form="userForm">Enviar</button>
      </div>
      <p>ou</p>
      <button onClick={handleAnonymousSubmit} className={styles.noStyleLink}>Entrar sem meus dados</button>
    </div>
  </div>

  );
}

export default InformacaoUsuario;
