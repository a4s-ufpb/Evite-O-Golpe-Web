import React, { useState, useEffect } from 'react';
import quizQuestions from '../../data/questions.json';
import { useNavigate } from 'react-router-dom';
import imagem from '../../assets/idoso.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import styles from './Quiz.module.css';

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
        toast.error("Não é bem isso. Tente novamente", { autoClose: 2000 });
      }
    }, 1000);
  };

  const getButtonClass = (idx, selectedAnswerIndex, isAnswerCorrect) => {
    if (selectedAnswerIndex !== null && selectedAnswerIndex === idx) {
      return isAnswerCorrect ? styles.correct : styles.incorrect;
    }
    return '';
  };

  return (
    <div className={styles.container}>
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
      <div className={styles.content}>
        <img className={styles.imagemQuiz} src={imagem} alt="Descrição da imagem" />
        <div className={styles.buttonContainer}>
          {questions.length > 0 && (
            <>
              <h3 className={styles.title}>{questions[currentQuestionIndex].question}</h3>
              {questions[currentQuestionIndex].answers.map((answer, idx) => (
                <button
                  key={idx}
                  className={`${styles.customButton} ${getButtonClass(idx, selectedAnswerIndex, isAnswerCorrect)}`}
                  onClick={() => handleAnswerClick(answer, idx)}
                >
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
