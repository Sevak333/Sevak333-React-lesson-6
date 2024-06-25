import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Root } from './pages/Root.jsx'
import { Composers } from './pages/Composers.jsx'
import { AddComposer } from './pages/AddComposer.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children : [
      {
        path:"/list",
        element:<Composers/>
      },
      {
        path:"/add",
        element:<AddComposer/>
      }
    ]
  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
