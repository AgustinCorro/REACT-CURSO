import React from 'react'
import ItemDetail from './ItemDetail';


const ItemDetailContainer = () => {
  const productos = [
    { id: "1", name: "Remera 1", description: "Descripcion de la remera 1", stock: 10, precio: 100, categoria: "CategoriaA" },
    { id: "2", name: "Remera 2", description: "Descripcion de la remera 2", stock: 20, precio: 200, categoria: "CategoriaA" },
    { id: "3", name: "Remera 3", description: "Descripcion de la remera 3", stock: 30, precio: 300, categoria: "CategoriaA" },

    { id: "4", name: "Pantalon 1", description: "Descripcion del pantalon 1", stock: 40, precio: 400, categoria: "CategoriaB" },
    { id: "5", name: "Pantalon 2", description: "Descripcion del pantalon 2", stock: 10, precio: 100, categoria: "CategoriaB" },
    { id: "6", name: "Pantalon 3", description: "Descripcion del pantalon 3", stock: 20, precio: 200, categoria: "CategoriaB" },

    { id: "7", name: "Campera 1", description: "Descripcion de la campera 1", stock: 30, precio: 300, categoria: "CategoriaC" },
    { id: "8", name: "Campera 2", description: "Descripcion de la campera 2", stock: 10, precio: 100, categoria: "CategoriaC" },
    { id: "9", name: "Campera 3", description: "Descripcion de la campera 3", stock: 20, precio: 200, categoria: "CategoriaC" },
  ]

  const mostrarProductos = new Promise((resolve, reject) => {
    if (productos.length > 0) {
      setTimeout(() => {
        resolve(productos)
      }, 3000)
    } else {
      reject("No se encontraron productos")
    }
  });

  mostrarProductos
    .then((resultado) => {
      console.log(resultado)
    })
    .catch((error) => {
      console.log(error)
    })


  return (
    <>
      <ItemDetail productos={productos} />
    </>
  )
}

export default ItemDetailContainer