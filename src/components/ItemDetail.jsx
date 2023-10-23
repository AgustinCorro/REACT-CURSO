import React from 'react'
import { useParams } from 'react-router-dom'
import { Card, CardBody, Stack, Heading, Text, Divider} from '@chakra-ui/react'
import ItemCount from './ItemCount'

const ItemDetail = ({productos}) => {

  const {id} = useParams();

  const filteredProduct = productos.filter((producto) => producto.id === id)

  return (
    <>
      {
        filteredProduct.map((p) =>{
          return(
            <Card maxW='sm' key={p.id}>
                <CardBody>
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>{p.name}</Heading>
                        <Text>
                            {p.description}
                        </Text>
                        <Text color='blue.600' fontSize='2xl'>
                            ${p.precio}
                        </Text>
                    </Stack>
                </CardBody>
                <Divider />
            </Card>
          )
        })
      }
      <ItemCount/>
    </>
  )
}

export default ItemDetail