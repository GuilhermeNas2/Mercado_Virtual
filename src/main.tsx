import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import { MercadoProvider} from './hooks/useContext.tsx'

import App from './App.tsx'
import ItemPage from './screens/Item/item.tsx'
import HomePage from './screens/home/home.tsx'
import LoginScreen from './screens/login/login.tsx'
import LoginScreenInit from './screens/login/loginscreen.tsx'
import CadastroScreen from './screens/login/cadastro.tsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path:'Mercado_Virtual/',
    element:<App/>,
    children:[
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
        children:[
          {
            path:'Mercado_Virtual/login',
            element:<LoginScreenInit/>
          },
          {
            path:'Mercado_Virtual/cadastro',
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
      <RouterProvider router={router}/>
    </MercadoProvider>
  </React.StrictMode>,
)
