import React from 'react'
import { CheckCircle, XCircle, Mail, User, Cake } from "lucide-react";
import { Link } from 'react-router-dom';
const UserCard = ({user}) => {
  return (
   <div
            key={user._id}
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
                <Link to={`/profile/${user._id}`}>
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
  )
}

export default UserCard
