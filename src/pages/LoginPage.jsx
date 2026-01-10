import React, { useState } from "react";

const LoginPage = () => {
  const init = {
    email: "",
    password: "",
  };
  const [formData, setFormData] = useState(init);

  const handleChange = (e) => {
      setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

    };
  return (
    <div className="h-screen grid place-items-center">
      <form className="flex flex-col gap-4 shadow-2xl w-100 p-6">
        <h1 className="text-4xl text-center font-bold">Login</h1>
        <input
          onChange={handleChange}
          className="p-2 w-full border-2 rounded-md"
          type="text"
          placeholder="enter email"
          name="email"
          required
        />
        <input
          onChange={handleChange}
          className="p-2 w-full border-2 rounded-md"
          type="password"
          placeholder="enter password"
          name="password"
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
