import React from 'react'
import about from '../../assets/about.avif'
const About = () => {
  return (
    <div className="container mx-auto p-8">
    <h2 className="text-3xl font-bold mb-4 text-center text-mintbold">About Our Clinic</h2>
    <div className="grid grid-cols-3 items-center justify-center ">
      <div>
        <img
          src={about}
          alt="Clinic Image"
          className="rounded-lg w-[70%] h-[50%]"
        />
      </div>
      <div>
        <p className="text-gray-600 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fringilla interdum ligula sed euismod. Cras vitae finibus erat, sit amet cursus nisl. Suspendisse lacinia efficitur ultricies. Nulla fringilla sapien vel volutpat ultrices.
        </p>
        <p className="text-gray-600">
          Integer tincidunt, erat sit amet iaculis efficitur, ex quam facilisis sem, sed fringilla orci nisi et odio. Vestibulum vel est et est sagittis vulputate vel non libero. Nam nec urna id elit feugiat luctus ac ac odio.
        </p>
      </div>
    </div>
  </div>
  )
}

export default About
