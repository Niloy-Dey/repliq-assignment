import React from 'react';
import CartFunctionality from '../CartFunctionality/CartFunctionality';
import DataDisplay from '../DataDisplay/DataDisplay';

const Dashboard = () => {
    return (
        <div>
            <div className='container mx-auto flex '>
                <CartFunctionality></CartFunctionality>

                <DataDisplay></DataDisplay>
            </div>
        </div>
    );
};

export default Dashboard;