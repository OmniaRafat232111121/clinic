import React from 'react'

const Footer = () => {
  return (
    <div>
       <footer className="bg-mint text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-sm">&copy; 2023 Your Clinic. All rights reserved.</p>
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="text-sm hover:text-white">Terms of Service</a>
          </li>
          <li>
            <a href="#" className="text-sm hover:text-mint">Privacy Policy</a>
          </li>
          <li>
            <a href="#" className="text-sm hover:text-mint">Contact Us</a>
          </li>
        </ul>
      </div>
    </footer>
    </div>
  )
}

export default Footer
