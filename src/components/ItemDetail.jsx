import React from 'react'
import { useParams } from 'react-router-dom'
import { Card, CardBody, Stack, Heading, Text, Divider, CardFooter, ButtonGroup, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const ItemDetail = ({productos}) => {

  const {id} = useParams();

  const filteredProduct = productos.filter((producto) => producto.id === id)

  return (
    <>
      {
        filteredProduct.map((p) =>{
          return(
            <Card maxW='sm'>
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
                <CardFooter>
                    <ButtonGroup spacing='2'>
                        <Link>
                            <Button variant='solid' colorScheme='blue'>
                                Contador
                            </Button>
                        </Link>
                        
                    </ButtonGroup>
                </CardFooter>
            </Card>
          )
        })
      }
    </>
  )
}

export default ItemDetail