import { AiOutlineArrowLeft } from 'react-icons/ai'
import { MercadoContext } from '../../hooks/useContext';
import { useContext } from 'react'
import CartItemCard from '../buyItemCard/buyItemCard';
import formatCurrency from '../../utils/formatCurrency';

const ShopBar = () => {

    const {open, setOpen, buyItem} = useContext(MercadoContext);

    const handleClose = () => {
        setOpen(false)
    };    

    const total = buyItem?.reduce((acc, item) => item.price + acc, 0)

   

    return (        
        <div className={`w-1/5 bg-white h-fit min-h-screen absolute top-0 right-0 p-5 ${ open ? 'flex' : 'hidden'  } flex-col `}>
            <i onClick={handleClose} className='text-2xl'><AiOutlineArrowLeft/></i>
            <div className='h-3/4 mb-10'>
                {
                    buyItem?.length > 0 && (buyItem.map((buyItem) => <CartItemCard key={buyItem.id} data={buyItem}/>))
                }
            </div >
            <div className='h-1/4 border-t-2 border-black p-2'>
                <span className='font-semibold text-3xl'>Total  : {formatCurrency(total, 'brl')} </span>
            </div>
        </div>
    );

};

export default ShopBar;