import './itemCount.css'
import { useState} from "react";


export function ItemCount({ stock, initial, onAdd}) {
    
    const [value, setValue] = useState(stock > 0 ? initial : 0)
    

   const sumar = () =>{
    if(stock > 0  && value < stock ) {
      setValue(Number(value) + 1)
    }

   }
   const restar = () =>{
    
    if(stock > 0  && value > 1 ) {
      setValue(Number(value) - 1)
    }

   }


const agregar = () => {
  console.log(`fueron agregados ${value} elementos a su carrito`)
}

   return (
     <>
     <div className="btn-container-increment">
      <button className ="btn-increment" onClick={restar}>-</button>
      <span className="value-increment">{value}</span>
      <button className ="btn-increment" onClick={sumar}>+</button> 
     </div>
     <button className="btn-add-to-cart" disabled={stock === '0' ? true : false} onClick={agregar}>Agregar al carrito</button>
     </>     

    )

   }
   