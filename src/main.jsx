import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes.jsx';
import AuthProvider from './Providers/AuthProvider.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router}> </RouterProvider>
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
