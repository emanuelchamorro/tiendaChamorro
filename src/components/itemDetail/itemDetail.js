import { useContext, useState} from "react";
import {Link} from "react-router-dom";
import {ItemCount} from '../itemCount/itemCount'
import {CartContext} from '../cartContext/cartContext'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import './itemDetail.css'


export function ItemDetail({ item }) {
 
  const [count, setCount] = useState(0)
  
  const setNewProduct = useContext(CartContext)
  
  const onAdd = (quantityToAdd) => { 
   setCount(quantityToAdd)
   setNewProduct(item, quantityToAdd)
  }
  
    return (
      <>
     <Card className='item-detail-card'>
       <Container>
         <Row>
          <Col xs={8} className='img-item-detail'>
           <img src={item.pictureUrl} className="img-detail" />
          </Col>
          <Col >
           <h1 className='item-detail-title'>{item.title}</h1>
           <p>{item.description}</p>
          { !count && <ItemCount initial='1' stock='5' onAdd={onAdd} />}
          { !!count && <Link to={`/cart`}><button className='btn-finish-purchase'>Terminar compra</button></Link>}
          </Col> 
        </Row> 
       </Container>
      </Card>
      </>
    )
}