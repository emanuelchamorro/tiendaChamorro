import Card from 'react-bootstrap/Card'
import {Link} from "react-router-dom";


export function Item({ item }) {

    return (

     <>
     <Link to={`/item/${item.id}`}>
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
    </Link>
    </>
    )
   }
   