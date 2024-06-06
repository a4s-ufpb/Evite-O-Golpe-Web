import React, { useState, useEffect } from 'react';
import './Quiz.module.css';
import quizQuestions from '../../data/questions.json';
import { useNavigate } from 'react-router-dom';
import imagem from '../../assets/idoso.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Quiz = () => {
  const navigate = useNavigate();
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [errorCount, setErrorCount] = useState(0); // Estado para contar os erros

  const shuffleAndReduceQuestions = (questionsArray) => {
    let shuffled = [...questionsArray].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 5);
  };

  useEffect(() => {
    const shuffledQuestions = shuffleAndReduceQuestions(quizQuestions);
    setQuestions(shuffledQuestions);
  }, []);

  const handleAnswerClick = (answer, index) => {
    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect = answer === currentQuestion.correct;
    setSelectedAnswerIndex(index);
    setIsAnswerCorrect(isCorrect);

    setTimeout(() => {
        setSelectedAnswerIndex(null);
        setIsAnswerCorrect(null);
        if (isCorrect) {
            const nextIndex = currentQuestionIndex + 1;
            if (nextIndex < questions.length) {
                setCurrentQuestionIndex(nextIndex);
            } else {
                navigate('/finalDoQuiz', { state: { errorCount } });
            }
        } else {
            setErrorCount(prev => prev + 1);
            toast.error("Não é bem isso. Tente novamente", {autoClose: 2000});
        }
    }, 1000);
  };

  return (
    <div className="container">
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <div className="content">
        <img className="imagem-quiz" src={imagem} alt="Descrição da imagem" />
        <div className="button-container">
          {questions.length > 0 && (
            <>
              <h3 className="title">{questions[currentQuestionIndex].question}</h3>
              {questions[currentQuestionIndex].answers.map((answer, idx) => (
                <button key={idx}
                        className="custom-button"
                        onClick={() => handleAnswerClick(answer, idx)}
                        style={{
                          backgroundColor: selectedAnswerIndex !== null && selectedAnswerIndex === idx
                            ? isAnswerCorrect ? 'green' : 'red'
                            : '#07377A'
                        }}>
                  {answer}
                </button>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Quiz;
