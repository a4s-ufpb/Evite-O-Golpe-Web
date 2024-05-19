import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider, Router } from 'react-router-dom'

//Páginas
import Home from './routes/Home/Home.jsx';
import Quiz from './routes/Quiz/Quiz.jsx';
import Tutorial from './routes/Tutorial/Tutorial.jsx';

import './index.css'

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/Quiz",
        element: <Quiz />
      },
      {
        path: "/Tutorial",
        element: <Tutorial />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
