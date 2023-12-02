import React from 'react'
import Navbar from '../component/Navbar'
import { useNavigate } from 'react-router'


const Home = () => {
  const Navigagte= useNavigate()
  return (
    <>
    <Navbar />      <h1 className=''>Home Page</h1>
    {/* <Link >Sign in</Link> */}
  
    </>
  )
}

export default Home
