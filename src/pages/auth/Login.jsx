//rfce
import React, { useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import { createAlert } from '../../utils/createAlert'
import { useForm } from 'react-hook-form'
import { useFormState } from 'react-dom'
import FormInput from '../../components/form/FormInput'
import Buttons from '../../components/form/Buttons'

// Validator
import { loginSchema, registerSchema } from '../../../utils/validators'
import { zodResolver } from '@hookform/resolvers/zod'
import { actionLogin, actionRegister } from '../../../api/auth'
import { useNavigate } from 'react-router'
import useAuthStore from '../../store/auth-store'


function Login() {
  //Javascrip
  // Zustand
  const actionLoginwithZustand = useAuthStore((state)=> state.actionLoginwithZustand)
  
  
  const {register, handleSubmit, formState, reset} = useForm({
    resolver:zodResolver(loginSchema)
  })
  const {isSubmitting, errors} = formState

  console.log("*", errors)

  const navigate = useNavigate()
  

  const hdlSubmit = async (value) => {
    // delay
    await new Promise((resolve)=> setTimeout(resolve, 1000))
    // console.log("value", value)

      const res = await actionLoginwithZustand(value)
      console.log("res = ",res)

      if(res.success) {
        roleRedirect(res.role)
        reset()
        createAlert("success", "Welcome back")
      }else{
        createAlert("info", "somthing wrong")
      }

      // const res = await actionLogin(value)
      // console.log("res.data",res.data)
      // const role = res.data.payload.role
      // console.log(role)
      // reset()

      // roleRedirect(role)
     
      // createAlert("success", "Login Success")
 
  }

  const roleRedirect = ( role ) => {
    if(role == 'ADMIN') {
      navigate('/admin')
    }else{
      navigate('/user')
    }
  }

  return (
    <div className='flex w-full h-full justify-end gap-2 p-2'>
      <div className='w-64 border p-4 rounded-b-md'>
        <h1 className='text-xl font-bold text-center'>
          Login
        </h1>

        {/* Form */}
        <form onSubmit={ handleSubmit(hdlSubmit) }> 
          <div className='flex flex-col gap-4 py-4'>
            <FormInput register={register} name="email" errors={errors} />
            <FormInput register={register} name="password" errors={errors} type="password" />
          </div>
          <div className='flex justify-center p-2 rounded-2xl'>
            <Buttons isSubmitting={isSubmitting} label="Login"/>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login