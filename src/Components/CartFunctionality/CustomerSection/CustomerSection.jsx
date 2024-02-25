import React, { useState } from 'react';
import profile from '../../../assets/images/account.png';
import add from '../../../assets/images/add.png';
import arrow from '../../../assets/images/left-chevron.png';

const CustomerSection = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [name, setName] = useState('Steve Jobs');

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const newName = event.target.elements.name.value;
        setName(newName);
        closeModal();
    };

    return (
        <div>
            {/* profile section here   */}
            <div className='rounded flex bg-[#EEF0F9] text-[#5C6AC4] justify-between items-center my-2 p-3'>
                <div className='flex w-52'>
                    <img className="w-5 md:w-6 lg:w-6" src={profile} alt="" />
                    <p className='pl-2 text-sm md:text-base lg:text-xl '>{name}</p>
                </div>
                <div className=''>
                    <img src={add} className=" w-5 md:w-6 lg:w-6 cursor-pointer" alt="" onClick={openModal} />
                </div>
            </div>

            {/* Modal  here */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
                    <div className="bg-white p-6 w-96 rounded-lg z-10">
                        <div className="flex  items-center mb-6">
                            <button onClick={closeModal}> <img className='w-7' src={arrow} alt="" /> </button>
                            <h2 className="text-lg  lg:text-xl mx-auto font-bold">Add Customer Details</h2>
                        </div>
                        {/* form here  */}
                        <form onSubmit={handleFormSubmit}>
                            <input type="text" name="name" placeholder="Name" className="block mb-4 border-b-2  outline-none   w-full" />
                            <input type="email" name="email" placeholder="Email" className="block mb-4 border-b-2  outline-none   w-full" />
                            <input type="text" name="phone" placeholder="Phone" className="block mb-4 border-b-2  outline-none   w-full" />
                            <input type="text" name="currency" placeholder="Currency" className="block mb-4 border-b-2  outline-none   w-full" />
                            <input type="text" name="taxId" placeholder="Tax ID" className="block mb-4 border-b-2   outline-none  w-full" />

                            {/* Add more details button */}
                            <button type="button" className="text-blue-500 font-bold py-2 rounded mr-2">+ Add More Details</button>
                            <div>
                                {/* Update button */}
                                <button type="submit" className="bg-blue-500 w-full mt-3 text-white px-4 py-2 rounded">Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CustomerSection;
