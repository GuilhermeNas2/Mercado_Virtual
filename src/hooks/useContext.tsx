import { createContext, useState } from "react";

interface FilmProps {
    results: [ {
        id: string,
        thumbnail: string, 
        price: number,       
    },        
],
    length: number,
    map: object[],
    filter: object[],
}

interface ContextProps {  
    items: FilmProps | null ;
    setItems: (items : FilmProps) => void;  
    open: boolean;
    setOpen: (open: boolean) => void;
    buyItem: FilmProps
    setBuyItem: (buyItem: object[]) => void;
}

type ChildrenProps = {
    children: React.ReactNode
}

export const MercadoContext = createContext({} as ContextProps );

export const MercadoProvider = ({children}: ChildrenProps) => {

    const [items, setItems] = useState<FilmProps | null>(null);
    const [open, setOpen] = useState(false);
    const [buyItem, setBuyItem] = useState([]);
    

    const valores = {
        items,
        setItems,
        open,
        setOpen,
        buyItem,
        setBuyItem       
    }        

    return (
        <MercadoContext.Provider value={valores}>
            {children}
        </MercadoContext.Provider>
    )    

}





