import { AiOutlineArrowLeft } from 'react-icons/ai'
import { MercadoContext } from '../../hooks/useContext';
import { useContext } from 'react'
import CartItemCard from '../buyItemCard/buyItemCard';

const ShopBar = () => {

    const {open, setOpen, buyItem} = useContext(MercadoContext)

    const handleClose = () => {
        setOpen(false)
    }          

    console.log(buyItem)

    return (
        
        <div className={`w-1/5 bg-yellow-200 h-screen absolute top-0 right-0 p-5 ${ open ? 'flex' : 'hidden'  } flex-col `}>
            <i onClick={handleClose}><AiOutlineArrowLeft/></i>
            <div>
                {
                    buyItem.length > 0 && (buyItem.map((cartItem) => <CartItemCard key={cartItem.id} data={cartItem}/>))
                }
            </div>
            <span>Total:</span>
        </div>
    )

}

export default ShopBar;