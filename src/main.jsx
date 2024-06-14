import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/Home/Home.jsx';
import Quiz from './pages/Quiz/Quiz.jsx'
import Tutorial from './pages/Tutorial/Tutorial.jsx'
import FinalDoQuiz from './pages/FinalDoQuiz/FinalDoQuiz.jsx'
import Informacoes from './pages/Informacoes/Informacoes.jsx'


const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/EviteOgolpeWEB/",
        element: <Home />
      },
      {
        path: "/EviteOgolpeWEB/Quiz",
        element: <Quiz />
      },
      {
        path: "/EviteOgolpeWEB/Tutorial",
        element: <Tutorial />
      },
      {
        path: "/EviteOgolpeWEB/FinalDoQuiz",
        element: <FinalDoQuiz />
      },
      {
        path: "/EviteOgolpeWEB/Informacoes",
        element: <Informacoes />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
