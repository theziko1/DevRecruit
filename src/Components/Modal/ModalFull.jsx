import React , {useState , useEffect} from 'react'
import { AiFillCloseCircle } from "react-icons/ai";

const ModalFull = ({onClose,visible}) => {
    const [data, setData] = useState([]);
    const [currentItemIndex, setCurrentItemIndex] = useState(0);
      
      useEffect(() => {
        const fetchData = async () => {
            try {
              const response = await fetch('http://localhost:3000/FullStackQuiz');
              const jsonData = await response.json();
              setData(jsonData);
            } catch (error) {
              console.error('Erreur lors de la récupération des données :', error);
            }
          };
      
          fetchData();
        
    }, [])
  
    useEffect(() => {
      
        const timer = setTimeout(() => {
          setCurrentItemIndex(prevIndex => (prevIndex + 1) % data.length);
        }, 25000);
    
        return () => clearTimeout(timer);
      }, [currentItemIndex, data]);
      if (!visible) return null
    return (
      <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
        <div className="bg-white p-2 rounded w-[60%]">
          <h1 className="">Welcome to FullStack Quiz</h1>
          <span>Question N°{data[currentItemIndex].id}</span>
          <h4 key={data[currentItemIndex].id}>{data[currentItemIndex].nom}</h4>  
          <ul>
            {data[currentItemIndex].suggestions.map((suggestion, index) => (
            <div key={index}>
            <input type="radio" name=""  />            
              <label >
                {suggestion}
              </label>
            </div>
            ))}
          </ul>
         
          <button onClick={onClose}><AiFillCloseCircle /></button>
        </div>
        
      </div>
  )
}

export default ModalFull