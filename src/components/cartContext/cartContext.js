import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) => {
  
 const[cart, setCart] = useState([])
 const[cartQuantity, setCartQuantity] = useState(0)
 const[totalQuantity, setTotalQuantity] = useState(0)

 console.log('cart en cartContext.js', cart)

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
  setCartQuantity(0)
 }

//cartBadgeNumber
const cartBadgeNumber = () =>{
  let acumulador = 0
  if(cart.length > 0) {
   acumulador = cart.reduce((acc,prod) => acc + prod.quantity, 0)
  }
  setCartQuantity(acumulador)
}



 return <CartContext.Provider value={{cart, cartQuantity, addItem, removeItem, clear, cartBadgeNumber }}>{children}</CartContext.Provider>
}