// import React from 'react'
// import { useSelector } from 'react-redux'

// const Dashboard = () => {
//     const {loading, error, message, token} = useSelector((state) => state.auth )

//     console.log("loading.. ", loading);
//     console.log("error.. ", error);

//   return (
//     <div>
//       dashboard
//     </div>
//   )
// }

// export default Dashboard
import axios from "axios";
import { CheckCircle, XCircle, Mail, User, Cake } from "lucide-react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsersStart, getUsersSuccess, getUsersFailure } from '../redux/features/userSlice.js'
import { Link } from "react-router-dom";




export default function Users() {


  const {users} = useSelector((state) => state.user)

  console.log("users -->", users);
  
// console.log("all users data --> from redux",users);

  const dispatch = useDispatch()

  const getUsers = async () => {
    dispatch(getUsersStart())

    try {
      const apiResponse = await axios.get(
        "https://auth-be-five.vercel.app/api/user",
      );
      console.log(apiResponse.data);

      if(apiResponse.data.status){
        dispatch(getUsersSuccess(apiResponse.data));
      }
    } catch (error) {
      console.log(error.message);
      dispatch(getUsersFailure(error.response.data.message))
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <h1 className="text-3xl font-bold mb-8 text-slate-800">
        Users Management
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {users.map((user, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            {/* Top Section */}
            <div className="bg-gradient-to-r from-indigo-600 to-blue-500 h-24 relative">
              <div className="absolute left-6 top-12">
                <div className="w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center text-3xl font-bold text-indigo-600">
                  {user.userName.charAt(0)}
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="pt-14 px-6 pb-6">
              <h2 className="text-xl font-semibold text-slate-800">
                {user.userName}
              </h2>

              <div className="mt-4 space-y-3">
                <div className="flex items-center gap-3 text-gray-600">
                  <Mail size={18} />
                  <span>{user.email}</span>
                </div>

                <div className="flex items-center gap-3 text-gray-600">
                  <Cake size={18} />
                  <span>{user.age} Years Old</span>
                </div>

                <div className="flex items-center gap-3">
                  {user.isVerified ? (
                    <>
                      <CheckCircle className="text-green-500" size={18} />
                      <span className="text-green-600 font-medium">
                        Verified
                      </span>
                    </>
                  ) : (
                    <>
                      <XCircle className="text-red-500" size={18} />
                      <span className="text-red-600 font-medium">
                        Not Verified
                      </span>
                    </>
                  )}
                </div>
              </div>

              {/* Buttons */}
              <div className="mt-6 flex gap-3">
                <Link to={`/profile/${user.userName}`}>
                <button className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg transition">
                  View
                </button>
                </Link>

                <button className="flex-1 border border-red-500 text-red-500 hover:bg-red-500 hover:text-white py-2 rounded-lg transition">
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
