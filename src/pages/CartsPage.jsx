import axios from "axios";
import React, { useEffect, useState } from "react";

const CartsPage = () => {
  const [carts, setCarts] = useState([]);
useEffect(() => {
  axios
    .get("https://fakestoreapi.com/carts")
    .then((res) => {
      setCarts(res.data);
      console.log(res.data); 
    })
    .catch((err) => console.log(err));
}, []);
    
    return (
      <div className="flex flex-col gap-3 items-center">
        <h1 className="font-bold text-2xl underline">All Carts </h1>
        {carts.map((cart) => (
          <div key={cart.id}>
            <h3>Cart #{cart.id}</h3>

            {cart.products.map((item) => (
              <p key={item.productId}>
                Product ID: {item.productId} | Qty: {item.quantity}
              </p>
            ))}
          </div>
        ))}
      </div>
    );
};

export default CartsPage;
