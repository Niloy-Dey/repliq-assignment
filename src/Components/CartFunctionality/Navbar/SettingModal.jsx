import React, { useState } from 'react';
import arrow from '../../../assets/images/left-chevron.png';

const SettingModal = ({  closeModal }) => {
    const [activeButton, setActiveButton] = useState('');
    const [taxType, setTaxType] = useState('');

    const handleButtonClick = (button) => {
        setActiveButton(button);
    };

    const handleTaxTypeChange = (event) => {
        setTaxType(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
            <div className="bg-white p-6 w-96 rounded-lg z-10">
                <div className="flex items-center mb-6">
                    <button onClick={closeModal}>
                        <img className="w-7" src={arrow} alt="" />
                    </button>
                    <h2 className="text-lg lg:text-xl mx-auto font-bold">Settings</h2>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2">
                        <button
                            className={`bg-blue-300 p-3 rounded mr-1 ${activeButton === 'taxOn' ? 'border-b-2 border-blue-500' : ''}`}
                            onClick={() => handleButtonClick('taxOn')}
                            type="button"
                        >
                            Tax On
                        </button>
                        <button
                            className={`bg-blue-300 p-3 rounded ml-1 ${activeButton === 'taxType' ? 'border-b-2 border-blue-500' : ''}`}
                            onClick={() => handleButtonClick('taxType')}
                            type="button"
                        >
                            Tax Type
                        </button>
                    </div>
                    <div className="mt-4">
                        <input
                            type="radio"
                            id="afterDiscount"
                            name="taxType"
                            value="afterDiscount"
                            checked={taxType === 'afterDiscount'}
                            onChange={handleTaxTypeChange}
                        />
                        <label className="ml-2" htmlFor="afterDiscount">After Discount</label>
                    </div>
                    <div>
                        <input
                            type="radio"
                            id="beforeDiscount"
                            name="taxType"
                            value="beforeDiscount"
                            checked={taxType === 'beforeDiscount'}
                            onChange={handleTaxTypeChange}
                        />
                        <label className="ml-2" htmlFor="beforeDiscount">Before Discount</label>
                    </div>
                    <button type="submit" className="bg-blue-500 w-full mt-3 text-white px-4 py-2 rounded">Update</button>
                </form>
            </div>
        </div>
    );
};

export default SettingModal;
