import React, {useState} from 'react'
import {Loader} from "../components/Loader"

const DetailPage = () => {
    const [link, setLink] = useState(null)
    return (
        <div>
            <Loader/>
        </div>
    );
};

export default DetailPage;