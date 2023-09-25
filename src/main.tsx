import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { MercadoProvider} from './hooks/useContext.tsx'
import {createHashRouter, RouterProvider } from 'react-router-dom'

import ItemPage from './screens/Item/item.tsx'
import HomePage from './screens/home/home.tsx'
import LoginScreen from './screens/login/login.tsx'
import LoginScreenInit from './screens/login/loginscreen.tsx'
import CadastroScreen from './screens/login/cadastro.tsx'


const route = createHashRouter([
  {
    path:'Mercado_Virtual/',
    element:<App/>,
    children: [
      {
        path:'Mercado_Virtual/home',
        element:<HomePage/>
      },
      {
        path:'Mercado_Virtual/promoçoes',
        element:<ItemPage/>
      },
      {
        path:'Mercado_Virtual/login',
        element:<LoginScreen/>,
        children: [
          {
            path:'Mercado_Virtual/login',
            element:<LoginScreenInit/>
          },
          {
            path:'Mercado_Virtual/login/cadastro',
            element:<CadastroScreen/>
          }
        ]
      }
    ]    
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MercadoProvider>
      <RouterProvider router={route} />
    </MercadoProvider>
  </React.StrictMode>,
)
