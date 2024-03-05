import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Navbar from '../Components/Navbar'

const Blogs = () => {
  const { blog } = useParams()
  return (
    <>
    <div>Blogs </div>
    <Link to="/blogs/blog1">Blog 1</Link>
    </>
    
  )
}

export default Blogs