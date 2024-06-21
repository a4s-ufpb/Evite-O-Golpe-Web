import React from 'react';
import styles from './Informacoes.module.css';
import imagem from '../../assets/idoso.png';

const Informacoes = () => {
    return (
        <div>
            <h1 className={styles.titulo}>Lista de materiais</h1>
            <div className={styles.wrapper}>
                <div className={styles.containerEsquerda}>
                    <h2>Sites</h2>  
                    <ul className={styles.listaTutorial}>
                        <p>Use frases complexas como senhas, incorporando caracteres especiais e variando entre maiúsculas e minúsculas para aumentar a segurança</p>
                        <li><a href="https://conectaja.proteste.org.br/8-dicas-para-se-proteger-e-evitar-golpes/" target="_blank" rel="noopener noreferrer">https://conectaja.proteste.org.br/8-dicas-para-se-proteger-e-evitar-golpes/</a></li>
                        <p>Se uma oferta parece boa demais para ser verdade, provavelmente não é legítima. Promoções com preços muito abaixo do mercado podem ser um indicativo de fraude</p>
                        <li><a href="https://www.serasa.com.br/premium/blog/10-dicas-para-evitar-fraudes-nas-compras-online/" target="_blank" rel="noopener noreferrer">https://www.serasa.com.br/premium/blog/10-dicas-para-evitar-fraudes-nas-compras-online/</a></li>
                        <p>Evite clicar em links ou abrir anexos de mensagens não solicitadas ou de remetentes desconhecidos, pois podem conter malwares ou direcionar para sites fraudulentos</p>
                        <li><a href="https://www.hostinger.com.br/tutoriais/o-que-e-phishing-e-como-se-proteger-de-golpes-na-internet" target="_blank" rel="noopener noreferrer">https://www.hostinger.com.br/tutoriais/o-que-e-phishing-e-como-se-proteger-de-golpes-na-internet</a></li>
                        <p>Mantenha-se informado sobre as táticas de golpes mais comuns e atualize-se sobre as últimas tendências em segurança digital. Desenvolva habilidades de discernimento ao lidar com informações online​ </p>
                        <li><a href="https://wi2be.com.br/internet/como-identificar-e-evitar-golpes-online-um-guia-abrangente/" target="_blank" rel="noopener noreferrer">https://wi2be.com.br/internet/como-identificar-e-evitar-golpes-online-um-guia-abrangente/</a></li>
                    </ul>
                </div>
                <div className={styles.containerDireita}>
                    <h2>Vídeos</h2>
                    <ul className={styles.listaTutorial}>
                        <p>Golpe do amor nas redes sociais</p>
                        <li><a href="https://www.youtube.com/watch?v=81oQV0ryFkk" target="_blank" rel="noopener noreferrer">https://www.youtube.com/watch?v=81oQV0ryFkk</a></li>
                        <p>Golpe do pix</p>
                        <li><a href="https://www.youtube.com/watch?v=JEP9pmN2GEM&pp=ygUedmlkZW9zIHNvYnJlIGdvbHBlIG5hIGludGVybmV0" target="_blank" rel="noopener noreferrer">https://www.youtube.com/watch?v=JEP9pmN2GEM&pp=ygUedmlkZW9zIHNvYnJlIGdvbHBlIG5hIGludGVybmV0</a></li>
                        <p>Golpe de vendas</p>
                        <li><a href="https://www.youtube.com/watch?v=v1kY3gsVg9w" target="_blank" rel="noopener noreferrer">https://www.youtube.com/watch?v=v1kY3gsVg9w</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Informacoes;
