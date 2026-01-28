import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center px-4 sm:px-10 py-4 bg-gray-700'>
        <div>
            <Link to='/' className='text-xl font-bold'>MediaSearch</Link>
        </div>
        <div className='flex gap-4 items-center font-medium'>
            <Link to='/' className='bg-amber-500 px-2 sm:px-3 py-1 rounded-md text-sm'>Search</Link>
            <Link to='/collection' className='bg-amber-500 px-2 sm:px-3 py-1 rounded-md text-sm text-nowrap'>My Collection</Link>
        </div>
    </div>
  )
}

export default Navbar