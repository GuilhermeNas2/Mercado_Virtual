import { Outlet } from 'react-router-dom';


import './login.css'

    

    

const LoginScreen = () => {

   


    // const [output, setOutput] = useState('');

   

    // const loginSubmit = (data: any) => {
    //     setOutput(JSON.stringify(data, null,2))
    // };


    return(        
        <div className="container-main">
            <div className="container">                
                  <h1                 
                  className="titulo tracking-in-expand">Seja bem vindo</h1>       
                  <div className='container-img'>         
                    <img className='imagesvg' src="icon1.png" alt="" />       
                  </div>    
            </div>
            <div className="w-1/2 h-screen flex flex-col p-2 justify-center gap-10 items-center shadow-2xl bg-yellow-100 ">
                <Outlet/>                
            </div>
        </div>
    )
}

export default LoginScreen;