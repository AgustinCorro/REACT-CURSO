import React from 'react'
import Item from './Item'

const ItemList = ({productos}) => {
  return (
    <div>
        {
            productos.map((p) => {
                return(
                    <Item 
                        key={p.id}
                        name={p.name}
                        description={p.description}
                        precio={p.precio}
                    />
                )
            })
        }
    
    </div>
  )
}

export default ItemList