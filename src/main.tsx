import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { MercadoProvider} from './hooks/useContext.tsx'
import {createBrowserRouter, RouterProvider } from 'react-router-dom'

import ItemPage from './screens/Item/item.tsx'
import HomePage from './screens/home/home.tsx'
import LoginScreen from './screens/login/login.tsx'
import LoginScreenInit from './screens/login/loginscreen.tsx'
import CadastroScreen from './screens/login/cadastro.tsx'


const route = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children: [
      {
        path:'/home',
        element:<HomePage/>
      },
      {
        path:'/promoçoes',
        element:<ItemPage/>
      },
      {
        path:'/login',
        element:<LoginScreen/>,
        children: [
          {
            path:'/login',
            element:<LoginScreenInit/>
          },
          {
            path:'/login/cadastro',
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
