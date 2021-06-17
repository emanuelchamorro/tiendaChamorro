import './itemListContainer.css'

export const ItemListContainer = ({greeting}) => { 

    return (
       <div className="list-container">
        <h2>{greeting}</h2>
      </div>
    )
}