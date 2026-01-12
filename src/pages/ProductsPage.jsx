import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ProductsPage = () => {
    const [data, setData] = useState([]);
    const navigate=useNavigate()

  const fetchData = async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    setData(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-2 p-6">
      {data.map((product) => (
        <div
          key={product.id}
          className="border rounded-lg p-4 shadow hover:shadow-lg transition"
        >
          {/* Image */}
          <img
            src={product.image}
            alt={product.title}
            className="h-48 w-full object-contain mb-4"
          />

          {/* Details */}
          <h1 className="font-bold text-lg line-clamp-1">{product.title}</h1>

          <p className="text-sm text-gray-600 line-clamp-2">
            {product.description}
          </p>

          <p className="text-blue-600 mt-2">{product.category}</p>

          <p className="font-bold text-lg mt-2">${product.price}</p>

              <button onClick={() => {
                  navigate(`/product/${product.id}`)
          }} className="mt-4 w-full bg-black text-white py-2 rounded hover:bg-gray-800">
            More
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductsPage;
