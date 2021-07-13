import { useContext, useEffect} from "react"; 
import {CartContext} from '../cartContext/cartContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import './cartWidget.css'


export const CartWidget = () => { 


 const {cart, cartBadgeNumber, cartQuantity } = useContext(CartContext)

 useEffect(()=>{
    cartBadgeNumber()
 }, [cart])
    
    return (
        <>
        {cartQuantity > 0 ? <span className='cart-widget-badge'>{cartQuantity}</span> : ''}
        <FontAwesomeIcon icon={faCartPlus} className="shop-cart" />
        </>
    )
}