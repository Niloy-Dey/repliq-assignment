import React from 'react';
import Navbar from './Navbar/Navbar';
import CartData from './CartData/CartData';
import Footer from './Footer/Footer';
import CustomerSection from './CustomerSection/CustomerSection';
const CartFunctionality = ({cartItems, setCartItems,  handlePayNowClick}) => {

    
    return (
        <div className='w-full md:w-2/4 lg:w-2/4	border-r-2  pr-5'>
            <Navbar></Navbar>

            <CustomerSection></CustomerSection>

            <CartData cartItems={cartItems} setCartItems={setCartItems}></CartData>

            <Footer handlePayNowClick={handlePayNowClick}>   </Footer>
        </div>
    );
};

export default CartFunctionality;