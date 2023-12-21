import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./Components/Home/Home.jsx";
import Quiz from "./Components/Quiz/Quiz.jsx";
import Contact from './Components/Contact/Contact.jsx';


function App() {
  

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
