import React from 'react'
import { Card, CardBody, Stack, Heading, Text, Divider, CardFooter, ButtonGroup, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
const Item = ({ name, description, precio, id }) => {

    return (
        <div>
            <Card maxW='sm'>
                <CardBody>
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>{name}</Heading>
                        <Text>
                            {description}
                        </Text>
                        <Text color='blue.600' fontSize='2xl'>
                            ${precio}
                        </Text>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                    <ButtonGroup spacing='2'>
                        <Link to={`/product/${id}`}>
                            <Button variant='solid' colorScheme='blue'>
                                Ver detalle
                            </Button>
                        </Link>
                        
                    </ButtonGroup>
                </CardFooter>
            </Card>
        </div>
    )
}

export default Item