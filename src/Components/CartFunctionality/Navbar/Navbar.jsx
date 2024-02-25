import React, { useState } from 'react';
// import component 👇
import Drawer from 'react-modern-drawer'
import menu from '../../../assets/images/menu.png'
import note from '../../../assets/images/edit.png'
import shopping from '../../../assets/images/shipped.png'
import hold from '../../../assets/images/stop.png'
import newAdd from '../../../assets/images/add (1).png'
import arrow from '../../../assets/images/left-chevron.png';
//import styles 👇
import 'react-modern-drawer/dist/index.css'



const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }


    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };



    return (
        <>
            <div className=' flex  w-full'>
                <button onClick={toggleDrawer}>
                    <img className='lg:h-7 w-4 lg:w-10' src={menu} alt="" />
                </button>
                <div className='grid grid-cols-4 w-full gap-1 md:gap-2 lg:gap-3 '>
                    <button className='rounded text-xs md:text-base lg:text-xl flex justify-evenly items-center ml-2 p-1 lg:p-3 bg-[#EEF0F9]   text-[#5C6AC4]'>
                        <img src={note} className='w-3 md:w-4 lg:w-6' alt="" /> Home
                    </button>
                    <button className='rounded text-xs md:text-base lg:text-xl flex justify-evenly  items-center   p-1 lg:p-3 bg-[#EEF0F9]   text-[#5C6AC4]' >
                        <img src={shopping} className='w-3 md:w-4 lg:w-6' alt="" />about
                    </button>
                    <button className='rounded text-xs md:text-base lg:text-xl flex justify-evenly items-center    p-1 lg:p-3  bg-[#EEF0F9]   text-[#5C6AC4]'>
                        <img src={hold} className='w-3 md:w-4 lg:w-6' alt="" />Hold orders
                    </button>
                    <button className='rounded text-xs md:text-base lg:text-xl flex justify-evenly items-center    p-1 lg:p-3  bg-[#EEF0F9]   text-[#5C6AC4]' >
                        <img src={newAdd} className='w-3 md:w-4 lg:w-6' alt="" />New Items
                    </button>
                </div>
            </div>




            <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='left'
                className='bla bla bla'
            >
                <div >
                    {/*  Some Dashboard information  */}
                    <div className='bg-gray-100 p-8 '>
                        <h1 className=' text-center text-3xl font-bold text-green-500'>Welcome</h1>
                        <p className='mt-10 text-sm'>Location : </p>
                        <p className='font-bold'>Los Angeles, California</p>
                    </div>


                    {/* Dashboard routes start here  */}
                    <div>

                        <button className='flex items-center hover:bg-blue-100 w-full p-3 pl-8 text-blue-600'>
                            <img src={note} className='w-5 mr-3' alt="" /> Dashboard
                        </button>
                        <button className='flex items-center hover:bg-blue-100 w-full p-3 pl-8 text-blue-600'>
                            <img src={note} className='w-5 mr-3' alt="" /> Locations
                        </button>
                        <button className='flex items-center hover:bg-blue-100 w-full p-3 pl-8 text-blue-600'>
                            <img src={note} className='w-5 mr-3' alt="" /> POS Invoices
                        </button>
                        <button onClick={openModal} className='flex items-center hover:bg-blue-100 w-full p-3 pl-8 text-blue-600'>
                            <img src={note} className='w-5 mr-3' alt="" /> Settings
                        </button>

                    </div>
                </div>
            </Drawer>




            {/* Modal  here */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
                    <div className="bg-white p-6 w-72 md:w-80 lg:w-96 rounded-lg z-10">
                        <div className="flex  items-center mb-6">
                            <button onClick={closeModal}> <img className='w-7' src={arrow} alt="" /> </button>
                            <h2 className="text-lg  lg:text-xl mx-auto font-bold">Settings</h2>
                        </div>
                        {/* form here  */}
                        <form className=''>
                            <div className='grid grid-cols-2 '>
                                <button className='bg-blue-300 p-3 rounded   mr-1'>Tax On </button>
                                <button className='bg-blue-300 p-3 rounded   ml-1'>Tax Type</button>
                            </div>
                            <div className="mt-4 mx-3 ">
                                <input
                                    type="radio"
                                    id="afterDiscount"
                                    name="taxType"
                                />
                                <label className="ml-2" htmlFor="afterDiscount">After Discount</label>
                            </div>
                            <div className='mx-3'>
                                <input
                                    type="radio"
                                    id="beforeDiscount"
                                    name="taxType"
                                    value="beforeDiscount"
                                />
                                <label className="ml-2" htmlFor="beforeDiscount">Before Discount</label>
                            </div>
                            <div>
                                <button type="submit" className="bg-blue-500 w-full mt-3 text-white px-4 py-2 rounded">Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;