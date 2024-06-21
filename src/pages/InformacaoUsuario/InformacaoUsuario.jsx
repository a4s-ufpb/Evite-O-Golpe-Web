import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './InformacaoUsuario.module.css'; // Certifique-se de que o caminho está correto

const InformacaoUsuario = () => {
  const [userID, setUserID] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();  // Impede o comportamento padrão do formulário
    if (userID.trim()) {  // Checa se o userID não é apenas espaços em branco
      sessionStorage.setItem('userID', userID);  // Salva o userID no sessionStorage
      navigate('/EviteOgolpeWEB/Quiz');  // Navega para a página do quiz
    }
  };

  const handleAnonymousSubmit = () => {
    sessionStorage.setItem('userID', 'Anonymous');  // Define o userID como 'Anonymous'
    navigate('/EviteOgolpeWEB/Quiz');  // Navega para a página do quiz
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
