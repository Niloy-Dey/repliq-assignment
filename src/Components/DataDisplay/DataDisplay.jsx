import React from 'react';
import Searchbar from './Searchbar/Searchbar';
import CategoryBar from './CategoryBar/CategoryBar';
import Products from './Products/Products';

const DataDisplay = ({ addToCart }) => {
    return (
        <div className=' w-full md:w-2/4 lg:w-2/4	'>
            <Searchbar></Searchbar>

            <CategoryBar></CategoryBar>

            {/* <Products></Products> */}
            <Products addToCart={addToCart}></Products>
        </div>
    );
};

export default DataDisplay;