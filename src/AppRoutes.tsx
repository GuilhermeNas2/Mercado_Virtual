import {Routes, BrowserRouter as Router, Route } from 'react-router-dom'

import App from './App.tsx'
import ItemPage from './screens/Item/item.tsx'
import HomePage from './screens/home/home.tsx'
import LoginScreen from './screens/login/login.tsx'
import LoginScreenInit from './screens/login/loginscreen.tsx'
import CadastroScreen from './screens/login/cadastro.tsx'

const AppRoutes = () => {

    return(
        <Router>
        <Routes>
          <Route path='/' element={<App/>} />
          <Route path='/home' element={<HomePage/>} />
          <Route path='/promoçoes' element={<ItemPage/>} />
          <Route path='/login' element={<LoginScreen/>} />
          <Route path='/login' element={<LoginScreenInit/>} />
          <Route path='/login/cadastro ' element={<CadastroScreen/>} />
        </Routes>
      </Router>
    )
}

export default AppRoutes;