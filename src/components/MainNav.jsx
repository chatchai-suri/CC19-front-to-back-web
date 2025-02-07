// rfce
import React from 'react'
import { Link } from 'react-router'

function MainNav() {
  return (
    <nav className='bg-green-950 text-white flex justify-between font-semibold px-8 py-2'>
      <div className='flex gap-4'>
      <Link to>Home</Link>
      <Link to>About</Link>
      </div>
      <div className='flex gap-4'>
      <Link to = '/register'>Register</Link>
      <Link to>Login</Link>
      </div>
    </nav>
  )
}

export default MainNav