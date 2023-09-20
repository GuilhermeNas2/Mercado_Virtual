import { useContext, useEffect } from "react"

import CartItem from "../../components/cardItem/cardItem"
import { MercadoContext } from "../../hooks/useContext"
import fetchApi from "../../api/Api"
import ShopBar from "../../components/ShopBar/shopBar"

const HomePage = () => {   

    const {setItems, items } = useContext(MercadoContext) 

    useEffect(()=> {
     fetchApi('cadeira').then((response) => {
       setItems(response)
     })
    }, [])         

    return(
        <div className="flex mt-10 h-2/4 w-full" >     
        <section className="w-full bg-slate-400">  
        <h2>Filtros</h2>        
            <ol>
              <ol>
                <li>A</li>
                <li>B</li>
                <li>C</li>
                <li>D</li>
              </ol>
              <ol>
                <li>A</li>
                <li>B</li>
                <li>C</li>
                <li>D</li>
              </ol>              
            </ol>         
        </section>   
          {
            items?.length && (<div className="flex flex-wrap justify-center max-w-2/5 min-w-md gap-2 p-5 box-border">{items.map((product) => <CartItem key={product.id} data={product}  />)}</div> )    
          }    
          <ShopBar/>   
      </div>
    )
}


export default HomePage