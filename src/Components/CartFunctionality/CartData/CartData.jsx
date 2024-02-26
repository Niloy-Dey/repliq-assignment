import React, { useState } from 'react';
import note from '../../../assets/images/edit.png';
import deleteButton from '../../../assets/images/delete.png'
import plus from '../../../assets/images/plus.png'
import minus from '../../../assets/images/minus.png'
const CartData = ({ cartItems, setCartItems }) => {




    // products increment function
    const incrementQuantity = (id) => {
        const updatedProducts = cartItems.map(product => {
            const newQuantity = parseFloat(product.quantity)
            if (product.Id === id) {
                return { ...product, quantity: newQuantity + 1 };
            }
            return product;
        });
        setCartItems(updatedProducts);
    };

    // products decrement function
    const decrementQuantity = (id) => {
        const updatedProducts = cartItems.map(product => {
            const newQuantity = parseFloat(product.quantity)
            if (product.Id === id && newQuantity > 1) {
                return { ...product, quantity: newQuantity - 1 };
            }
            return product;
        });
        setCartItems(updatedProducts);
    };


    // products delete function
    const deleteProduct = (id) => {
        const updatedProducts = cartItems.filter(product => product.Id !== id);
        setCartItems(updatedProducts);
    };



    //  Some dummy data for calculation
    const taxRate = 0.1; // 10% tax rate
    const shippingCost = 5; // 5 shipping cost
    const discountPercentage = 0.05; // 5% discount


    // Calculating total price function
    const getTotalPrice = () => {
        return cartItems.reduce((total, product) => {
            return total + (product.price * product.quantity);
        }, 0);
    };

    // Calculating tax function
    const getTax = () => {
        return getTotalPrice() * taxRate;
    };

    // Calculating shipping function
    const getShipping = () => {
        return shippingCost;
    };

    // Calculating  discount function
    const getDiscount = () => {
        return getTotalPrice() * discountPercentage;
    };

    // Calculating subtotal  function
    const getSubtotal = () => {
        return getTotalPrice() + getTax() + getShipping() - getDiscount();
    };


    // Calculating product count function
    const getProductCount = () => {
        return cartItems.reduce((total, product) => total + product.quantity, 0);
    };

    // console.log(cartItems)
    return (
        <div className="">
            {/* Cart Products table start here */}
            <table className="min-w-full">
                <tbody className='text-gray-500'>
                    {cartItems.map(product => (

                        <tr key={product.Id}>
                            <td className=" py-2  ">
                                <button><img className='w-4' src={note} alt="" />  </button>
                            </td>

                            <td className="px-4 py-2 border-l-2 border-t-2 border-b-2  ">{product.name}</td>
                            <td className="px-4 py-2 border-t-2 border-b-2  "> $ {product.price}</td>
                            <td className="px-4 py-2 border-t-2 border-b-2  ">
                                <button className='' onClick={() => decrementQuantity(product.Id)}> <img src={minus} alt="" /> </button>
                                <span className="px-2">{product.quantity}</span>
                                <button className='' onClick={() => incrementQuantity(product.Id)}> <img src={plus} alt="" /> </button>
                            </td>
                            <td className="  py-2  border-t-2 border-b-2 border-r-2 "> $ {product.price * product.quantity}</td>
                            <td className="  py-2 text-right ">
                                <button onClick={() => deleteProduct(product.Id)}> <img className=' w-5 md:w-6 lg:w-6 ' src={deleteButton} alt="" /> </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {/* Cart Products table end here */}




            {/* calculating total cart data table start here */}
            <div className="mt-4 flex justify-end">
                <table className="w-48">
                    <tbody>
                        <tr className='border-t-2'>
                            <td className="text-gray-500  py-2">Subtotal</td>
                            <td className="text-right text-black font-bold  py-2">${getSubtotal().toFixed(2)}</td>
                        </tr>
                        <tr className='border-t-2'>
                            <td className="text-gray-500  py-2">TAX</td>
                            <td className="text-right text-black font-bold  py-2">${getTax().toFixed(2)}</td>
                        </tr>
                        <tr className='border-t-2'>
                            <td className="text-gray-500  py-2">Shipping</td>
                            <td className="text-right text-black font-bold  py-2">${getShipping().toFixed(2)}</td>
                        </tr>
                        <tr className='border-t-2'>
                            <td className="text-blue-500 font-bold  py-2">Discount On Cart</td>
                            <td className="text-right text-black font-bold  py-2">${getDiscount().toFixed(2)}</td>
                        </tr>
                    </tbody>
                </table>
            </div>




            {/* showing the total price and total products start here */}
            <div className='rounded flex text-blue-500 justify-between items-center bg-blue-100  my-2 px-3 py-1'>
                <p>Products Count  ({getProductCount()})  </p>
                <table className="">
                    <tbody>
                        <tr className='text-2xl'>
                            <td className="text-blue-500 font-bold pl-3 py-2">Total </td>
                            <td className="text-right text-blue-500 font-bold  py-2">${getDiscount().toFixed(2)}</td>
                        </tr>
                    </tbody>
                </table>
            </div>



        </div>
    );
};

export default CartData;