import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './InformacaoUsuario.module.css';

const InformacaoUsuario = () => {
  const [userID, setUserID] = useState('');
  const navigate = useNavigate();
  const API_URL = 'https://activities.a4s.dev.br/api/user';

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (userID.trim()) {
      try {
        const response = await axios.post(API_URL, { userID });
        console.log('User saved:', response.data);
        sessionStorage.setItem('userID', userID);
        navigate('/Quiz'); 
      } catch (error) {
        console.error('Error saving user:', error);
      }
    }
  };

  const handleAnonymousSubmit = async () => {
    try {
      const response = await axios.post(API_URL, { userID: 'Anonymous' });
      console.log('Anonymous user saved:', response.data);
      sessionStorage.setItem('userID', 'Anonymous');
      navigate('/Quiz');
    } catch (error) {
      console.error('Error saving anonymous user:', error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2>Digite seu nome:</h2>
        <form id="userForm" onSubmit={handleSubmit}>
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
