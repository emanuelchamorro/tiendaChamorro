import {dataBase} from '../../firebase/firebase'
import { useEffect, useState } from "react"
import {ItemDetail} from '../itemDetail/itemDetail'
import { useParams } from 'react-router-dom'
import Spinner  from 'react-bootstrap/Spinner'
import './itemDetailContainer.css'

export const ItemDetailContainer = () => { 
    const [loading, setLoading] = useState(false)   
    const {id}= useParams() 

    console.log('id param', id)
    const [productDetail, setProduct] = useState([])

  
      useEffect(()=> {
        setLoading(true);
        const db = dataBase;
        const itemCollection = db.collection('ItemCollection')
        const item = itemCollection.doc(id)

        item.get().then((doc)=> {
            if(!doc.exists) {
                console.log("El item no existe");
                return;
            }
            setProduct({id: doc.id, ...doc.data()});

        }).catch((error)=> {
            console.log('Error buscando item', error);
        }).finally(()=>{
            setLoading(false)
        })
        
      }, [])


    return (
        <>
        <div className="list-container">
         {productDetail.length !== 0 ? <ItemDetail item={productDetail}/> : <div className='spinner-container'><Spinner animation="border" /></div>}       
         </div>
        </>
    )
}