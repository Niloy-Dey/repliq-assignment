import React from 'react';
// import component 👇
import Drawer from 'react-modern-drawer'
import menu from '../../../assets/images/menu.png'
import note from '../../../assets/images/edit.png'
import shopping from '../../../assets/images/truck.png'

//import styles 👇
import 'react-modern-drawer/dist/index.css'


const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }

    // Dashboard data array
    const DashboardData = ['Dashboard', 'Locations', 'POS Invoices', 'Settings']


    return (
        <>
            <div className=' flex mt-10 '>
                <button onClick={toggleDrawer}>
                    <img className='h-10 w-10' src={menu} alt="" />
                </button>
                <div className='grid grid-cols-4 '>
                    <button className=' flex justify-center items-center bg-blue-100   mr-4 ml-4   text-blue-600 '>
                        <img src={note} className='w-5 mr-3' alt="" />Home
                    </button>
                    <button className='flex justify-center items-center bg-blue-100   mr-4 p-3 text-blue-600 '>
                        <img src={shopping} className='w-5 mr-3' alt="" />about
                    </button>
                    <button className='flex justify-center items-center bg-blue-100   mr-4 p-3 text-blue-600 '>
                        <img src={shopping} className='w-5 mr-3' alt="" />Hold orders
                    </button>
                    <button className='flex justify-center items-center bg-blue-100  p-3 text-blue-600 '>
                        <img src={shopping} className='w-5 mr-3' alt="" />New Items
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
                        {
                            DashboardData.map(data => (
                                <button key={data.id} className='flex items-center hover:bg-blue-100 w-full p-3 pl-8 text-blue-600'>
                                    <img src={note} className='w-5 mr-3' alt="" />{data}
                                </button>
                            ))
                        }
                    </div>
                </div>
            </Drawer>
        </>
    );
};

export default Navbar;