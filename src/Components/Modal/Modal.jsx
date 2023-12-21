import React from 'react'
import { AiFillCloseCircle } from "react-icons/ai";

const Modal = ({visible , onClose}) => {
    if (!visible) return null
  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-white p-2 rounded w-[60%]">
        <h1>Welcome to Test</h1>
        <button onClick={onClose}><AiFillCloseCircle /></button>
      </div>
      
    </div>
  )
}

export default Modal