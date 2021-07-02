import {Item} from '../item/item'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export function ItemList({ items }) {
    // Desarrolla la vista utilizando un array de items y un map
    console.log(items)
     
    return (
        <>
        <Row>{items.map((item)=> {
          return <Col xs={4} key={item.id}>
                   <Item item={item} />
                </Col>
            })}
        </Row>
        </>
    )

   }
   