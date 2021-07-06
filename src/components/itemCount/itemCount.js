import './itemCount.css'
import { useState} from "react";


export function ItemCount({ stock, initial, onAdd}) {
    
    const [count, setCount] = useState(stock > 0 ? initial : 0)
    

   const sumar = () =>{
    if(stock > 0  && count < stock ) {
      setCount(Number(count) + 1)
    }

   }
   const restar = () =>{
    
    if(stock > 0  && count > 1 ) {
      setCount(Number(count) - 1)
    }

   }

   return (
     <>
     <div className="btn-container-increment">
      <button className ="btn-increment" onClick={restar}>-</button>
      <span className="value-increment">{count}</span>
      <button className ="btn-increment" onClick={sumar}>+</button> 
     </div>
     <button className="btn-add-to-cart" disabled={stock === '0' ? true : false} onClick={()=>onAdd(count)}>Agregar al carrito</button>
     </>     

    )

   }
   