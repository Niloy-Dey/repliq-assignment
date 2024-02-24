import React from 'react';
import CartFunctionality from '../CartFunctionality/CartFunctionality';

const Dashboard = () => {
    return (
        <div>
            <div className='container mx-auto flex '>
                <CartFunctionality></CartFunctionality>
            </div>
        </div>
    );
};

export default Dashboard;