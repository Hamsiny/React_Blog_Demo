import React, {useState, useEffect} from 'react'
import './Blogs.css'
import Blog from '../Blog/Blog'

const Blogs = () => {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await res.json();
        return data;
    }

    useEffect(() => {
        const getData = async () => {
            const dataFromServer = await fetchData();
            setData(dataFromServer);
        }
        getData();
    }, []);

    return (
        <div>
            <div className="container mt-4 mx-auto">
                <h2 className="mb-3">Blog Posts</h2>
                <div id="post" className="mr-3">
                    {data.map(blog => (
                        <Blog 
                            key={blog.id}
                            blogId={blog.id}
                            blogTitle={blog.title}
                            blogBody={blog.body}/>
                    ))}

                </div>
            </div>
        </div>
    ); 

}

export default Blogs
