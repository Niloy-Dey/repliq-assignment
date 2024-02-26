import React, { useState } from 'react';
import CartFunctionality from '../CartFunctionality/CartFunctionality';
import DataDisplay from '../DataDisplay/DataDisplay';
import Payment from '../CartFunctionality/Payment/Payment';

const Dashboard = () => {
    const [cartItems, setCartItems] = useState([]);

    // Function to add product to cart
    const addToCart = (product) => {
        setCartItems(prevCartItems => [...prevCartItems, product]);
    };



    // payment page functionality 
    const [showPayingSection, setShowPayingSection] = useState(false);

    const handlePayNowClick = () => {
        setShowPayingSection(true);
    };

    const handleCancelPage = () => {
        setShowPayingSection(false);
    }


    return (
        <div>
            <div className='container mt-2 px-2 mx-auto flex flex-col md:flex-row lg:flex-row'>
                <CartFunctionality cartItems={cartItems} setCartItems={setCartItems} handlePayNowClick={handlePayNowClick}></CartFunctionality>

                {showPayingSection
                    ?
                    (<Payment handleCancelPage={handleCancelPage} ></Payment>)
                    :
                    (<DataDisplay addToCart={addToCart} ></DataDisplay>)
                }

            </div>
        </div>
    );
};

export default Dashboard;