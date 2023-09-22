import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai"
import { Link } from "react-router-dom"
import { MercadoContext } from "../../hooks/useContext"
import { useContext, useState } from "react"


import fetchApi from "../../api/Api"



const NavBar = () => {

    const {setOpen, setItems} = useContext(MercadoContext)
    const [search, setSearch ] = useState('') 
     
   
    const handleSubmit = async (e: { preventDefault: () => void }) => {     
      e.preventDefault()

      const produtos = await fetchApi(search);

      setItems(produtos);
      setSearch('');       
   }

   const leftBarOpen = () => {
    setOpen(true)
   }
   

    return(
        <div>
        <nav className="bg-yellow-200 w-full h-20 flex justify-around items-center p-3">
          <div className="w-1/2 h-1/3 pb-2 flex justify-between items-center">
            <Link to={'/home'} className="w-1/4 min-w-min"><img src="/logo.svg"  alt="" /></Link>
            <form className="w-1/2"
            onSubmit={handleSubmit}>
              <label      
                className="w-full bg-white flex justify-between">
                  <input 
                  className="w-full p-3 outline-none"
                  placeholder="Procure qualquer coisa"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  type="search" />  
                  <button 
                  type="submit"
                  className="border-l-2 px-4"><AiOutlineSearch/></button>
                  
              </label>  
            </form>
          </div>                 
          <ul className="flex md:w-1/4 w-1/3 justify-around box-border md:text-lg text-xs">
            <Link to={'/promoçoes'}>Promoções</Link>
            <Link to={'/home'}>Inicio</Link>
            <Link to={'/login'}>Login</Link>
            <div className="relative">
            <i className="md:text-3xl text-bs " onClick={leftBarOpen}><AiOutlineShoppingCart/></i>            
            </div>
            
          </ul>
        </nav>
      </div>      
    )
}

export default NavBar