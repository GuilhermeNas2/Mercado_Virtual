import { BsBagDash } from "react-icons/bs"
import { MercadoContext } from "../../hooks/useContext"
import {useContext } from "react"

const CartItemCard = ({data}) => {

    const {buyItem, setBuyItem} = useContext(MercadoContext)
    const {thumbnail, id, price} = data

    const excludeItem = () => {
        const updatedList = buyItem.filter((item) => item.id != id)
        setBuyItem(updatedList)
    }

    return(
        <div>             
            <div>
                <img src={thumbnail} alt="" />  
                <span>{price}</span>              
                <i onClick={excludeItem}><BsBagDash/></i>
            </div>                    
        </div>
    )
}

export default CartItemCard;