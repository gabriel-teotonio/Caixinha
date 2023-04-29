import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './Routes/Root'
import { ErrorPage } from './Routes/ErrorPage/styles'
import { Home } from './Routes/Home'

const router = createBrowserRouter([
  {
     path: "/",
     element: <Root />,
     errorElement: <ErrorPage />,

     children: [
      {
        path: "/home",
        element: <Home />
      }
     ]
  },

])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
