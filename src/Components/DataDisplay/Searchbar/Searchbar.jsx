import React from 'react';
import searchIcon from '../../../assets/images/search.png';
const Searchbar = ({ handleSearch }) => {
    return (
        <div className="relative">
            <input
                type="text"
                placeholder="Search..."
                className="py-4 pl-10 w-full  pr-4 shadow-lg rounded-lg focus:outline-none focus:border-blue-500"
                onChange={handleSearch}
            />
            <img
                src={searchIcon}
                alt="Search"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
            />
        </div>
    );
};

export default Searchbar;