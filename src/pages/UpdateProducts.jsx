import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";

const UpdateProducts = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const fetchData = async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    setData(res.data);
  };

const handleDelete = (id) => {
  axios
    .delete(`https://fakestoreapi.com/products/${id}`)
    .then((res) => {
      console.log(res);
      toast.success(`Item ${id} deleted successfully`);
    })
    .catch((err) => {
      console.log(err);
      toast.error("Error while deleting item");
    });
  };
  
  const handleEdit = (id) => {
    navigate(`/editProduct/${id}`)
  }


  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="p-4 overflow-x-auto">
      <table className="w-full border border-gray-600">
        {/* Table Head */}
        <thead className="bg-gray-200">
          <tr>
            <th className="border p-2 text-left">ID</th>
            <th className="border p-2 text-left">Image</th>
            <th className="border p-2 text-left">Title</th>
            <th className="border p-2 text-left">Description</th>
            <th className="border p-2 text-left">Category</th>
            <th className="border p-2 text-left">Price</th>
            <th className="border p-2 text-center">Action</th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {data.map((product) => (
            <tr key={product.id} className="hover:bg-gray-100">
              <td className="border p-2">{product.id}</td>

              <td className="border p-2 ">
                <img
                  className="w-20 h-20  object-contain mx-auto"
                  src={product.image}
                  alt={product.title}
                />
              </td>

              <td className="border p-2 font-medium">{product.title}</td>

              <td className="border   p-2 text-sm text-black-200 ">
                {product.description}
              </td>

              <td className="border p-2  text-black-200">
                {product.category}
              </td>

              <td className="border p-2 font-bold">${product.price}</td>

              <td className="border  p-2 text-center">
                <div className="flex items-center justify-center h-full gap-2">
                  <button onClick={()=>handleEdit(product.id)} className="bg-gray-200 p-1 rounded cursor-pointer">
                    <FaEdit className="text-2xl"/>
                  </button>
                  <button onClick={()=>handleDelete(product.id)} className="bg-gray-200  p-1 rounded cursor-pointer">
                    <MdDelete className="text-2xl"/>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UpdateProducts;
