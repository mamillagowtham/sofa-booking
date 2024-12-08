import React from 'react'
import { Outlet, useNavigation } from 'react-router-dom'
import { Header, Navbar } from '../Components'
import Loading from '../Components/Loading';



const HomeLayout = () => {
 const navigation =  useNavigation();
 const isPageLoading = navigation.state ==="loading";
  return (
    <>
   <Header/>
   <Navbar/>

   {isPageLoading? <Loading/> : <section className='align-element py-20'>

<Outlet/>
</section>}
    
    </>
  )
  py-20;
}

export default HomeLayout