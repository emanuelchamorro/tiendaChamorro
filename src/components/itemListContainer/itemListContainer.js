import './itemListContainer.css'
import {ItemCount} from '../itemCount/itemCount'
import {ItemList} from '../itemList/itemList'
import { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'

export const ItemListContainer = ({greeting}) => { 

const [array, setArray] = useState(undefined)


useEffect(() =>{
const solicitarItem = new Promise((resolve, reject) => {

    setTimeout(() => {
      resolve([{id: 1, title: 'Televisor', price: 9000, pictureUrl:'https://st.depositphotos.com/1265046/1328/i/950/depositphotos_13280842-stock-photo-tv-screen-white.jpg', description:'lorem ipsum' },
               {id: 2, title: 'Notebook', price: 29000, pictureUrl:'https://s3-sa-east-1.amazonaws.com/saasargentina/ZaqBNdJOTJfmnEXVMhZ3/imagen', description:'lorem ipsum' },
               {id: 3, title: 'Notebook 2', price: 19000, pictureUrl:'https://www.sumaelectrohogar.com.ar/7178-thickbox_default/notebook-hp-14-athlon-3050u-4gb-ddr4.jpg', description:'lorem ipsum' } ])
    }, 2000) })
    
    solicitarItem.then((elemento) => {
       setArray(elemento)
    })

}, [])


    return (
       <div className="list-container">
        <h2>{greeting}</h2>
        <ItemCount initial='4' stock='4' />
        {array && (
         <Container>
          <ItemList items={array} />
         </Container>
        )} 
      </div>
    )
}