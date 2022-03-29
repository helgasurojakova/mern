import React, {useContext} from 'react'
import {AuthContext} from "../context/AuthContext"
import {
    Box, Button,
    Flex,
    HStack,
    Link,
    useColorModeValue
} from "@chakra-ui/react"
import logo from "../img/logo.png"
import logout_img from "../img/logout.png"

const Links = ['Create', 'Links']
const NavLink = ({ children }) => (
    <Link
        px={2}
        py={1}
        rounded={'md'}
        _hover={{
            textDecoration: 'none',
            bg: useColorModeValue('gray.200', 'gray.700'),
        }}
        href={children}>
        {children}
    </Link>
)

const Navbar = () => {
    const auth = useContext(AuthContext)
    const logoutHandler = (e) => {
        e.preventDefault()
        auth.logout()
        window.location.href = '/'
    }
    const state = {date: new Date()}
    return (
        <>
            <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <HStack spacing={8} alignItems={'center'}>
                        <img src={logo} alt="Logo" height={40} width={40}/>
                        <HStack
                            as={'nav'}
                            spacing={4}
                            display={{ base: 'none', md: 'flex' }}>
                            {Links.map((link) => (
                                <NavLink key={link}>{link}</NavLink>
                            ))}
                        </HStack>
                    </HStack>
                    <Flex alignItems={'center'}>
                        <p>{state.date.toLocaleDateString()}</p>
                        <Button onClick={logoutHandler}>
                            <img src={logout_img} height={20} width={20} hspace={5}/>
                            Logout
                        </Button>
                    </Flex>
                </Flex>
            </Box>
        </>
    );
};

export default Navbar;
