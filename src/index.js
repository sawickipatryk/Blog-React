import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

import { BrowserRouter as Router } from 'react-router-dom'

import { Provider } from 'react-redux'

import { ThemeProvider } from '@mui/material'
import theme from './theme'

import { store } from './store'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider
      store={store}
    >
      <ThemeProvider
        theme={theme}
      >
        <Router>
          <App />
        </Router>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
)

reportWebVitals()
