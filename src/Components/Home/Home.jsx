import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Services from '../Services/Services'
import About from '../About/About'
import Footer from '../Footer/Footer'

const Home = () => {
  return (
   
  <>
   <div className="bg-clinic-image  text-white  flex flex-col items-center justify-center h-screen">
      <div className='bg-mint rounded text-white p-8'>
      <h1 className="text-4xl font-bold mb-4">Welcome to Our Clinic</h1>
      <p className="text-lg">Providing quality healthcare services</p>
      </div>
      
    </div>
    <div>
        <About/>
        <Services/>
    </div>
     
  </>
 
  )
}

export default Home
