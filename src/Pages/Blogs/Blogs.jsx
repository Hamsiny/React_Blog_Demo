import React, {useState, useEffect} from 'react'
import './Blogs.css'

const Blog = () => {
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
                    {data.map(element => (
                        <div key={element.id} className="mt-3 mr-3 dataitem">
                            <h4>{element.id} - {element.title}</h4>
                            <p>{element.body}</p>
                            <hr/>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    ); 

}

export default Blog
