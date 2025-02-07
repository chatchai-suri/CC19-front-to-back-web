//rfce
import React, { useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import { createAlert } from '../../utils/createAlert'


function Register() {
  //Javascrip
  const [value, setValue] = useState({
    email: "",
    firstname: "",
    lastname: "",
    password: "",
    confirmPassword: "",
  })



  const hdlChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value
    })
    
  }

  const hdlSubmit = async (e) => {
    e.preventDefault()
    console.log("value", value)
    try {
      const res = await axios.post("http://localhost:8888/api/register", value)
      console.log(res)
    } catch (error) {
      createAlert("info", error.response.data.message)
      console.log(error)
    }
  }

  return (
    <div className='flex w-full h-full justify-end'>
      <div className='w-64 border p-4 rounded-b-md'>
        <h1 className='text-xl font-bold text-center'>
          Register
        </h1>

        {/* Form */}
        <form onSubmit={hdlSubmit}> 
          <div>
            <input 
            placeholder='email'
            type='text'
            name='email'
            className='border w-full border-gray-400 rounded-b-md'
            onChange = {hdlChange}
            />
            
            <input 
            placeholder='firstname'
            type='text'
            name='firstname'
            className='border w-full border-gray-400 rounded-b-md'
            onChange = {hdlChange}
            />

            <input 
            placeholder='lastname'
            type='text'
            name='lastname'
            className='border w-full border-gray-400 rounded-b-md'
            onChange = {hdlChange}
            />

            <input 
            placeholder='password'
            type='text'
            name='password'
            className='border w-full border-gray-400 rounded-b-md'
            onChange = {hdlChange}
            />

            <input 
            placeholder='confirmPassword'
            type='text'
            name='confirmPassword'
            className='border w-full border-gray-400 rounded-b-md'
            onChange = {hdlChange}
            />

            <button
            className='border bg-green-900 text-white rounded-b-md'
            type = "submit"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register