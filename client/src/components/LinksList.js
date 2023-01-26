import React from 'react'
import {Heading, Table, TableContainer, Tbody, Td, Th, Thead, Tr} from "@chakra-ui/react"
import {Link} from 'react-router-dom'

export const LinksList = ({links}) => {

    if (!links.length) {
        return <Heading size='md' style={{paddingTop:"2rem", width:"600px", marginLeft:"auto", marginRight:"auto"}}>You haven't created links yet.</Heading>
    }

    return (
        <TableContainer>
            <Table variant='simple'>
                <Thead>
                    <Tr>
                        <Th>#</Th>
                        <Th>Original</Th>
                        <Th>Shortened</Th>
                        <Th></Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {links.map((link, index) => {
                        return (
                            <Tr key={link._id}>
                                <Td>{index + 1}</Td>
                                <Td>{link.from}</Td>
                                <Td>{link.to}</Td>
                                <Td>
                                    <Link to={`/detail/${link._id}`} style={{color: 'teal'}}>
                                        Open
                                    </Link>
                                </Td>
                            </Tr>
                        )
                    }) }
                </Tbody>
            </Table>
        </TableContainer>
    );
};

