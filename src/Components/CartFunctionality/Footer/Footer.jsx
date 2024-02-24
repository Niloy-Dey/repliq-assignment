import React from 'react';
import cancel from '../../../assets/images/cancel.png'
import hold from '../../../assets/images/open-hands.png'
import discount from '../../../assets/images/discount.png'
import pay from '../../../assets/images/earnings.png'
const Footer = () => {
    return (
        <div>
             <div className=' grid grid-cols-4 gap-2    my-2 '>
                <button className='flex px-3 py-3 justify-around items-center  bg-red-200 text-red-400 text-xl font-bold rounded-sm'><img src={cancel} alt="" />Cancel</button>
                <button className=' flex px-3 py-3 justify-around items-center  bg-[#EEF0F9]   text-[#5C6AC4]  text-xl  font-bold rounded-sm'><img src={hold} alt="" /> Hold</button>
                <button className=' flex px-3 py-3 justify-around items-center  bg-[#EEF0F9]   text-[#5C6AC4] text-xl font-bold rounded-sm'><img src={discount} alt="" /> Discount</button>
                <button className='flex px-3 py-3 justify-around items-center  bg-blue-100 text-blue-500 text-xl  font-bold rounded-sm'> <img src={pay} alt="" />Pay Now</button>
            </div>
        </div>
    );
};

export default Footer;