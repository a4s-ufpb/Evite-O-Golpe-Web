import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider, Router } from 'react-router-dom'

//Páginas
import Home from './routes/Home/Home.jsx';
import Quiz from './routes/Quiz/Quiz.jsx';
import Tutorial from './routes/Tutorial/Tutorial.jsx';
import FinalPage from './routes/Quiz/finalPage/finalPage.jsx'

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
        path: "/quiz",
        element: <Quiz />
      },
      {
        path: "/tutorial",
        element: <Tutorial />
      },
      {
        path: "/finalPage",
        element: <FinalPage />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
