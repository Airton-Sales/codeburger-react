import React from 'react'
import ReactDOM from 'react-dom/client'
import { ToastContainer } from 'react-toastify'
import './index.css'

// import Login from './containers/Login'
import Register from './containers/Register'
import GlobalStyles from './styles/globalStyles'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Register />
    <ToastContainer autoClose={2000} theme="colored" />
    <GlobalStyles />
  </>
)
