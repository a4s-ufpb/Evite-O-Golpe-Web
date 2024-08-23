import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import { createHashRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/Home/Home.jsx';
import Quiz from './pages/Quiz/Quiz.jsx'
import Tutorial from './pages/Tutorial/Tutorial.jsx'
import FinalDoQuiz from './pages/FinalDoQuiz/FinalDoQuiz.jsx'
import Informacoes from './pages/Informacoes/Informacoes.jsx'
import Usuario from './pages/InformacaoUsuario/InformacaoUsuario.jsx'
import Sobre from './pages/sobre/Sobre.jsx'


const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "Quiz",
        element: <Quiz />
      },
      {
        path: "Tutorial",
        element: <Tutorial />
      },
      {
        path: "FinalDoQuiz",
        element: <FinalDoQuiz />
      },
      {
        path: "Informacoes",
        element: <Informacoes />
      },
      {
        path: "InformacaoUsuario",
        element: <Usuario />
      },
      {
        path: "Sobre",
        element: <Sobre />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
