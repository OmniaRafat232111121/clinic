import React from 'react'

import  { BiClinic } from 'react-icons/bi';
import banner from '../../assets/banner-1-img.png'
const Services = () => {
    const services = [
        { 
            id: 1,
            icon:<BiClinic/>,
            
            title: 'General Checkup',
            content:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum vero corrupti nesciunt. Nemo tempora asperiores, id deleniti optio laudantium praesentium?'
     },
        { id: 2,
        icon:<BiClinic/>,
        title: 'Dental Care',  
        content:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum vero corrupti nesciunt. Nemo tempora asperiores, id deleniti optio laudantium praesentium?'
    },
        { id: 3,
        icon:<BiClinic/>,
        title: 'Pediatrics',
        content:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum vero corrupti nesciunt. Nemo tempora asperiores, id deleniti optio laudantium praesentium?'
    },
        { id: 4,
         icon:<BiClinic/>,
        title: 'Cardiology',            content:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum vero corrupti nesciunt. Nemo tempora asperiores, id deleniti optio laudantium praesentium?'
    },
        { id: 5,
        icon:<BiClinic/>,
        title: 'Dermatology', 
         content:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum vero corrupti nesciunt. Nemo tempora asperiores, id deleniti optio laudantium praesentium?'
    },
    { id: 6,
    icon:<BiClinic/>,
     title: 'Surgery', 
    content:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum vero corrupti nesciunt. Nemo tempora asperiores, id deleniti optio laudantium praesentium?'
},
      ];
  return (
    <div>
         <div className="container mx-auto py-8 ">
      <h2 className="text-3xl font-bold mb-4 text-center text-mintbold ">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-5 ">
        {services.map(service => (
          <div
            key={service.id}
            className="bg-white rounded-lg shadow p-6 flex flex-col justify-between bg-mint"
          >
            <h2 className='mx-auto text-xl mb-3'>{service.icon}</h2>
            <h3 className="text-xl font-bold mb-4 mx-auto">{service.title}</h3>
            <p className="text-gray-600">{service.content}</p>
           
          </div>
        ))}
      </div>
      <div className='relative'>
        <img src={banner}  alt="banner" />
        <div className='banner-overlay'>
            
        </div>

      </div>
    </div>
      
    </div>
  )
}

export default Services
