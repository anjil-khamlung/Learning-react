import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"
import {toast} from "react-toastify"

const AddProduct = () => {
  const [isLoading,setIsLoading]=useState(null)
  const init = {
    id:"",
    title: "",
    description:"",
    price: "",
    category: "",
    image:""
  };
  const [formData, setFormData] = useState(init);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    setIsLoading(true)
    if (formData.id.trim() === "") {
      alert("id must be filled");
      return;
    }

    if (formData.title.trim() === "") {
      alert("title must be filled");
      return;
    }
    if (formData.description.trim() === "") {
      alert("description must be filled");
      return;
    }
    if (formData.category.trim() === "") {
      alert("title must be filled");
      return;
    } if (formData.price.trim() === "") {
      alert("price must be filled");
      return;
    } if (formData.image.trim() === "") {
      alert("image must be filled");
      return;
    }

await axios
      .post("https://fakestoreapi.com/products", formData)
      .then((res) => {
        console.log(res);
        toast.success("Product add successfully.");
        setFormData(init);
        setIsLoading(false);
      })
      .catch((er) => {
        console.log(er);
        toast.error("Error while adding product.");
      });

  }
  

  return (
    <div className="h-screen grid place-items-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 shadow-2xl w-100 p-6"
      >
        <h1 className="text-4xl text-center font-bold">Add Product</h1>
        <input
          onChange={handleChange}
          className="p-2 w-full border-2 rounded-md"
          type="number"
          placeholder="enter id"
          name="id"
          value={formData.id}
          required
        />
        <input
          onChange={handleChange}
          className="p-2 w-full border-2 rounded-md"
          type="text"
          placeholder="enter title"
          name="title"
          value={formData.title}
          required
        />
        <textarea
          onChange={handleChange}
          className="p-2 w-full border-2 rounded-md"
          type="description"
          placeholder="enter description"
          name="description"
          value={formData.description}
          required
        ></textarea>
        <select
          onChange={handleChange}
          value={formData.category}
          name="category"
          className="p-2 border-2 rounded-lg"
        >
          <option value="">--Select Category</option>
          <option value="cloth">men's clothing</option>
          <option value="electronic">jewelery</option>
          <option value="furniture">electronics</option>
        </select>
        <input
          onChange={handleChange}
          className="p-2 w-full border-2 rounded-md"
          type="number"
          placeholder="enter price"
          name="price"
          value={formData.price}
          required
        />
        <input
          onChange={handleChange}
          className="p-2 w-full border-2 rounded-md"
          type="text"
          placeholder="enter image url"
          name="image"
          value={formData.image}
          required
        />
        <input
          className="bg-blue-500 p-2 rounded-md font-bold text-white cursor-pointer"
          type="submit"
          value={isLoading?"Loading...":"submit"}
        />
      </form>
    </div>
  );
};

export default AddProduct;
