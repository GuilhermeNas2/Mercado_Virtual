import {BsBagPlus} from 'react-icons/bs'
import { MercadoContext } from '../../hooks/useContext'
import { useContext } from "react";
import formatCurrency from '../../utils/formatCurrency';

const CartItem = ({data}) => {  
  
  const {setBuyItem, buyItem} = useContext(MercadoContext);
  const {title, thumbnail, price} = data;

 

  const addItemList = () => {
    setBuyItem([ ...buyItem , data])    
  };   

    return (            
          <div className="group/card flex flex-col items-center w-fit max-w-xs relative max-h-60 m-1 border-2 ">
            <i className='group/edit hidden absolute top-2 right-4 text-4xl cursor-pointer group-hover/card:flex'
            onClick={addItemList}><BsBagPlus/></i>        
           <img className="min-w-fit min-h-fit w-28 h-28" loading='lazy'  src={thumbnail} alt="" />     
           <div className="flex justify-center text-center border-t-2 w-3/4 h-10 overflow-hidden">      
              <h1 className="font-semibold text-base">{title}</h1> 
           </div>
           <div className="flex justify-center h-1/5 w-2/3 border-t-2 px-1 py-2">
            <span className="text-lg font-semibold">{formatCurrency(price,'brl')}</span>       
            </div>         
          </div>            
    );
};

export default CartItem;

