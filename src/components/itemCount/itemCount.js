import './itemCount.css'
import { useState} from "react";


export function ItemCount({ stock, initial, onAdd}) {
    
    const [value, setValue] = useState(stock > 0 ? initial : 0)

    const valueIncrement = (operator) => {
    
    let newValue 

     switch(operator) {
         case '+':    
          newValue = Number(value) + 1
          break
         
         case '-':
          newValue = Number(value) - 1
          break   
          
        default:
            break
     }

     if(newValue <= stock && newValue > 0){
     setValue(newValue)
    } else {
     return ''
    }
}
   return (
     <>
     <div className="btn-container-increment">
      <button className ="btn-increment" onClick={()=> stock > 0 ? valueIncrement('-') : ''}>-</button>
      <input className="value-increment" type="text" onChange={(e)=>setValue(e.target.value)} value={value}></input>
      <button className ="btn-increment" onClick={()=> stock > 0 ? valueIncrement('+') : ''}>+</button> 
     </div>
     <button className="btn-add-to-cart" disabled={stock === '0' ? true : false} onClick={onAdd}>Agregar al carrito</button>
     </>     

    )

   }
   