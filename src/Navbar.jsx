import React from 'react'

const listitems = [
  { name: 'Home', link: '#home' },
  { name: 'Grid', link: 'https://prakhar0703.github.io/etch-a-sketch/' },
  { name: 'BS', link: 'https://pramit-sr.github.io/Binary-Search/' },
  { name: 'About Us', link: '#about' },
  { name: 'Contact Us', link: '#contact' }
];

const Navbar = () => {
  return (
    <div className='fixed bg-black flex justify-between items-center gap-14 py-3 px-13 max-w-[90%] left-1/2
    translate-x-[-50%] top-[20px] rounded-full backdrop-blur-md bg-opacity-60 text-white shadow-lg z-10'>
    
        <ul className='flex gap-8 text-xl'>
            { listitems.map((item) => (
                <li className='relative group cursor-pointer' key={item.name}>
                    <a href={item.link} className='hover:bg-white hover:text-black px-4 py-2
                     rounded-full transition duration-300'>
                      {item.name}
                    </a>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Navbar
