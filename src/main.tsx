import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './Routes/Root'
import { Home } from './Routes/Home'
import { AppProvider } from './contexts/appContext'
import { TransactionsProvider } from './contexts/transactionsContext'
import { ThemeProvider } from 'styled-components'
import { theme } from './theme'
import { ErrorPage } from './Routes/ErrorPage'
import { UserDetail } from './Routes/UserDetailPage'
import { UsersPage } from './Routes/UsersPage'

const router = createBrowserRouter([
  {
     path: "/",
     element: <Root />,
     errorElement: <ErrorPage />,

     children: [
      {
        index:true,
        element: <Home />
      },
      {
        element: <UsersPage />,
        path: "/users",
        
        children: [
          {
            element: <UserDetail />,
            path: "/users/:userId"
          }
        ]
      },
     ]
  },

])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
   < AppProvider>
      <TransactionsProvider>
        <ThemeProvider theme={theme}>
          <RouterProvider router={router} />
        </ThemeProvider>
      </TransactionsProvider>
    </AppProvider>
  </React.StrictMode>,
)
