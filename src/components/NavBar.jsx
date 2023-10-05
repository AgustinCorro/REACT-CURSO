import React from 'react';
import CartWidget from './CartWidget';
import { Menu, MenuButton, MenuItem, MenuList, Flex, Box, Spacer, Divider } from '@chakra-ui/react';

const NavBar = () => {
    return (
        <div>
            <Flex>
                <Box>
                    <h1>Logo</h1>
                </Box>
                <Spacer/>
                <Box>
                    <Menu>
                        <MenuButton>
                            Productos
                        </MenuButton>
                        <MenuList>
                            <MenuItem>Remeras</MenuItem>
                            <MenuItem>Pantalones</MenuItem>
                            <MenuItem>Abrigos</MenuItem>
                        </MenuList>
                    </Menu>
                </Box>
                <Spacer />
                <Box>
                    <CartWidget />
                </Box>
            </Flex>






        </div>
    )
}

export default NavBar