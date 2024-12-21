const Grocery = () => {
    return (
      <div className="text-center p-4">
  
        {/* GIF Embed */}
        <div className="inline-block mb-4">
          <iframe 
            src="https://giphy.com/embed/OiC5BKaPVLl60" 
            width="480" 
            height="264" 
            frameBorder="0" 
            className="giphy-embed rounded-lg shadow-lg" 
            allowFullScreen
          ></iframe>
        </div>
  
        {/* Giphy Attribution */}
        <p className="mt-2 text-sm text-gray-600">
          <a 
            href="https://giphy.com/gifs/phone-OiC5BKaPVLl60" 
            className="text-blue-500 hover:underline"
          >
            via GIPHY
          </a>
        </p>
      </div>
    );
  };
  
  export default Grocery;
  