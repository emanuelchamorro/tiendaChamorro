import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './itemDetail.css'

export function ItemDetail({ item }) {
    console.log(item)
    return (
      <>
      
      <Container>
         <Row>
         <Col xs={8}>
           <img src={item.pictureUrl} className="img-detail" />
          </Col>
          <Col >
           <h1>{item.title}</h1>
           <p>{item.description}</p>
          </Col> 
       
        </Row> 

      </Container>

      </>
    )
}