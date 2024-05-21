import React from 'react'
import ReactDOM from 'react-dom/client'
import { ToastContainer } from 'react-toastify'
import './index.css'

import { UserProvider } from './hooks/UserContext'
import Routes from './routes/routes'
import GlobalStyles from './styles/globalStyles'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <UserProvider>
      <Routes />
    </UserProvider>
    <ToastContainer autoClose={2000} theme="colored" />
    <GlobalStyles />
  </>
)
