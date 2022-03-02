import {useCallback} from 'react'
import {useToast} from "@chakra-ui/react";


export const useMessage = () => {
    const toast = useToast()
    return useCallback((text) =>{
        if (text) {
            toast({
                title: text,
                // description: text,
                status: 'error',
                duration: 9000,
                isClosable: true,
            })
        }
    }, [])
}

