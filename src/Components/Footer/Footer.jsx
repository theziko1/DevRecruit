import React from 'react'
import { IoIosMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";
//icons

const Footer = () => {
  return (
    
    <footer className="p-6 border-t-2 border-grey-100 mt-5 ">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="">
            <div className=''>
            <a className="flex items-center w-full mb-4">
                <img src="src\assets\logo.svg" className="block  h-20" alt="DevRecruit"/>
            </a>
            </div>
            
            <div className=''>
                <div className='flex items-center mb-2 text-l'>
                    <IoIosMail className='text-saturatedOrange text-linkColor mr-2' />
                    <p className='text-left text-darkBlue'>zakariaghachim96@gmail.com</p>
                </div>
                <div className='flex items-center mb-2 text-l'>
                    <FaPhoneAlt className='text-saturatedOrange text-linkColor mr-2' />
                    <p className='text-left text-darkBlue'>+212613428019</p>
                </div>
                <div className='flex items-center mb-2 text-l'>
                    <FaLocationDot className='text-saturatedOrange text-linkColor mr-2' />
                    <p className='text-left text-darkBlue'>somewhere in the world</p>
                </div>
            </div>
        </div>
        <ul className="flex flex-col mb-6 text-justify  text-l mt-20 font-medium sm:mb-0 text-darkBlue">
            <li className="mb-2 mt-10">
                <a href="#" className="hover:text-saturatedOrange">Home</a>
            </li>
            <li className="mb-2">
                <a href="#" className="hover:text-saturatedOrange">Quiz</a>
            </li>
            <li className='mb-2'>
                <a href="#" className="hover:text-saturatedOrange">Contact</a>
            </li>
        </ul>
        <div className="inline mt-auto  space-x-5">
            <a href="#" className="text text-linkColor  hover:text-gray-300">
            <FaFacebookF className="m-2 text-saturatedOrange text-xl" />
            <FaInstagram className="m-2  text-saturatedOrange text-xl"/>
            <RiTwitterXFill className="m-2  text-saturatedOrange text-xl"/>
            </a>
        </div>
    </div>
</footer>
  )
}

export default Footer