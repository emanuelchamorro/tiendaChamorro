import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) => {
  
 const[cart, setCart] = useState([])

 console.log(cart)
  
//isInCart
 const isInCart = (item) => cart.some(prod => prod.item.id === item.id)

//addItem
 const addItem = (item, quantity) => {
        
     if(!isInCart(item)) {
      setCart([...cart, {item:item, quantity:quantity}])
     } else {
       cart.forEach(prod=> {
         if(prod.item.id == item.id){  
          return prod.quantity += quantity
         }
       })
       setCart([...cart])
      }    
  }  

//removeItem
const removeItem = (itemId) => {
 setCart(cart.filter(prod => prod.item.id !== itemId ))
}

//clear
const clear = () => {
  setCart([])
 }

 return <CartContext.Provider value={cart, addItem }>{children}</CartContext.Provider>
}