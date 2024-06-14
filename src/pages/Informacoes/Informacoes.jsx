// Informacoes.jsx
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
                        <p>Aquila Saxum Lux quila Saxum Lux quila Saxum Lux quila Saxum Lux </p>
                        <li><a href="https://www.google.com" target="_blank" rel="noopener noreferrer">Google</a></li>
                        <p>Aquila Saxum Lux quila Saxum Lux quila Saxum Lux quila Saxum Lux</p>
                        <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                        <p>Aquila Saxum Lux quila Saxum Lux quila Saxum Lux quila Saxum Lux quila Saxum Lux</p>
                        <li><a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a></li>
                    </ul>
                </div>

                <div className={styles.containerDireita}>
                    <h2>Vídeos</h2>
                    <ul className={styles.listaTutorial}>
                        <p>Aquila Saxum Lu quila Saxum Lux quila Saxum Lux quila Saxum Luxx</p>
                        <li><a href="https://www.google.com" target="_blank" rel="noopener noreferrer">Google</a></li>
                        <p>Aquila Saxum LuxAquila Saxum Lu quila Saxum Lux quila Saxum Lux quila Saxum Luxx</p>
                        <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                        <p>Aquila Saxum LuxAquila Saxum Lu quila Saxum Lux quila Saxum Lux quila Saxum </p>
                        <li><a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a></li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Informacoes;