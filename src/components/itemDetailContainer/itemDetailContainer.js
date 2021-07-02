import { useEffect, useState } from "react"
import {ItemDetail} from '../itemDetail/itemDetail'
import { useParams } from 'react-router-dom'
import Spinner  from 'react-bootstrap/Spinner'
import './itemDetailContainer.css'

export const ItemDetailContainer = () => { 
    
    const {id}= useParams() 

    console.log('id param', id)
    const [productDetail, setProduct] = useState([])

    const arrayItems = [
        {id: 1, categoryId:'electrodomesticos', title: 'Lavarropas Whirlpool', price: 9000, pictureUrl:'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/146/251/products/d350lvrf90s1-f1b7ac89323558c5a815934608233296-640-0.jpg', description:'lorem ipsum' },
        {id: 2, categoryId:'tecnologia', title: 'Notebook Lenovo S340', price: 29000, pictureUrl:'https://s3-sa-east-1.amazonaws.com/saasargentina/ZaqBNdJOTJfmnEXVMhZ3/imagen', description:'lorem ipsum' },
        {id: 3, categoryId:'instrumentos', title: 'Guitarra Fender Jazzmaster', price: 19000, pictureUrl:'https://www.tubesoundbcn.com/24861/fender-jazzmaster-american-professional-ii-rw-3-color-sunburst.jpg', description:'lorem ipsum' }
      ]

    useEffect(()=> {
        const getItems = new Promise((resolve, reject) =>{

            setTimeout(() => {
                
                resolve(
                   id ? arrayItems.filter(item=> item.id == id) : arrayItems
                     )

            }, 2000)
        })

        getItems.then((res)=> {
            setProduct(res[0])
        })
    },[])

    return (
        <>
        <div className="list-container">
         {productDetail.length !== 0 ? <ItemDetail item={productDetail}/> : <div className='spinner-container'><Spinner animation="border" /></div>}       
         </div>
        </>
    )
}