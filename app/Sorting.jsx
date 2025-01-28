"use client";
import React, { useEffect, useState } from "react";

const Sorting = () => {
  const [products, setProducts] = useState([
    { name: "phone", price: 30000 },
    { name: "car", price: 4000000 },
    { name: "laptop", price: 90000 },
    { name: "books", price: 1000 },
  ]);
  const [sortedProducts, setSortedProducts] = useState(products);

  useEffect(() => {
    const sortedData = [...products].sort((a, b) => a.price - b.price);
    setSortedProducts(sortedData);
    console.log(sortedData);
  }, [products]);

  return (
    <div className=" text-white p-4 w-full ">
      <ul className="bg-gray-600 border rounded-lg p-5 flex flex-col  gap-5">
        <h1 className="text-4xl text-center">Question 1</h1>
        <h1 className="text-center text-2xl text-black capitalize">sorting</h1>
        {sortedProducts.map((item, index) => {
          return (
            <div key={index}>
              <li className=" p-2 shadow-lg border-gray-900 rounded-md">
                <span className="text-black">{index}:</span>
                <h1>{item.name}</h1>
                <p>Price: {item.price}</p>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Sorting;
