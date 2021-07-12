import React from 'react'
import './Blog.css'

const Blog = () => {
    const state = {data: ''};

    const fetchData = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await res.json();
        return data;
    }

    const getData = async () => {
        const dataFromServer = await fetchData();
        
    }

    return (
        <div>
            <div className="container mt-4 mx-3">
                <h2 className="mb-3">Blog Posts</h2>
                <div id="post" className="mr-3">

                </div>
            </div>
        </div>
    )
}

export default Blog
