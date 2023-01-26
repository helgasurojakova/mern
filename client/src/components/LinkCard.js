import React from 'react'
import {Heading, Text} from "@chakra-ui/react"

export const LinkCard = ({link}) => {
    return (
        <>
            <Heading as='h2' size='2xl' isTruncated>
                Link
            </Heading>
            <br />
            <Text fontSize='lg'>Your link: <a href={link.to} target="_blank" rel="noopener noreferrer" style={{color: 'teal'}}>{link.to}</a></Text>
            <br />
            <Text fontSize='lg'>From: <a href={link.from} target="_blank" rel="noopener noreferrer" style={{color: 'teal'}}>{link.from}</a></Text>
            <br />
            <Text fontSize='lg'>Number of clicks on a link: <strong>{link.clicks}</strong></Text>
            <br />
            <Text fontSize='lg'>Date of creation: <strong>{new Date(link.date).toLocaleDateString()}</strong></Text>
        </>
    );
};
