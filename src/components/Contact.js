import React from "react"

const Contact = () => {
  return (
    <div className="flex flex-col items-center p-4">
      {/* GIF Section */}
      <div className="inline-block mb-4">
        <iframe 
          src="https://giphy.com/embed/l41lVsYDBC0UVQJCE" 
          width="480" 
          height="264" 
          frameBorder="0" 
          className="giphy-embed rounded-lg shadow-lg" 
          allowFullScreen
        ></iframe>
      </div>

      {/* Form Section */}
      <form className="flex flex-col items-center">
        <input 
          type="text" 
          className="border border-black p-2 m-2 w-80" 
          placeholder="Name"
        />
        <input 
          type="text" 
          className="border border-black p-2 m-2 w-80" 
          placeholder="Message"
        />
        <input 
          type="email" 
          className="border border-black p-2 m-2 w-80" 
          placeholder="Email"
        />
        <button 
          type="submit" 
          className="border border-black p-2 m-2 bg-green-300 hover:bg-green-400 rounded-3xl w-80"
        >
          Submit
        </button>
      </form>

      {/* Giphy Attribution */}
      <p className="mt-2 text-sm text-gray-600">
        <a 
          href="https://giphy.com/gifs/monkey-phone-cell-l41lVsYDBC0UVQJCE" 
          className="text-blue-500 hover:underline"
        >
          via GIPHY
        </a>
      </p>
    </div>
  )
}

export default Contact;
