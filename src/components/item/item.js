import Card from 'react-bootstrap/Card'

export function Item({ item }) {

    return (

     <>
      <Card>
       <Card.Img variant="top" src={item.pictureUrl} />
       <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Title>$ {item.price}</Card.Title>
        <Card.Text>
          {item.description}
       </Card.Text>
      </Card.Body>
     </Card>
    </>
    )
   }
   