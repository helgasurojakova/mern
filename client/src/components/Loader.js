import {Spinner} from "@chakra-ui/react"

export const Loader = () => {
    return (
        <div style={{display:"flex", justifyContent:"center", paddingTop:"2rem"}}>
            <Spinner size='xl' />
        </div>
    );
};
