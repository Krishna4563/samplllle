import React from 'react'
import {headerLogo} from "../assets/images";
import { hamburger } from "../assets/icons";

const Nav = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full border-red-600 border-2'>
        <nav className='flex justify-between items-center max-container'>
            <a href='/'>
                <img 
                    src={headerLogo} alt='Logo' 
                    className='m-0 w-[129px] h-[29px] '  />

            </a>
            <div className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
                <a className='font-montserrat leading-normal text-lg text-slate-gray' href='#home'>About Us</a>
                <a className='font-montserrat leading-normal text-lg text-slate-gray' href='#About Us'>Home</a>
                <a className='font-montserrat leading-normal text-lg text-slate-gray' href='#Products'>Products</a>
                <a className='font-montserrat leading-normal text-lg text-slate-gray' href='#Contact Us'>Contact Us</a>
            </div>
            <div className='flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24'>
                <a href="/">Sign In</a>
                <span>/</span>
                <a href="/">Explore Now</a>
            </div>
            <div className='hidden max-lg:block'>
                <img src={hamburger} alt='hamburger icon' width={25} height={25} />
            </div>
        </nav>
    </header>
  )
}

export default Nav;
