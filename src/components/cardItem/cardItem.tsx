

const CartItem = ({data}) => {  
  
  const {title, thumbnail} = data

    return (            
          <div className="flex flex-col items-center w-1/4 h-1/2 max-h-60 m-3 border-2 text-center overflow-hidden">        
           <img className="w-2/3 h-3/5"  src={thumbnail} alt="" />           
            <h1 className="border-t-2 w-3/4 h-1/5 font-semibold" >{title}</h1>                 
           </div>         
   
    )
}

export default CartItem;

