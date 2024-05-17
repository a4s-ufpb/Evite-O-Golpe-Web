import React, { useState, useEffect } from 'react'; 
import './Quiz.css';
import quizQuestions from '../data/questions.json';

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    setQuestions(quizQuestions); // Carrega as perguntas do arquivo JSON
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
          alert("Você completou o quiz!");
          setCurrentQuestionIndex(0);
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
                        : '#07377A' // Cor padrão
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
