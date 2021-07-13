import { useContext} from "react"; 
import {CartContext} from '../cartContext/cartContext'
import {Link} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import './cart.css'

export const Cart = ()=> {

 const {cart, removeItem, clear} = useContext(CartContext)
    
 console.log('cart en cart.js', cart)

 return (
    <>  
    <div className='main-container' >
     <Card className='cart-detail-card'>
      <Container fluid>
        <Row>
           <h1>Mi Carrito</h1>
        </Row>
        {cart.length !== 0  ? cart.map(prod=>
          <Row key={prod.item.id} className='rows-cart-products'>
           <Col>
             <img src={prod.item.pictureUrl} className='img-cart-detail' />
           </Col>
           <Col>
             <span>{prod.item.title}</span>
           </Col>
           <Col>
             <span>Precio: ${prod.item.price}</span>
           </Col>
           <Col>
             <span>Cantidad: x {prod.quantity}</span>
           </Col>
           <Col>
             <span>Precio Total: ${prod.item.price * prod.quantity}</span>
           </Col>
           <Col>
             <button className='btn-erase' onClick={()=>removeItem(prod.item.id)}>Borrar</button>
           </Col>
          </Row> 
          ) : 
          <Row className='empty-cart-detail'>
             <p>No hay productos en el carrito</p>
             <Link to={`/`}><button className='btn-finish-purchase'>Volver</button></Link>
          </Row>
           }
           
          <Row className='row-btn-filter'>
          {cart.length !== 0 ? <button className='btn-clear' onClick={()=>clear()} >Limpiar</button> : ''}
          </Row>
          </Container>
        </Card>
       </div>
     </> 
 )
 
}