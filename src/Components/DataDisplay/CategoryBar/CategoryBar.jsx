import React, { useState } from 'react';
import dot from '../../../assets/images/dots.png'
const CategoryBar = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [activeCategory, setActiveCategory] = useState(null);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    const closeDrawer = () => {
        setIsDrawerOpen(false);
    };

    const handleCategoryClick = (category) => {
        setActiveCategory(category);
        toggleDrawer(); 
    };

    return (
        <div className='grid grid-cols-2 lg:grid-cols-5 gap-2 mt-2 mx-3 px-2'>
            <button className={`border-2 text-sm  rounded-md py-2 font-bold ${activeCategory === "All" ? 'text-blue-500  border-blue-500' : 'text-gray-500'}`} onClick={() => handleCategoryClick("All")}>All Categories</button>
            <button className={`border-2 text-sm  rounded-md py-2 font-bold ${activeCategory === "Electronics" ? 'text-blue-500 border-blue-500' : 'text-gray-500'}`} onClick={() => handleCategoryClick("Electronics")}>Electronics</button>
            <button className={`border-2 text-sm   rounded-md py-2 font-bold ${activeCategory === "Home & Lifestyle" ? 'text-blue-500  border-blue-500' : 'text-gray-500'}`} onClick={() => handleCategoryClick("Home & Lifestyle")}>Home & Lifestyle</button>
            <button className={`border-2 text-sm  rounded-md py-2 font-bold ${activeCategory === "Men Fashion" ? 'text-blue-500  border-blue-500' : 'text-gray-500'}`} onClick={() => handleCategoryClick("Men Fashion")}>Men Fashion</button>
            <div className='hidden lg:block'><div className='flex  items-center  '><button className={` text-sm border-2 rounded-md  font-bold ${activeCategory === "Women Fashion" ? 'text-blue-500  border-blue-500' : 'text-gray-500'}`} onClick={() => handleCategoryClick("Women Fashion")}>Women Fashion</button><img className='lg:h-8 ' src={dot} alt="" /></div></div>
            <button className='' onClick={() => handleCategoryClick("")}> </button>
            {isDrawerOpen && (
                <div className="fixed inset-y-0 right-0 z-50 bg-white w-96 shadow-lg">
                    <div className="flex justify-between items-center px-4 py-2">
                        <button onClick={closeDrawer}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500 hover:text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <h1 className='text-center mb-8 font-bold text-xl'>Categories</h1>
                    <div className='flex flex-wrap gap-2 mt-2 mx-3 px-2'>
                        <button
                            className={`border-2 rounded-md py-2 px-2 font-bold ${activeCategory === "All" ? 'text-blue-500  border-blue-500' : 'text-gray-500'}`}
                            onClick={() => handleCategoryClick("All")}>
                            All Categories
                        </button>
                        <button
                            className={`border-2 rounded-md py-2 px-2 font-bold ${activeCategory === "Electronics" ? 'text-blue-500  border-blue-500' : 'text-gray-500'}`}
                            onClick={() => handleCategoryClick("Electronics")}>
                            Electronics
                        </button>
                        <button
                            className={`border-2 rounded-md py-2 px-2 font-bold ${activeCategory === "Electronics" ? 'text-blue-500  border-blue-500' : 'text-gray-500'}`}
                            onClick={() => handleCategoryClick("Gocery")}>
                            Gocery
                        </button>
                        <button
                            className={`border-2 rounded-md py-2 px-2 font-bold ${activeCategory === "Electronics" ? 'text-blue-500  border-blue-500' : 'text-gray-500'}`}
                            onClick={() => handleCategoryClick("wood")}>
                            Wood
                        </button>
                        <button
                            className={`border-2 rounded-md py-2 px-2 font-bold ${activeCategory === "Electronics" ? 'text-blue-500  border-blue-500' : 'text-gray-500'}`}
                            onClick={() => handleCategoryClick("foods")}>
                            Foods
                        </button>
                        <button
                            className={`border-2 rounded-md py-2 px-2 font-bold ${activeCategory === "Home & Lifestyle" ? 'text-blue-500  border-blue-500' : 'text-gray-500'}`}
                            onClick={() => handleCategoryClick("Home & Lifestyle")}>
                            Home & Lifestyle
                        </button>
                        <button
                            className={`border-2 rounded-md py-2 px-2 font-bold ${activeCategory === "Men Fashion" ? 'text-blue-500  border-blue-500' : 'text-gray-500'}`}
                            onClick={() => handleCategoryClick("Men Fashion")}>
                            Men Fashion
                        </button>
                        <button
                            className={`border-2 rounded-md py-2 px-2 font-bold ${activeCategory === "Women Fashion" ? 'text-blue-500  border-blue-500' : 'text-gray-500'}`}
                            onClick={() => handleCategoryClick("Women Fashion")}>
                            Women Fashion
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CategoryBar;
