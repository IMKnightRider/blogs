import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Navbar from '../Components/Navbar'

const Blogs = () => {
  const { blog } = useParams()
  return (
    <>
    <div className='text-3xl font-bold underline'>Blogs </div>
    <Link to="/blogs/blog1">Blog 1</Link> <br/>
    <Link to="/blogs/blog2">Blog 2</Link> <br />
    <Link to="/blogs/blog3">Blog 3</Link> <br/>
    </>
  )
}

export default Blogs