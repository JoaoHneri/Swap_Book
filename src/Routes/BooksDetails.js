import React, { useState } from 'react';

const BookDetails = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    'https://source.unsplash.com/random/400x400',
    'https://source.unsplash.com/random/401x401',
    'https://source.unsplash.com/random/402x402',
    'https://source.unsplash.com/random/403x403',
    'https://source.unsplash.com/random/404x404',
  ];

  const handleImageClick = (index) => {
    setCurrentImage(index);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
      <div className="bg-white rounded-lg shadow-lg p-8 w-2/3">
        <div className="flex">
          <div className="w-1/2">
            <img src={images[currentImage]} alt="Book" className="w-full" />
            <div className="flex justify-center mt-4">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt="Book"
                  className={`w-10 h-10 rounded-full cursor-pointer mx-2 ${
                    currentImage === index && 'border-2 border-blue-500'
                  }`}
                  onClick={() => handleImageClick(index)}
                />
              ))}
            </div>
          </div>
          <div className="w-1/2 pl-6">
            <h1 className="text-3xl font-bold mb-4">The Book Title</h1>
            <h2 className="text-xl font-medium mb-4">Author Name</h2>
            <p className="text-gray-700 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, quam vel
              lacinia dapibus, nibh velit hendrerit nisl, vel aliquet sapien sapien ac sapien.
              Aliquam fermentum, odio vel pulvinar facilisis, velit justo maximus lectus, ut
              dignissim erat lorem id dui. Duis vel sapien vitae nulla interdum ultricies. Sed
              pharetra mi ut iaculis viverra. Proin sed lacinia mi. Aliquam eget magna quis sem
              vehicula lacinia. Duis sed nulla sit amet leo pellentesque convallis.
            </p>
            <ul className="text-gray-700 mb-4">
              <li>Category: Fiction</li>
              <li>Language: English</li>
              <li>Publisher: ABC Publications</li>
              <li>Publication Date: August 1, 2021</li>
              <li>ISBN-13: 978-0000000000</li>
            </ul>
            <button
              type="button"
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;