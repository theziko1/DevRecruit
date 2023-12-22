import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from "../../assets/logo.svg";
//import Icon from "../../assets/NavImg/Icon.svg";
import { FaXmark , FaBars } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen,setIsMenuOpen] = useState(false);
  


  const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
  }
  return (
  <div className="w-[100%] h-[99px] px-[132px] border-b border-zinc-100 justify-between items-start flex">
        <div className="justify-start items-center gap-[50px]  flex">
                  <img className="w-[150px] h-[58.85px]" src={Logo} />
          <div className="justify-start items-center gap-[26px] md:flex hidden">
              <NavLink to="/" className="text-neutral-800 text-lg font-normal font-['Be Vietnam Pro'] leading-[27px]">Home</NavLink>
              <NavLink to="/Quiz" className="text-neutral-800 text-lg font-normal font-['Be Vietnam Pro'] leading-[27px]">Quiz</NavLink>
              <NavLink to="/Contact" className="text-neutral-800 text-lg font-normal font-['Be Vietnam Pro'] leading-[27px]">Contact</NavLink>
          </div>
          <div className="md:hidden">
                     <button onClick={toggleMenu} className="text-NeutralDGrey focus:outline-none focus:text-gray-500">
                        {
                            isMenuOpen ?  (<FaXmark className="h-6 w-6 "/>) : (<FaBars className="h-6 w-6 "/>)
                        }
                     </button>
           </div>
           <div className={`${isMenuOpen ? "fixed top-[100px] left-0 right-0  block bg-orange-400" : "hidden"}`}>
              <NavLink to="/" className="block text-neutral-800 text-lg font-normal font-['Be Vietnam Pro'] leading-[27px]">Home</NavLink>
              <NavLink to="/Quiz" className="block text-neutral-800 text-lg font-normal font-['Be Vietnam Pro'] leading-[27px]">Quiz</NavLink>
              <NavLink to="/Contact" className="block text-neutral-800 text-lg font-normal font-['Be Vietnam Pro'] leading-[27px]">Contact</NavLink>
          </div>
        </div>
  </div>
  )
}

export default Navbar