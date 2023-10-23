import React, { useState } from 'react'
import { Button, Card, CardBody} from '@chakra-ui/react'

const ItemCount = () => {
    const [contador, setContador] = useState(0)

    const mostrar = () => {
        alert(`Vas a agregar ${contador} a tu carrito`)
    }

    return (
        <Card maxW='sm'>
            <CardBody>
                <Button variant='outline' colorScheme='teal' onClick={() => setContador(contador - 1)} m={1}>-</Button>
                <Button m={1}>{contador}</Button>
                <Button variant='outline' colorScheme='teal' onClick={() => setContador(contador + 1)} m={1}>+</Button>
                <Button onClick={mostrar} m={1} colorScheme='blue'>Agregar al carrito</Button>
            </CardBody>
        </Card>
    )
}

export default ItemCount