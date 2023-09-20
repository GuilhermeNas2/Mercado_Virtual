import { Outlet } from "react-router-dom";
import NavBar from "./components/navBar/navBar";


function App() { 

 
  return (
    
    <>  
      <NavBar/>           
      <Outlet/> 
    </>  
    
  )
}

export default App
