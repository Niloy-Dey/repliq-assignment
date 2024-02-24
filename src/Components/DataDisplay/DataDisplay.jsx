import React from 'react';
import Searchbar from './Searchbar/Searchbar';
import CategoryBar from './CategoryBar/CategoryBar';
import Products from './Products/Products';

const DataDisplay = () => {
    return (
        <div className=' w-2/4	'>
            <Searchbar></Searchbar>

            <CategoryBar></CategoryBar>

            <Products></Products>
        </div>
    );
};

export default DataDisplay;