import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import  theme  from './styles/theme'
import GlobalStyle from './styles/global'
import { Routes } from './routes'
import { AuthProvider } from './hooks/auth'
import { ToastContainer } from 'react-toastify'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AuthProvider>
        <Routes />
      </AuthProvider>
      <ToastContainer 
        autoClose={3000}
        position="top-right"
        theme="dark"
        pauseOnFocusLoss={false}
        pauseOnHover={false}
        newestOnTop
        limit={3}
      />
    </ThemeProvider>
  </React.StrictMode>,
)
