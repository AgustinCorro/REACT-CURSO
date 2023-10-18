import React from 'react';
import CartWidget from './CartWidget';
import { Menu, MenuButton, MenuItem, MenuList, Flex, Box, Spacer, Divider } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <Flex>
                <Box>
                    <Link to={"/"}>
                        <h1>Logo</h1>
                    </Link>
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
                    <Link to={"/cart"}>
                        <CartWidget />
                    </Link>
                </Box>
            </Flex>
        </div>
    )
}

export default NavBar