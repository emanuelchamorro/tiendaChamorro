import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    

    const[product, setProduct] = useState([])
  
 
    const setNewProduct = (item, quantity) => setProduct([...product,{item:item, quantity:quantity}])
   
      console.log(product)
    
    return <CartContext.Provider value={setNewProduct}>{children}</CartContext.Provider>
}