import { BsBagDash } from "react-icons/bs"
import { MercadoContext } from "../../hooks/useContext"
import {useContext } from "react"
import formatCurrency from "../../utils/formatCurrency";

const CartItemCard = ({data}) => {

    const {buyItem, setBuyItem} = useContext(MercadoContext);
    const {thumbnail, id, price, title} = data;

    const excludeItem = () => {
        const updatedList = buyItem.filter((item) => item.id != id)
        setBuyItem(updatedList)
    };

    return(
        <div>             
            <div className="flex h-24 border-t justify-between border-black py-1 mb-1 items-center relative overflow-hidden">
                <img src={thumbnail} alt="" />  
                <div className="w-1/3 h-full">
                    <p className="text-xl">{title}</p>
                </div>
                <span className="font-semibold">{formatCurrency(price, 'brl')} </span>              
                <i onClick={excludeItem} className="absolute top-1 right-1"><BsBagDash/></i>
            </div>                    
        </div>
    );
};

export default CartItemCard;