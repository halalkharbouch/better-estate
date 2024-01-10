import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className='flex justify-between items-center mx-[10%] p-3'>
        <Link to={"/"}>
            <h1>
                <span>Better</span>
                <span className='text-[#696970]'>Estate</span>
            </h1>
        </Link>
        <ul className='flex justify-evenly gap-10'>
            <Link to={'/'}>
                <li>Home</li>
            </Link>
            <Link to={'/about'}>
                <li>About</li>
            </Link>
            <Link to={'/contact'}>
                <li>Contact</li>
            </Link>
        </ul>

        <Link to={'/login'}>
            <button className='bg-[#696970] px-4 py-2 rounded-lg hover:opacity-90'>Login</button>
        </Link>
    </header>
  )
}
