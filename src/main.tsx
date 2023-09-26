import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import { MercadoProvider} from './hooks/useContext.tsx'
import AppRoutes from './AppRoutes.tsx'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MercadoProvider>
      <AppRoutes/>
    </MercadoProvider>
  </React.StrictMode>,
)
