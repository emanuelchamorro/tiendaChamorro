import Card from 'react-bootstrap/Card'

export function Item({ id, title, price, pictureUrl, description }) {

    return (

     <>
      <Card>
       <Card.Img variant="top" src={pictureUrl} />
       <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Title>$ {price}</Card.Title>
        <Card.Text>
          {description}
       </Card.Text>
      </Card.Body>
     </Card>
    </>
    )
   }
   