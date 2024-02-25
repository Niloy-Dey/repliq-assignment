import React, { useState, useEffect } from 'react';

const Products = () => {
    const [productsData, setProductsData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/products.json');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                const allProducts = Object.values(data).flat();
                setProductsData(allProducts);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="bg-gray-50 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4">
            {productsData && productsData.map(product => (
                <div key={product.name} className="bg-white rounded-lg   border ">
                    <img src={product.image} alt={product.name} className="object-fill w-full h-40 mb-4" />
                    <p className="text-gray-600 text-center  mb-2">${product.price}</p>
                    <h3 className="text-lg border-t-2 text-gray-500  text-center font-semibold mb-2">{product.name}</h3>
                </div>
            ))}
        </div>
    );
};

export default Products;
