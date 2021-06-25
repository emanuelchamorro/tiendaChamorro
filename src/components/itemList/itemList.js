import {Item} from '../item/item'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export function ItemList({ items }) {
    // Desarrolla la vista utilizando un array de items y un map
    console.log(items)
     
    return (
        <>
        <Row>{items.map((e)=> {
          return <Col sm key={e.id}>
                   <Item id={e.id} 
                               title={e.title} 
                               price={e.price} 
                               pictureUrl={e.pictureUrl}
                               description={e.description}
                              />
                </Col>
            })}
        </Row>
        </>
    )

   }
   