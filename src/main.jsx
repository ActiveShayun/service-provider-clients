import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './router/Router'
import AuthProvider from './Auth-provider/AuthProvider'
import { Toaster } from 'react-hot-toast'
import { HelmetProvider } from 'react-helmet-async'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
        <Toaster toastOptions={{
          className: '',
          style: {
            border: '1px solid #713200',
            padding: '16px',
            color: '#713200',
            position:'relative',
            top: '80px'
          },
        }}
        reverseOrder={false} />
      </AuthProvider>
    </HelmetProvider>
  </StrictMode>,
)
