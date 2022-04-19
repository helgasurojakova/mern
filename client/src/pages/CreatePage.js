import React, {useContext, useState} from 'react'
import {Input} from "@chakra-ui/react"
import {useHttp} from "../hooks/http.hook"
import {AuthContext} from "../context/AuthContext"
import { useNavigate } from 'react-router-dom'

const CreatePage = () => {
    const navigate = useNavigate()
    const auth = useContext(AuthContext)
    const {request} = useHttp()
    const [link, setLink] = useState('')

    const pressHandler = async event => {
        if (event.key === 'Enter') {
            try {
                const data = await request('/api/link/generate', 'POST', {from: link},
                {Authorization: `Bearer ${auth.token}`})
                navigate(`/detail/${data.link._id}`)
            } catch (e) {}
        }
    }

    return (
        <div style={{paddingTop:"2rem", width:"600px", marginLeft:"auto", marginRight:"auto"}}>
            <Input
                variant="flushed"
                type="text"
                placeholder="Insert link"
                id="link"
                value={link}
                onChange={e => setLink(e.target.value)}
                onKeyPress={pressHandler}
            />
        </div>
    );
};

export default CreatePage;