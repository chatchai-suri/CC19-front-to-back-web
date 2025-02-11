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
import { registerSchema } from '../../../utils/validators'
import { zodResolver } from '@hookform/resolvers/zod'
import { actionRegister } from '../../../api/auth'


function Register1() {
  //Javascrip
  const {register, handleSubmit, formState, reset} = useForm({
    resolver:zodResolver(registerSchema)
  })
  const {isSubmitting, errors} = formState

  console.log("*", errors)
  

  const hdlSubmit = async (value) => {
    // delay
    await new Promise((resolve)=> setTimeout(resolve, 1000))
    console.log("value", value)
    try {
      const res = await actionRegister(value)
      console.log(res)
      reset()
      createAlert("success", "Register Success")
    } catch (error) {
      createAlert("info", error?.response?.data?.message)
      console.log(error)
    }
  }

  return (
    <div className='flex w-full h-full justify-end gap-2 p-2'>
      <div className='w-64 border p-4 rounded-b-md'>
        <h1 className='text-xl font-bold text-center'>
          Register1
        </h1>

        {/* Form */}
        <form onSubmit={ handleSubmit(hdlSubmit) }> 
          <div className='flex flex-col gap-4 py-4'>
            <FormInput register={register} name="email" errors={errors} />
            <FormInput register={register} name="firstname" errors={errors} />
            <FormInput register={register} name="lastname" errors={errors} />
            <FormInput register={register} name="password" errors={errors} type="password" />
            <FormInput register={register} name="confirmPassword" errors={errors} type="password" />
          </div>
          <div>
            <Buttons isSubmitting={isSubmitting} label="CC19-Push_Me"/>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register1