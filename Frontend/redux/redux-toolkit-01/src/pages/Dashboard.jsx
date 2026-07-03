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
import UserCard from "../component/UserCard.jsx";




export default function Users() {


  const {users} = useSelector((state) => state.user)

  // console.log("users -->", users);
  
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
         <UserCard user={user} key={user._id}/>
        ))}
      </div>
    </div>
  );
}
