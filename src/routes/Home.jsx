import React from 'react'
import imagem from '../img/idoso.png'

const Home = () => {
  return (
    <div>
        <div className="main-menu">
            <h1>Evite o Golpe</h1>
            <img className="imagem" src={imagem} alt="Descrição da imagem" />
        </div>
            <button className='button-iniciar'>Iniciar</button>
        </div>
  )
}

export default Home