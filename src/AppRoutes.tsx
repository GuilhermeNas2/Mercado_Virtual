import {RouterProvider, createBrowserRouter } from 'react-router-dom'

import App from './App.tsx'
import ItemPage from './screens/Item/item.tsx'
import HomePage from './screens/home/home.tsx'
import LoginScreen from './screens/login/login.tsx'
import LoginScreenInit from './screens/login/loginscreen.tsx'
import CadastroScreen from './screens/login/cadastro.tsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
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
        children:[
          {
            path:'/login',
            element:<LoginScreenInit/>
          },
          {
            path:'/cadastro',
            element:<CadastroScreen/>
          }
        ]
      }
    ]
  }
])


function AppRoutes()  {

    return(
       <RouterProvider router={router} />
    )
}

export default AppRoutes;