import React, { useState } from 'react';
import CartFunctionality from '../CartFunctionality/CartFunctionality';
import DataDisplay from '../DataDisplay/DataDisplay';
import Payment from '../CartFunctionality/Payment/Payment';

const Dashboard = () => {

    // payment page functionality 
    const [showPayingSection, setShowPayingSection] = useState(false);

    const handlePayNowClick = () => {
        setShowPayingSection(true);
    };

    const handleCancelPage= () =>{
        setShowPayingSection(false);
    }


    return (
        <div>
            <div className='container mt-2 px-2 mx-auto flex '>
                <CartFunctionality handlePayNowClick={handlePayNowClick}></CartFunctionality>

                {showPayingSection ? (<Payment handleCancelPage={handleCancelPage} ></Payment>) : (<DataDisplay></DataDisplay>)}

            </div>
        </div>
    );
};

export default Dashboard;