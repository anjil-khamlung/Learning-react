import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const EditProduct = () => {
  const { id } = useParams(); // get id from URL
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    image: "",
  });

  // Load product data
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        setFormData(res.data);
      })
      .catch(() => {
        toast.error("Failed to load product");
      });
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  //  Update product
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await axios.put(`https://fakestoreapi.com/products/${id}`, formData);
        toast.success("Product updated successfully");
        console.log(formData)
    } catch (err) {
      toast.error("Failed to update product");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-screen grid place-items-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 shadow-2xl w-[400px] p-6"
      >
        <h1 className="text-3xl text-center font-bold">Edit Product</h1>

        <input
          className="p-2 border-2 rounded-md"
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Title"
          required
        />

        <textarea
          className="p-2 border-2 rounded-md"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          required
        />

        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="p-2 border-2 rounded-lg"
          required
        >
          <option value="">Select category</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="jewelery">Jewelery</option>
          <option value="electronics">Electronics</option>
          <option value="women's clothing">Women's Clothing</option>
        </select>

        <input
          className="p-2 border-2 rounded-md"
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          placeholder="Price"
          required
        />

        <input
          className="p-2 border-2 rounded-md"
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="Image URL"
          required
        />

        <button
          className="bg-blue-500 p-2 rounded-md text-white cursor-pointer font-bold"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? "Updating..." : "Update Product"}
        </button>
      </form>
    </div>
  );
};

export default EditProduct;
