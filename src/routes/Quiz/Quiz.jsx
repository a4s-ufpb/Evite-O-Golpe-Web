import React, { useState, useEffect } from 'react';
import './Quiz.css';
import quizQuestions from '../../data/questions.json';
import { useNavigate } from 'react-router-dom';

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);
  const [questions, setQuestions] = useState([]);
  const navigate = useNavigate();

  // Função que embaralha e diminui para 5 o array de perguntas
    const shuffleAndReduceQuestions = (questionsArray) => {
    let shuffled = [...questionsArray].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 5);
  };

  // Carrega e embaralha as perguntas quando o componente é montado
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
      if (isCorrect) {
        const nextIndex = currentQuestionIndex + 1;
        if (nextIndex < questions.length) {
          setCurrentQuestionIndex(nextIndex);
        } else {
          if (window.confirm("Você completou o quiz! Reiniciando com novas perguntas, deseja responder novamente?")) {
            const shuffledQuestions = shuffleAndReduceQuestions(quizQuestions);
            setQuestions(shuffledQuestions);
            setCurrentQuestionIndex(0);
          } else {
            navigate('/');
          }
        }
      } else {
        alert("Tente outra vez.");
      }
      setSelectedAnswerIndex(null);
      setIsAnswerCorrect(null);
    }, 1000);
  };

  return (
    <div className="button-container">
      {questions.length > 0 && (
        <>
          <h3>{questions[currentQuestionIndex].question}</h3>
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
  );
}

export default Quiz;
