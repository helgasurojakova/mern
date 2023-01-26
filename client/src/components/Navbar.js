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
import {NavLink, useNavigate} from "react-router-dom"

const Links = [
    {
        name: 'Create',
        to: '/create',
    },
    {
        name: 'Links',
        to: '/links',
    }
]

const Navbar = () => {
    const navigate = useNavigate()
    const auth = useContext(AuthContext)
    const logoutHandler = (e) => {
        e.preventDefault()
        auth.logout()
        navigate('/')
    }
    const state = {date: new Date()}
    const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
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
                                <NavLink
                                    style={({ isActive }) => ({
                                        padding: 5,
                                        borderRadius: '6px',
                                        color: isActive ? '#fff' : null,
                                        background: isActive ? 'teal' : null,
                                    })}
                                    key={link.to} to={link.to}>{link.name}</NavLink>
                            ))}
                        </HStack>
                    </HStack>
                    <Flex alignItems={'center'}>
                        <p>{state.date.getDate() + ' ' + month[state.date.getMonth()] + ' ' + state.date.getFullYear()}</p>
                        <Button onClick={logoutHandler} marginLeft={5}>
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
