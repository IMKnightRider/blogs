import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import parse from 'html-react-parser'

const BlogPost = () => {
    const { blog } = useParams()
    const blogs = [{
         title: "blog1",
         content: `
         <h1>Blog 1</h1>
         <p>This is the content for blog 1</p>`
     },{
        title: "blog2",
        content: `
        <h1>Blog 2</h1>
        <p>This is the content for blog 2</p>`
    },{
        title: "blog3",
        content: `
        <h1>Blog 3</h1>
        <p>This is the content for blog 3</p>`
    }]

    

    return (
        <div >
            Blogs: Content 
            {blogs.filter(b => b.title === blog).map(b => parse(b.content))}
        </div>

    )
}

export default BlogPost