import './cartWidget.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'



export const CartWidget = () => { 

    return (

        <FontAwesomeIcon icon={faCartPlus} className="shop-cart" />
    )
}