import React from 'react'
import ReactDOM from 'react-dom/client'
import { ToastContainer } from 'react-toastify'
import './index.css'

import AppProvider from './hooks'
import Routes from './routes/routes'
import 'react-toastify/dist/ReactToastify.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <AppProvider>
      <Routes />
    </AppProvider>
    <ToastContainer autoClose={2000} theme="colored" />
  </>
)
