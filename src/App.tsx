import {  useEffect, useState } from "react"
import { useGloblaContext } from "./hooks/useContext"
import CartItem from "./components/cardItem/cardItem"




function App() {

 const {items, setItems, fetchApi } = useGloblaContext()

 const [search, setSearch ] = useState('')

 const handleSubmit = (e) => {
  e.preventDefault()
  fetchApi(search).then((response) => {
    setItems(response)
  })
 }

 useEffect(()=> {
  fetchApi('cadeira').then((response) => {
    setItems(response)
  })
 }, []) 

 console.log(search)
 
 
  return (
    <div>
      <div>
        <nav className="bg-yellow-200 w-full h-20 flex justify-between items-center p-3">
          <div className="w-1/2 h-1/3 pb-2 flex justify-between items-center">
            <img src="/logo.svg" className="w-1/6" alt="" />
            <label           
            htmlFor=""
            className="w-3/4 bg-white flex justify-between">
            <input 
            className="w-3/4 p-3"
            placeholder="Procure qualquer coisa"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text" />  
            <button 
            onClick={handleSubmit}
            className="border-l-2 px-4">Enviar</button>
          </label>  
          </div>                 
          <ul className="flex w-1/4 justify-around">
            <li>Alguma</li>
            <li>Coisa</li>
            <li>Assim</li>
          </ul>
        </nav>
      </div>      
      <div className="w-full flex items-center justify-center mt-10" >        
          {
            items?.length && (<div className="flex flex-wrap w-2/5 h-3/4 gap-2">{items.map((product) => <CartItem key={product.id} data={product}  />)}</div> )    
          }       
      </div>
    </div>
    
    
  )
}

export default App
