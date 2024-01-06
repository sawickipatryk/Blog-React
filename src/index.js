import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

import { BrowserRouter as Router } from 'react-router-dom'

import { ThemeProvider } from '@mui/material'
import theme from './theme'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <ThemeProvider
      theme={theme}
    >
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  </React.StrictMode>
)

reportWebVitals()
