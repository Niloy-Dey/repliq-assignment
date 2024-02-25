import React from 'react';
import note from '../../../assets/images/edit.png';
import cancel from '../../../assets/images/cancel.png'
const Payment = ({handleCancelPage}) => {
    const handleSubmit = (event) => {
        event.preventDefault();
    };

    const handleCancel = () => {
        handleCancelPage()
        
    };

    return (
        <div className='bg-gray-100 h-full w-full md:w-2/4  lg:w-2/4  mx-3 px-3 py-3 '>
            {/* header section */}
            <section className='flex bg-white border-2 w-full mt-4 justify-between py-3 px-3'>
                <p>Order Amount</p>
                <p className='text-xl font-bold text-black'>$ 5005.50</p>
            </section>


            {/* left section */}
            <section className='flex  bg-white h-full  mt-6  border-2 '>
                <div className='border-r-2 w-60 lg:w-72 py-3'>
                    <button className='flex text-xs md:text-lg lg:text-base lg:px-6 items-center hover:bg-blue-100 w-full p-1 lg:p-3 pl-2 lg:pl-8 text-blue-600'>
                        <img src={note} className='w-4 mr-3' alt="" />cash
                    </button>
                    <button className='flex text-xs md:text-lg lg:text-base lg:px-6 items-center bg-blue-100 font-bold hover:bg-blue-100 w-full p-1 lg:p-3 pl-2 lg:pl-8 text-blue-600'>
                        <img src={note} className='w-4 mr-3' alt="" />CartData
                    </button>
                    <button className='flex text-xs md:text-lg lg:text-base lg:px-6 items-center hover:bg-blue-100 w-full p-1 lg:p-3 pl-2 lg:pl-8 text-blue-600'>
                        <img src={note} className='w-4 mr-3' alt="" />On Account
                    </button>
                    <button className='flex text-xs md:text-lg lg:text-base lg:px-6 items-center hover:bg-blue-100 w-full p-1 lg:p-3 pl-2 lg:pl-8 text-blue-600'>
                        <img src={note} className='w-4 mr-3' alt="" />Cheque
                    </button>
                </div>



                {/* right section  */}
                <div className="h-full flex flex-col  mt-10  items-center w-52 lg:w-full">
                    <form onSubmit={handleSubmit} className="w-full max-w-md">
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3">
                                <input className="appearance-none block w-full outline-none border-b-2  text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-card-name" type="text" placeholder="Card Name" />
                            </div>
                            <div className="w-full px-3">
                                <input className="appearance-none block w-full outline-none border-b-2  text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-card-number" type="text" placeholder="Card Number" />
                            </div>
                            <div className="w-full px-3">
                                <input className="appearance-none block w-full outline-none border-b-2  text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-expiration" type="text" placeholder="Card Expire Date" />
                            </div>
                            <div className="w-full px-3">
                                <input className="appearance-none block w-full outline-none border-b-2  text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-security-code" type="text" placeholder="Card Secret" />
                            </div>
                        </div>


                        <div className="flex mt-28 justify-evenly lg:justify-between mb-6 ">
                            <button onClick={handleCancel} className='flex px-3 w-16 text-xs lg:text-xl  lg:w-32 py-3 justify-around items-center  bg-red-200 text-red-400  font-bold rounded-sm'><img className='w-4 md:w-5 lg:w-6 ' src={cancel} alt="" />  Cancel</button>
                            <button type="submit" className="bg-blue-500 w-16 text-xs  lg:w-72 hover:bg-blue-600 text-white font-bold py-2 lg:px-4 rounded focus:outline-none focus:shadow-outline">Complete Payment</button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Payment;
