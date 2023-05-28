import React from 'react'

const Contact = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen bg-gray">
      <h1 className="text-4xl font-bold mb-4 text-mint">Contact Us</h1>
      <p className="text-lg text-gray-700">Please fill out the form below to get in touch with us.</p>
      <form className="mt-8 max-w">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name:</label>
          <input type="text" id="name" className="w-full border border-gray-300 rounded py-2 px-4" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email:</label>
          <input type="email" id="email" className="w-full border border-gray-300 rounded py-2 px-4" />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message:</label>
          <textarea id="message" className="w-full border border-gray-300 rounded py-2 px-4" rows="5"></textarea>
        </div>
        <button type="submit" className="bg-mintbold hover:bg-mint 
           font-bold py-2 px-4 rounded">
          Submit
        </button>
      </form>
      
      
    </div>
    </div>
  )
}

export default Contact
