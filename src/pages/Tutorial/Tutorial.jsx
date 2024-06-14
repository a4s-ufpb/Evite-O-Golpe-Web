import React from 'react';
import styles from './Tutorial.module.css';
import imagem from '../../assets/idoso.png';


const Tutorial = () => {
  return (
    <div>
      <div className={styles.funcionamentoQuiz}>
        <img className={styles.imageContainer} src={imagem} alt="Descrição da imagem" />
        <p>O quiz é composto por um total de cinco perguntas. Na tela apresentada, há uma única pergunta e quatro opções de resposta, das quais apenas uma é a opção correta.
            Ao selecionar uma alternativa:
            Se a resposta escolhida for <span><strong>incorreta</strong></span>, ela será destacada em vermelho, indicando que você deve tentar novamente.
            Se a resposta for <span><strong>correta</strong></span>, ela será destacada em verde, confirmando sua escolha correta e permitindo que você avance para a próxima pergunta.
            Após responder corretamente a todas as cinco, o aplicativo fornecerá um feedback final, mostrando o número total de acertos e erros que você obteve durante o quiz.
        </p>    
      </div>
      
      <div className={styles.funcionamentoFormulario}>
        <img className={styles.imageContainer} src={imagem} alt="Descrição da imagem" />
        <p>Para acessar o formulário de feedback do quiz, por favor, clique na barra de pesquisa localizada no topo da página e digite "formulario". 
          Isso o direcionará ao formulário onde você pode compartilhar suas impressões e comentários sobre a experiência do quiz.</p>
      </div>
      
      <div className={styles.funcionamentoInformacoes}>
        <img className={styles.imageContainer} src={imagem} alt="Descrição da imagem" />
        <p>Para obter mais informações, clique no item "Informações" no menu de navegação. Lá, você encontrará uma variedade de materiais,
           incluindo vídeos e páginas detalhadas sobre os possíveis golpes. Esta seção é uma excelente fonte de recursos para aprofundar seu conhecimento e evitar fraudes.</p>
      </div>
    </div>
  );
}

export default Tutorial;
