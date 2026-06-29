import { useState } from "react";
import axios from "axios";
import {useDispatch} from 'react-redux'
import { signupFailure, signupStart, signupSuccess } from "../redux/features/authSlice";

const Signup = () => {
  const [formData, setFormData] = useState({
    age: "",
    email: "",
    userName: "",
    password: "",
  });

  const dispatch = useDispatch()

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();


    try {

      dispatch(signupStart())
      // ===============================
      // Signup API Calling Area
      // ===============================

      const response = await axios.post(
        "https://auth-be-five.vercel.app/api/auth/signup",
        formData
      );

      console.log(response.data);

      if(response.data.status){
        // console.log("janiii");
        dispatch(signupSuccess(response.data))
        
      }

      // Success Logic Here

    } catch (error) {
      console.log(error.response?.data.message);
      dispatch(signupFailure(error.response?.data.message))
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-xl p-8 w-[350px]"
      >

        <h2 className="text-2xl font-bold text-center mb-6">
          Signup
        </h2>

        <div className="mb-3">
          <input
            type="number"
            placeholder="Enter Age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-3">
          <input
            type="text"
            placeholder="Enter Username"
            name="userName"
            value={formData.userName}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-3">
          <input
            type="email"
            placeholder="Enter Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-5">
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 outline-none focus:border-blue-500"
          />
        </div>

        <button
          className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
        >
          Signup
        </button>

      </form>

    </div>
  );
};

export default Signup;