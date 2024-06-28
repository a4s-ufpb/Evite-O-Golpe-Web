import React from 'react';
import styles from './Tutorial.module.css';

import acertando from '../../../public/assets/tutorial/acertando_quiz.png';
import errando from '../../../public/assets/tutorial/errando_quiz.png';
import feedback from '../../../public/assets/tutorial/feedback.png';
import maisInformacoes from '../../../public/assets/tutorial/mais_informacoes.png';
import finalQuiz from '../../../public/assets/tutorial/final_quiz.png';
import navbar from '../../../public/assets/tutorial/navbar.png'

const Tutorial = () => {
  return (
    <div>
      <div className={styles.container}>
        <h2>Sobre o quiz:</h2>
        <p>O quiz é composto por um total de cinco perguntas. Na tela apresentada, há uma única pergunta e quatro opções de resposta, 
          das quais apenas uma é a opção correta. Ao selecionar uma alternativa: Se a resposta escolhida for <span><strong>incorreta</strong></span>, 
          ela será destacada em vermelho, indicando que você deve tentar novamente.</p>
        <img className={styles.imageAcerto} src={acertando} alt="Descrição da imagem" />
        <p>Se a resposta for <span><strong>correta</strong></span>, ela será destacada em verde, confirmando sua escolha correta e permitindo que você avance para a próxima pergunta.</p>
        <img className={styles.imageErro} src={errando} alt="Descrição da imagem" />
        <p>Após responder corretamente a todas as cinco, o aplicativo fornecerá um feedback final, mostrando o número total de acertos e erros que você obteve durante o quiz.</p>
      </div>
      
      <div className={styles.container}>
        <h2>Sobre o Feedback:</h2>
        <p>Para acessar o formulário de feedback do quiz, clique no item "Feedback" no menu de navegação. 
          Isso o direcionará ao formulário onde você pode compartilhar suas impressões e comentários sobre a experiência do quiz.</p>
        <img className={styles.imageFeedback} src={feedback} alt="Descrição da imagem" />
      </div>
      
      <div className={styles.container}>
        <h2>Mais informações:</h2>
        <p>Para obter mais informações, clique no item "Informações" no menu de navegação. Lá, você encontrará uma variedade de materiais,
           incluindo vídeos e páginas detalhadas sobre os possíveis golpes. Esta seção é uma excelente fonte de recursos para aprofundar seu conhecimento e evitar fraudes.</p>
        <img className={styles.imageInfo} src={maisInformacoes} alt="Descrição da imagem" />
      </div>

      <div className={styles.container}>
        <h2>Sobre o final do quiz:</h2>
        <p>blablabla</p>
        <img className={styles.imageFinal} src={finalQuiz} alt="Descrição da imagem" />
      </div>

      <div className={styles.container}>
        <h2>Sobre o navbar:</h2>
        <p>blablabla</p>
        <img className={styles.imageNav} src={navbar} alt="Descrição da imagem" />
      </div>

    </div>
  );
}

export default Tutorial;
