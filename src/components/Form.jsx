import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const init = {
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

  const handleSubmit = (e) => {
    e.preventDefault();

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
    }if (formData.price.trim() === "") {
      alert("price must be filled");
      return;
    }if (formData.image.trim() === "") {
      alert("image must be filled");
      return;
    }

  

    console.log(formData); //api call
    setFormData(init);
    navigate("/");
  };

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
          type="text"
          placeholder="enter title"
          name="title"
          value={formData.title}
          required
        />
        <input
          onChange={handleChange}
          className="p-2 w-full border-2 rounded-md"
          type="description"
          placeholder="enter description"
          name="description"
          value={formData.description}
          required
        />
        <input
          onChange={handleChange}
          className="p-2 w-full border-2 rounded-md"
          type="category"
          placeholder="enter category"
          name="category"
          value={formData.category}
          required
        />
        <input
          onChange={handleChange}
          className="p-2 w-full border-2 rounded-md"
          type="price"
          placeholder="enter price"
          name="price"
          value={formData.price}
          required
        />
        <input
          onChange={handleChange}
          className="p-2 w-full border-2 rounded-md"
          type="image"
          placeholder="enter url"
          name="image"
          value={formData.image}
          required
        />
        <input
          className="bg-blue-500 p-2 rounded-md font-bold text-white cursor-pointer"
          type="submit"
          value="submit"
        />
      </form>
    </div>
  );
};

export default LoginPage;
