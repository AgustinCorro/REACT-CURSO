import { useState } from 'react'
import { Button, Card, CardBody,Box} from '@chakra-ui/react'

const ItemCount = () => {
    const [count, setCount] = useState(0)

    const sumar = () => {
        setCount(count +1)
    }

    const restar = () => {
        setCount(count -1)
    }

    
    const mostrar = () => {
        alert(`Vas a agregar ${count} a tu carrito`)
    }

    return (
        <Card maxW='sm'>
            <CardBody>
                <Button variant='outline' colorScheme='teal' onClick={restar} m={1}>-</Button>
                <Button><h1>{count}</h1></Button>
                <Button variant='outline' colorScheme='teal' onClick={sumar} m={1}>+</Button>
                <Button onClick={mostrar} m={1} colorScheme='blue'>Agregar al carrito</Button>
            </CardBody>
        </Card>
    )
}

export default ItemCount