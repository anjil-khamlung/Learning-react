import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const SingleProductPage = () => {
  const { id } = useParams(); // get product id from URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => setProduct(res.data));
  }, [id]);

  if (!product) {
    return <div className="text-center text-xl">Loading...</div>;
  }

  return (
    <div className="min-h-screen flex justify-center items-center p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl border p-6 shadow-lg rounded">
        {/* Image */}
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-96 object-contain"
        />

        {/* Details */}
        <div>
          <h1 className="text-2xl font-bold">{product.title}</h1>
          <p className="text-gray-600 mt-4">{product.description}</p>

          <p className="mt-4 text-blue-600">{product.category}</p>

          <p className="text-3xl font-bold mt-4">${product.price}</p>

          {/* Rating */}
          <div className="mt-4 flex items-center gap-2">
            <span className="text-yellow-500 text-lg">
              {"★".repeat(Math.round(product.rating.rate))}
              {"☆".repeat(5 - Math.round(product.rating.rate))}
            </span>

            <span className="text-gray-600">
              {product.rating.rate} / 5 ({product.rating.count} reviews)
            </span>
          </div>

          <button className="mt-6 bg-black text-white px-6 py-2 rounded">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
