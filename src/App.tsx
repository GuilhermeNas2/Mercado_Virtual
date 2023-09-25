import { Outlet } from "react-router-dom";
import NavBar from "./components/navBar/navBar";
import FooterBar from "./components/footerBar/footerBat";


function App() { 
 
  return (
    
    <>  
      <NavBar/>           
      <Outlet/>
      <FooterBar/>       
    </>      
  )
}

export default App
