import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const LoginPage = () => {
  const navigate = useNavigate()
  const init = {
    email: "",
    password: "",
  };
  const [formData, setFormData] = useState(init);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.email.trim() === "") {
      alert("email must be filled")
      return
    }

    if (formData.password.length < 7) {
      alert("password should contain at least 8 character")
      return
    }

    
    console.log(formData); //api call
    toast.success("you have been loged in")
    setFormData(init);
    navigate("/")
  };

  return (
    <div className="h-screen grid place-items-center ">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 shadow-2xl w-100 p-6 rounded-2xl"
      >
        <h1 className="text-4xl text-center font-bold">Login</h1>
        <input
          onChange={handleChange}
          className="p-2 w-full border-2 rounded-md"
          type="email"
          placeholder="enter email"
          name="email"
          value={formData.email}
          required
        />
        <input
          onChange={handleChange}
          className="p-2 w-full border-2 rounded-md"
          type="password"
          placeholder="enter password"
          name="password"
          value={formData.password}
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
