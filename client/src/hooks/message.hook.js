import {useCallback} from 'react'
import {useToast} from "@chakra-ui/react";


export const useMessage = () => {
    const toast = useToast()
    return useCallback((text, status) =>{
        if (text) {
            toast({
                title: text,
                // description: text,
                status: status,
                duration: 9000,
                isClosable: true,
            })
        }
    }, [])
}

