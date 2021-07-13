import React from 'react'
import { useParams } from 'react-router'

const BlogDetail = () => {
    const {id} = useParams();
    return (
        <div className='container'>
            <h1>Blog</h1>
        </div>
    )
}

export default BlogDetail
