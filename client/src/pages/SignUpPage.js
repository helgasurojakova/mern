import React, {useEffect, useState} from 'react'
import {
    Box,
    Input,
    Stack,
    InputRightElement,
    Button,
    InputGroup,
    Flex,
    Heading, FormControl, InputLeftElement, chakra,
} from "@chakra-ui/react"

import { FaUserAlt, FaLock } from "react-icons/fa"
import {useHttp} from "../hooks/http.hook"
import {useMessage} from "../hooks/message.hook"

const CFaUserAlt = chakra(FaUserAlt)
const CFaLock = chakra(FaLock)

const SignUpPage = () => {
    const message = useMessage();
    const [showPassword, setShowPassword] = useState(false);
    const handleShowClick = () => setShowPassword(!showPassword);
    const {loading, request, error, clearError} = useHttp()
    const [form, setForm] = useState({
        email: '', password: ''
    })

    useEffect(() => {
        message(error, 'error')
        clearError()
    }, [error, message, clearError])

    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    const registerHandler = async (e) => {
        e.preventDefault()
        try {
            const data = await request('/api/auth/register', 'POST', {...form})
            message(data.message, 'success')
            setTimeout(() => {
                window.location.href = '/'
            }, 2000)
        } catch (e) {}
    }

    return (
        <Flex
            flexDirection="column"
            width="100wh"
            height="100vh"
            backgroundColor="gray.200"
            justifyContent="center"
            alignItems="center"
        >
            <Stack
                flexDir="column"
                mb="2"
                justifyContent="center"
                alignItems="center"
            >
                <Heading color="teal.400">Welcome</Heading>
                <Box minW={{ base: "90%", md: "468px" }}>
                    <form>
                        <Stack
                            spacing={4}
                            p="1rem"
                            backgroundColor="whiteAlpha.900"
                            boxShadow="md"
                        >
                            <FormControl>
                                <InputGroup>
                                    <InputLeftElement
                                        pointerEvents="none"
                                        children={<CFaUserAlt color="gray.300" />}
                                    />
                                    <Input type="email"
                                           placeholder="Email address"
                                           name="email"
                                           value={form.email}
                                           onChange={changeHandler}
                                    />
                                </InputGroup>
                            </FormControl>
                            <FormControl>
                                <InputGroup>
                                    <InputLeftElement
                                        pointerEvents="none"
                                        color="gray.300"
                                        children={<CFaLock color="gray.300" />}
                                    />
                                    <Input
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Password"
                                        name="password"
                                        autoComplete="on"
                                        minLength={6}
                                        value={form.password}
                                        onChange={changeHandler}
                                    />
                                    <InputRightElement width="4.5rem">
                                        <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                                            {showPassword ? "Hide" : "Show"}
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                            </FormControl>
                            <Button
                                borderRadius={0}
                                type="submit"
                                variant="solid"
                                colorScheme="teal"
                                width="full"
                                onClick={registerHandler}
                                disabled={loading}
                            >
                                Sign Up
                            </Button>
                        </Stack>
                    </form>
                </Box>
            </Stack>
        </Flex>
    );
};

export default SignUpPage;