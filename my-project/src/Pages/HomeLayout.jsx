import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header, Navbar } from '../Components'



const HomeLayout = () => {
  return (
    <>
   <Header/>
   <Navbar/>
    <section className='align-element py-20'>

    <Outlet/>
    </section>
    </>
  )
  py-20;
}

export default HomeLayout