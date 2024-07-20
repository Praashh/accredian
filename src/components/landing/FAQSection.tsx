import { useState } from 'react';

const FAQSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="max-w-3xl mx-auto p-6 w-full">
      <h2 className="text-2xl font-bold text-center mb-6">Frequently Asked Questions</h2>
      
      <div className="flex flex-col md:flex-row mb-6">
        <div className="md:w-1/3 mb-4 md:mb-0 md:pr-4">
          <button className="bg-blue-100 text-blue-600 w-full py-2 px-4 rounded-md mb-2">Eligibility</button>
          <button className="bg-gray-100 text-gray-600 w-full py-2 px-4 rounded-md mb-2">How To Use?</button>
          <button className="bg-gray-100 text-gray-600 w-full py-2 px-4 rounded-md">Terms & Conditions</button>
        </div>
        
        <div className="md:w-2/3">
          <div className="bg-white shadow-md rounded-md p-4 mb-2">
            <button 
              className="flex justify-between items-center w-full text-left"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="font-semibold">Do I need to have prior Product Management and Project Management experience to enroll in the program?</span>
              <span className="text-blue-600">{isOpen ? '▲' : '▼'}</span>
            </button>
            {isOpen && (
              <p className="mt-2 text-gray-600">
                No, the program is designed to be inclusive of all levels of experience. All topics will be covered from the basics, making it suitable for individuals from any field of work.
              </p>
            )}
          </div>
          <div className="bg-white shadow-md rounded-md p-4">
            <button className="flex justify-between items-center w-full text-left">
              <span className="font-semibold">What is the minimum system configuration required?</span>
              <span className="text-blue-600">▼</span>
            </button>
          </div>
        </div>
      </div>
      
      <div className="bg-blue-600 text-white rounded-lg p-6 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center mb-4 md:mb-0">
          <div className="bg-white p-2 rounded-md mr-4">
            <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" fillRule="evenodd"></path>
            </svg>
          </div>
          <div>
            <h3 className="font-bold">Want to delve deeper into the program?</h3>
            <p>Share your details to receive expert insights from our program team!</p>
          </div>
        </div>
        <button className="bg-white text-blue-600 px-4 py-2 rounded-md">Get in touch →</button>
      </div>
    </div>
  );
};

export default FAQSection;
