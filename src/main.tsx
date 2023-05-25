import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './Routes/Root'
import { ErrorPage } from './Routes/ErrorPage/styles'
import { Home } from './Routes/Home'
import { AppProvider } from './contexts/appContext'
import { TransactionsProvider } from './contexts/transactionsContext'

const router = createBrowserRouter([
  {
     path: "/",
     element: <Root />,
     errorElement: <ErrorPage />,

     children: [
      {
        index:true,
        element: <Home />
      }
     ]
  },

])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppProvider>
      <TransactionsProvider>
        <RouterProvider router={router} />
      </TransactionsProvider>
    </AppProvider>
  </React.StrictMode>,
)
