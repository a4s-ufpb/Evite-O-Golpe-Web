import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import imagem from '../../assets/idoso.png';
import 'bootstrap-icons/font/bootstrap-icons.css';
import styles from '../FinalDoQuiz/FinalDoQuiz.module.css';

function FinalDoQuiz() {
    const navigate = useNavigate();
    const location = useLocation();
    const errors = location.state?.errorCount || 0; // Assume 0 se nenhum erro for passado

    const handleNavigateHome = () => {
        navigate('/EviteOgolpeWEB');
    };
    
    const handleNavigateQuiz = () => {
        navigate('/EviteOgolpeWEB/quiz');
    };

    return (
        <div className={styles.finalPageContainer}>
            <h1>Parabéns por finalizar o quiz!!</h1>
            <img className={styles.imagem} src={imagem} alt="Descrição da imagem" />
            <button type="button" onClick={handleNavigateHome} className={styles.btnVoltar}>
                <i className="bi bi-chevron-left"></i>
            </button>
            <button type="button" onClick={handleNavigateQuiz} className={styles.btnReinciar}>
                <i className="bi bi-arrow-repeat"></i>
            </button>
            <h2>Quantidade de erros totais: {errors}</h2>
        </div>
    );
}

export default FinalDoQuiz;
