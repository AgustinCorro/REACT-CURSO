import React from 'react'
import ItemList from './ItemList';
import { Center } from '@chakra-ui/react';

const ItemListContainer = () => {

  const productos = [
    { id: "1", name: "Producto A", description: "Descripcion del producto A", stock: 10, precio: 100 },
    { id: "2", name: "Producto B", description: "Descripcion del producto B", stock: 20, precio: 200 },
    { id: "3", name: "Producto C", description: "Descripcion del producto C", stock: 30, precio: 300 },
    { id: "4", name: "Producto D", description: "Descripcion del producto D", stock: 40, precio: 400 },
  ]

  const mostrarProductos = new Promise((resolve, reject) => {
    if(productos.length > 0) {
      setTimeout(() =>  {
        resolve(productos)
      }, 3000)
    } else{
      reject("No se encontraron productos")
    }
  });

  mostrarProductos
    .then((resultado) =>{
      console.log(resultado)
    })
    .catch((error) => {
      console.log(error)
    })
  
  return (
    <>
      <Center p="1rem">
        <ItemList productos={productos}/>
      </Center>

    </>
  )
}

export default ItemListContainer