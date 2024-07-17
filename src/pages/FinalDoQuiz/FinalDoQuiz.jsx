import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import imagem from '../../assets/idoso.png';
import 'bootstrap-icons/font/bootstrap-icons.css';
import styles from '../FinalDoQuiz/FinalDoQuiz.module.css';

function FinalDoQuiz() {
    const navigate = useNavigate();
    const location = useLocation();
    const errors = location.state?.errorCount || 0;
    const correctAnswers = location.state?.correctCount || 0;
    const totalAttempts = correctAnswers + errors;
    const performance = totalAttempts > 0 ? (correctAnswers / totalAttempts) * 100 : 0;

    const handleNavigateHome = () => {
        navigate('/EviteOgolpeWEB');
    };
    
    const handleNavigateQuiz = () => {
        navigate('/EviteOgolpeWEB/quiz');
    };

    const openFeedbackForm = () => {
        window.open('https://bit.ly/form_evite_o_golpe', '_blank');
    };

    return (
        <div className={styles.finalPageContainer}>
            <h1>Parabéns por finalizar o quiz!</h1>
            <img className={styles.imagem} src={imagem} alt="Imagem de parabens por ter terminado" />
            <button type="button" onClick={handleNavigateHome} className={styles.btnVoltar}>
                <i className="bi bi-chevron-left"></i></button>
            <button type="button" onClick={handleNavigateQuiz} className={styles.btnReinciar}>
                <i className="bi bi-arrow-repeat"></i></button>
            <h2>Tentativas totais: {totalAttempts}</h2>
            <h2>Acertos: {correctAnswers}</h2>
            <h2>Tentativas erradas: {errors}</h2>
            <h2>Desempenho geral: {performance.toFixed(2)}%</h2>
            <button type="button" onClick={openFeedbackForm} className={styles.btnFeedBack}>FeedBack</button>
        </div>
    );
}

export default FinalDoQuiz;
