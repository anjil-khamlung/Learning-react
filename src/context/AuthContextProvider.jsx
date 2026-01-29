import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AuthContext = createContext(null);

const AuthContextProvider = ({ children }) => {
  const user = {
    username: "Johnd",
    password: "12345678",
  };

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("userData")) || null,
  );

  const login = async (data) => {
    try {
      const res = await axios.post("https://fakestoreapi.com/auth/login", data);
      setCurrentUser(user);
      localStorage.setItem("userToken", res.data.token);
      return res;
    } catch (err) {
      console.log(err);

      throw err
    }
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem("userData");
    localStorage.removeItem("userToken");
  };

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem("userData", JSON.stringify(currentUser));
    }
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
