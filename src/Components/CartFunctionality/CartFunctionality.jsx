import React from 'react';
import Navbar from './Navbar/Navbar';
import CartData from './CartData/CartData';
import profile from '../../assets/images/account.png'
import Footer from './Footer/Footer';
const CartFunctionality = () => {
    return (
        <div className=' w-2/4	border-r-2 pr-5'>
            {/* bg-[#EEF0F9]   text-[#5C6AC4]*/}
            <Navbar></Navbar>

            <div className=' flex bg-[#EEF0F9]   text-[#5C6AC4] justify-between   my-2 p-3'>
                <div className='flex w-52 '> <img src={profile} alt="" /> <p className='pl-2'> Steve Jobs</p> </div>
                <div className='border border-1 border-blue-500 rounded-full w-6 flex justify-center items-center'>+</div>
            </div>


            <CartData></CartData>

            <Footer>   </Footer>
        </div>
    );
};

export default CartFunctionality;