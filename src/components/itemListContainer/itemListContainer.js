import {dataBase} from '../../firebase/firebase'
import {ItemList} from '../itemList/itemList'
import { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import { useParams } from 'react-router-dom'
import Spinner  from 'react-bootstrap/Spinner'
import './itemListContainer.css'

export const ItemListContainer = ({greeting}) => { 

const {id}= useParams() 
const [array, setArray] = useState([])
const [loading, setLoading] = useState(false)


useEffect(() =>{
  setLoading(true);
  const db = dataBase;
  const itemCollection = db.collection('ItemCollection');
  //const itemCollectionId = db.collection('ItemCollection').where('categoryId','===', 'id');
  itemCollection.get().then((querySnapshot) => {
    if (querySnapshot.size === 0) {
      console.log('No hay resultados');
    }
    setArray(querySnapshot.docs.map(doc => doc.data()));
  }).catch((error) => {
    console.log('Error buscando items', error);
  }).finally(() => {
    setLoading(false)
  })
 
},[])


/*useEffect(() =>{
const solicitarItem = new Promise((resolve, reject) => {

    setTimeout(() => {
      resolve(
       id ? arrayItems.filter(item=> item.categoryId === id) : arrayItems
        )
    }, 2000) })
    
    solicitarItem.then((elemento) => {
       setArray(elemento)
    })

}, [id])*/

  return (
    <div className="list-container">
      <h2>{greeting}</h2>
      {/*<ItemCount initial='1' stock='5' onAdd={"nada"} /> */}
      {array.length !== 0 ? (
        <Container>
          <ItemList items={array} />
        </Container>
      ) : <div className='spinner-container'><Spinner animation="border" /></div>}
    </div>
  )
}