import React , {useState , useEffect} from 'react'
import { AiFillCloseCircle } from "react-icons/ai";


const ModalFront = ({visible , onClose}) => {
  const [data, setData] = useState([]);
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(25); 
  const URL = import.meta.env.VITE_URL;
    
    useEffect(() => {
      const fetchData = async () => {
          try {
            const response = await fetch(`${URL}/FrontEndQuiz`);
            const jsonData = await response.json();
            setData(jsonData);
          } catch (error) {
            console.error('Erreur lors de la récupération des données :', error);
          }
        };
    
        fetchData();
      
  }, [])

  // useEffect(() => {
    
  //   //   const timer = setTimeout(() => {
  //   //     setCurrentItemIndex(prevIndex => (prevIndex + 1) % data.length);
  //   //   }, 25000);
      
  
  //   //   return () => clearTimeout(timer);
  //   // }, [currentItemIndex, data]);
   
    const handleOptionClick = (selectedOption) => {
     
      if (!showAnswer) {
        
        const isCorrect = selectedOption === data[currentItemIndex].answer;
  
        setUserAnswers(prevAnswers => [...prevAnswers, { questionId: currentItemIndex + 1, isCorrect }]);
        setScore(prevScore => (isCorrect ? prevScore + 1 : prevScore));
  
        setShowAnswer(true);
  
        // Passez à la question suivante après 3 secondes
        // setTimeout(() => {
        //   setShowAnswer(false);
        //   setCurrentItemIndex(prevIndex => (prevIndex + 1) % data.length);
        // }, 3000);
      }
    };
  
    const handleNextQuestion = () => {
      setShowAnswer(false);
      setCurrentItemIndex(prevIndex => (prevIndex + 1) % data.length);
      setTimer(25)
      

    };
  
    useEffect(() => {
      
      setScore(0);
      setUserAnswers([]);
    }, [data]);

    useEffect(() => {
      let countdown;
  
      if (timer > 0 && !showAnswer) {
        countdown = setInterval(() => {
          setTimer(prevTimer => prevTimer - 1);
        }, 1000);
      } else if (timer === 0 && !showAnswer) {
        // Passe automatiquement à la question suivante lorsque le temps est écoulé
        handleNextQuestion();
      }
  
      // Nettoie l'intervalle lorsque le composant est démonté ou lorsque le timer est à zéro
      return () => clearInterval(countdown);
    }, [timer, showAnswer]);
  
    const currentQuestion = data[currentItemIndex];
    
    if (!visible) return null
  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-white p-8 rounded w-[80%]">
      
        <h1 className="text-orange-400 text-lg font-bold">Welcome to FrontEnd Quiz </h1>
        
    
        <div>
        {(showAnswer  && currentItemIndex   !== data.length - 1 ) && (
        <p className="text-lime-600">La réponse correcte est : {currentQuestion.answer}</p>
      )}

      {!showAnswer && (
        <ul>
          <p className="text-red-400">Temps restant : {timer} secondes</p>
        <span className="text-indigo-400">Question N°{data[currentItemIndex].id}</span>
        <h4 className="text-indigo-600 font-normal" key={data[currentItemIndex].id}>{data[currentItemIndex].nom}</h4> 
          {currentQuestion.suggestions.map((suggestion, index) => (
            <li className="cursor-pointer bg-orange-400 p-2 m-2 text-white" key={index} onClick={() => handleOptionClick(suggestion)}>
              {suggestion}
            </li>
            
          ))}
          
        </ul>
      )}

      {showAnswer && currentItemIndex < data.length - 1 && (
        <button className="bg-indigo-400 text-white p-2 m-2 rounded-md" onClick={handleNextQuestion}>Question suivante</button>
      )}

      {(currentItemIndex   === data.length -1 && showAnswer ) && (
        <div>
          <p className="bg-lime-400 text-white p-2 m-2">Score final : {score} / {data.length}</p>
          <ul>
            {userAnswers.map((answer, index) => (
              <li className="bg-indigo-400 text-white" key={index}>
                Question {answer.questionId}: {answer.isCorrect ? 'Correct' : 'Incorrect'}
              </li>
            ))}
          </ul>
         
        </div>
      )}

       
    
       </div>
       
        <button onClick={()=>{
          setCurrentItemIndex(0)
          setUserAnswers([])
          setShowAnswer(false)
          setTimer(25)
          onClose()
        }}><AiFillCloseCircle /></button>
      </div>
      
    </div>
  )
}

export default ModalFront