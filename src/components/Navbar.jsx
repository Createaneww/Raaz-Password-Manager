import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center py-8 h-14 container mx-auto'>


        <div className="text-purple-600 font-bold text-2xl mx-5">
          <span className='text-purple-500'>&lt;</span>
          Raaz
          <span className='text-purple-500'>/&gt;</span>
          </div>
        <ul>
            <li className='flex gap-4 mx-5 '>
                <a className='hover:font-bold text-purple-900' href="/">Home</a>
                <a className='hover:font-bold text-purple-900' href="#">About</a>
                <a className='hover:font-bold text-purple-900' href="#">Contact</a>
                <a className='hover:font-bold text-purple-900' href="#">More</a>
            </li>
        </ul>
        <button className='flex justify-center items-center mr-5 ring-purple-500 ring-1 rounded-xl p-1'>
          <img className="w-11 p-2" src="/icons/github.svg" alt="github" />
          <span className='font-bold text-purple-600 text-xl'>Github</span>
        </button>
    </nav>
  )
}

export default Navbar
