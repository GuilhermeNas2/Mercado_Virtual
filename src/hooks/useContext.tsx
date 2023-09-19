import { createContext, useState } from "react";

interface FilmProps {
    results: [ {
        id: string,
        thumbnail: string,        
    },        
],
    length: number,
    map: any,
}

interface ContextProps {  
    items: FilmProps | null ;
    setItems: (items : FilmProps) => void;  
   
}

type ChildrenProps = {
    children: React.ReactNode
}

export const MercadoContext = createContext({} as ContextProps );

export const MercadoProvider = ({children}: ChildrenProps) => {
    const [items, setItems] = useState<FilmProps | null>(null)

    return (
        <MercadoContext.Provider value={{ items, setItems }}>
            {children}
        </MercadoContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useGloblaContext = ( ) => {

    const [items, setItems] = useState<FilmProps | null>(null)  
    
    const fetchApi = async (query : string) => {
        const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`)
        const data = await response.json()
        return data.results
      }  

      return{
        items,
        setItems,  
        fetchApi     
    }
}

