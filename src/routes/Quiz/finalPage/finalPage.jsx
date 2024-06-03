import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './finalPage.css';
import imagem from '../../../img/idoso.png';
import 'bootstrap-icons/font/bootstrap-icons.css';

function FinalPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const errors = location.state?.errorCount || 0; // Assume 0 se nenhum erro for passado

    const handleNavigateHome = () => {
        navigate('/');
    };
    
    const handleNavigateQuiz = () => {
        navigate('/quiz');
    };

    return (
        <div className="final-page-container">
            <h1>Parabéns por finalizar o quiz!!</h1>
            <img className="imagem" src={imagem} alt="Descrição da imagem" />
            <button type="button" onClick={handleNavigateHome} className="btn-voltar">
                <i className="bi bi-circle"></i>
            </button>
            <button type="button" onClick={handleNavigateQuiz} className="btn-reinciar">
                <i className="bi bi-arrow-repeat"></i>
            </button>
            <h2>Quantidade de erros totais: {errors}</h2>
        </div>
    );
}

export default FinalPage;
