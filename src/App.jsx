import { useState } from 'react'
//import Navbar from "../src/Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./Components/Home/Home.jsx";
import Quiz from "./Components/Quiz/Quiz.jsx";
import Contact from './Components/Contact/Contact.jsx';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/Quiz" element={<Quiz />} />
      <Route path="/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
