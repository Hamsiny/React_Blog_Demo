import React from 'react'
import { Link } from 'react-router-dom'
import './Blog.css'

const Blog = ({blogId, blogTitle, blogBody}) => {
    return (
        <>
            <Link to={`/blogs/${blogId}`} key={blogId} className="mt-3 mr-3 dataitem">
                <h4>{blogId} - {blogTitle}</h4>
                <p>{blogBody}</p>
                <hr/>
            </Link>
        </>
    )
}

export default Blog
