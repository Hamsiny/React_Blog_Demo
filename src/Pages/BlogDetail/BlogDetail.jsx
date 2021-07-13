import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom';
import './BlogDetail.css'

const BlogDetail = () => {
    const {id} = useParams();
    const [data, setData] = useState([]);

    const fetchData = async () => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
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
        <div className='container mt-5'>
            <h2>Blog Detail</h2>
            <h4 className='mt-4 title'>{data.title}</h4>
            <h5 className='mt-3'>Blog Id: {data.id}</h5>
            <p className='mt-3 mb-5'>{data.body}</p>
            <Link to='/blogs'><button className='btnn mr-3'>Back to Blog</button></Link>
            <Link to='/'><button className='btnn'>Home</button></Link>

        </div>
    )
}

export default BlogDetail
