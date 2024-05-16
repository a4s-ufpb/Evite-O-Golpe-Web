import React, { useState, useEffect } from 'react'; 
import './About.css';
import quizQuestions from '../data/questions.json'; 

const About = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    setQuestions(quizQuestions);
  }, []);

  const handleAnswerClick = (answer) => {
    console.log("Resposta selecionada:", answer); //TODO: Tirar console? tem necessidade?
    const nextIndex = currentQuestionIndex + 1;
    if (nextIndex < questions.length) {
      setCurrentQuestionIndex(nextIndex);
    } else {
      alert("Você completou o quiz!"); //TODO: Colocar para que as perguntas e respostas sejam embaralhadas novamente ou quando acabar colocar para ir para tela inicial ou formulário
      setCurrentQuestionIndex(0);
    }
  };

  return (
    <div className="button-container">
      {questions.length > 0 && (
        <>
          <h3>{questions[currentQuestionIndex].question}</h3>
          {questions[currentQuestionIndex].answers.map((answer, idx) => (
            <button key={idx} className="custom-button" onClick={() => handleAnswerClick(answer)}>
              {answer}
            </button>
          ))}
        </>
      )}
    </div>
  );
}

export default About;
