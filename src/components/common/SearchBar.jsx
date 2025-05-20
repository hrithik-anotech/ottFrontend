import React from 'react';

const SearchBar = () => {
  return (
    <div className="relative w-full">
      <input
        type="text"
        placeholder="Search"
        className="w-full py-1.5 px-4 pl-1 bg-gray-800 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-500"
      />
      <svg
        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
        xmlns="http://www.w3.org/2000/svg"
        height="20"
        viewBox="0 0 24 24"
        width="20"
        fill="currentColor"
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 
          16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 
          0 3.09-.59 4.23-1.57l.27.28v.79l5 5L20.49 
          19l-5-5zm-6 0C7.01 14 5 11.99 5 
          9.5S7.01 5 9.5 5 14 7.01 14 9.5 
          11.99 14 9.5 14z"
        />
      </svg>
    </div>
  );
};

export default SearchBar;
