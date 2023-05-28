import React from 'react'
import doctor1 from '../../assets/doc-1.png';
import doctor2 from '../../assets/doc-2.png';
import doctor3 from '../../assets/doc-3.png';
const Doctors = () => {
    const doctors = [
        { 
            id: 1,
            name:'samoul Goe',
            image:doctor1,
            title: 'Medicine',
     },
     { 
        id: 2,
        name:'Eline Goe',
        image:doctor2,
        title: 'Cartliogy',
 },
 { 
    id: 3,
    name:'Tanya elie',
    image:doctor3,
    title: 'Medicine',
}, 
      ];
  return (
    <div>
  
      <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Order a Doctor</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-5 ">

      {doctors.map(doctor => (
          <div
            key={doctor.id}
            className="bg-white rounded-lg shadow p-6 flex flex-col justify-between bg-mint"
          >
            <img src={doctor.image} alt="doctor" className='w-full h-[80%]'/>
           
            <div className='doctor-info'>
            <h2 className='mx-auto text-xl mb-3 mt-2'>{doctor.name}</h2>
              <h3 className="text-xl font-bold mb-4 mx-auto">{doctor.title}</h3>
        
                </div>
          
           
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default Doctors
