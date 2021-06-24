import './itemListContainer.css'
import {ItemCount} from '../itemCount/itemCount'

export const ItemListContainer = ({greeting}) => { 

    return (
       <div className="list-container">
        <h2>{greeting}</h2>
        <ItemCount initial='4' stock='4' />
      </div>
    )
}