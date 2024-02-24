import React from 'react';
import Navbar from './Navbar/Navbar';

const CartFunctionality = () => {
    return (
        <div className=' w-2/4	'>
            <Navbar></Navbar>

            <div className=' flex text-blue-500  justify-between  bg-blue-100  my-2 p-3'>
                <p>Steve Jobs </p>
                <div className='border border-1 border-blue-500 rounded-full w-6 flex justify-center items-center'>+</div>
            </div>
        </div>
    );
};

export default CartFunctionality;