import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import Login from './containers/Login'
import GlobalStyles from './styles/globalStyles'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Login />
    <GlobalStyles />
  </>
)
