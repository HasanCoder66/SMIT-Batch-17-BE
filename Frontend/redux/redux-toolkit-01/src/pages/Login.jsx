import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { loginFailure, loginStart, loginSuccess } from "../redux/features/authSlice";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
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
      dispatch(loginStart())
      // ===============================
      // Login API Calling Area
      // ===============================

      const response = await axios.post(
        "https://auth-be-five.vercel.app/api/auth/login",
        formData
      );

      console.log(response.data);

      if(response.data.status){
        dispatch(loginSuccess(response.data))
      }
      // Success Logic Here

    } catch (error) {
      console.log(error.response?.data.message );
      dispatch(loginFailure(error.response.data.message))

    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-xl p-8 w-[350px]"
      >

        <h2 className="text-2xl font-bold text-center mb-6">
          Login
        </h2>

        <div className="mb-4">
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
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
        >
          Login
        </button>

      </form>

    </div>
  );
};

export default Login;