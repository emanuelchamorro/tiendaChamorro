import {ItemCount} from '../itemCount/itemCount'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import './itemDetail.css'


export function ItemDetail({ item }) {
    console.log('item detail', item)
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
          <ItemCount initial='1' stock='5' onAdd={"nada"} />
          </Col> 
        </Row> 
       </Container>
      </Card>
      </>
    )
}