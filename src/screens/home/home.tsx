import { useContext, useEffect } from "react"

import CartItem from "../../components/cardItem/cardItem"
import { MercadoContext } from "../../hooks/useContext"
import fetchApi from "../../api/Api"
import { useSearchParams } from "react-router-dom"
import ShopBar from "../../components/ShopBar/shopBar"
import LoadingComp from "../../components/loading/loading"

const HomePage = () => {   

    const {setItems, items } = useContext(MercadoContext) 
    
    const [searchParams] = useSearchParams()
    const query = searchParams.get('query')    

    useEffect(()=> {
     fetchApi('cadeira').then((response) => {
       setItems(response)
     })
    }, [query])  
    
    


    return(
      <div>
        <h2 className="text-center font-semibold text-lg ">Resultado para {query}</h2>
          <div className="flex mt-10 h-2/4 w-full" >     
            <section className="w-2/4 max-w-lg border-r p-2">  
            <h2>Filtros</h2>        
                <ol>
                  <ol>
                    <li>A hkhokhfkhphdkphfkh</li>
                    <li>B hkhokhfkhphdkphfkh</li>
                    <li>C hkhokhfkhphdkphfkh</li>
                    <li>D hkhokhfkhphdkphfkh</li>
                  </ol>
                  <ol>
                    <li>A hkhokhfkhphdkphfkh</li>
                    <li>B hkhokhfkhphdkphfkh</li>
                    <li>C hkhokhfkhphdkphfkh</li>
                    <li>D hkhokhfkhphdkphfkh</li>
                  </ol>              
                </ol>         
            </section>   
              {
                items?.length ? 
                (<div className="flex flex-wrap justify-center max-w-2/5 min-w-md gap-2 p-5 box-border">
                  {items.map((product) => <CartItem key={product.id} data={product}  />)}</div>) : <LoadingComp/>   
              }    
              <ShopBar/>   
          </div>
      </div>
    )
}


export default HomePage