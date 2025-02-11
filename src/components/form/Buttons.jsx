//rfce
import React from 'react'
import { Loader } from 'lucide-react';

function Buttons({isSubmitting, label}) {
  return (
    <button
    className='border bg-green-900 text-white rounded-b-md'
    
    >
      {
        isSubmitting
        ? <div className='flex gap-2'> 
          <Loader className='animate-spin'/> 
        <p>Loading</p>
        </div>
        : <p>{label}</p>
      }
    </button>
  )
}

export default Buttons