import React from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../Components/Navbar'

const BlogPost = () => {
    const { blog } = useParams()
    return (
        <div>
            Blogs: Content {blog} </div>

    )
}

export default BlogPost