import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import { IoPlaySharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import Modal from '../Modal/Modal';
const Quiz = () => {
    const [data, setData] = useState([]);
    const [currentItemIndex, setCurrentItemIndex] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const handleOnClose = () => setShowModal(false)
    useEffect(() => {
        const fetchData = async () => {
            try {
              const response = await fetch('http://localhost:3000/question');
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
        }, 5000);
    
        return () => clearTimeout(timer);
      }, [currentItemIndex, data]);
    
  return (
    <>
    <Navbar/>
    
    <div className="w-[100%] h-[185px] px-[132px] pb-[50px] border-b border-zinc-200 justify-start items-center gap-[100px] flex">
<div className="grow shrink basis-0 text-indigo-900 text-2xl font-semibold font-['Be Vietnam Pro'] leading-[72px]">Frontend Developer Quiz – UI/UX</div>
<div className="grow shrink basis-0 text-indigo-900 text-lg text-left font-normal font-['Be Vietnam Pro'] leading-[27px]">Are you a frontend developer with a passion for crafting seamless user experiences? DevRecruits invites you to prove your skills and shine in the world of UI/UX with our Frontend Developer Quiz. This quiz is designed to assess your proficiency in frontend technologies, from HTML and CSS to JavaScript and responsive design.</div>
</div>
<div className="w-[80%] h-[350px] p-[10px] bg-white rounded-xl flex-col justify-center items-center gap-[0px] inline-flex">
    <div className="self-stretch text-right mt-2 text-indigo-400 text-[80px] font-bold font-['Be Vietnam Pro'] leading-normal">01</div>
    <div className="self-stretch text-indigo-900 mb-8 text-2xl font-semibold font-['Be Vietnam Pro'] leading-9">Frontend Developer Quiz</div>
    <div className="self-stretch h-[403px] flex-col justify-start items-start gap-5 flex">
       
        <div className="self-stretch px-[30px] py-6 bg-white rounded-lg shadow border border-indigo-900 border-opacity-50 justify-start items-center gap-1.5 inline-flex">
            <div className="grow shrink basis-0 flex-col justify-center items-start gap-1.5 inline-flex">
                <div className="self-stretch text-indigo-900 text-xl font-medium font-['Be Vietnam Pro'] leading-[30px]">
                    {/* <li key={data[currentItemIndex].id}>{data[currentItemIndex].nom}</li>  */}
      </div>
                <div className="self-stretch text-indigo-900 text-lg font-normal font-['Be Vietnam Pro'] leading-[27px]">10 Questions</div>
            </div>
            <button onClick={()=>setShowModal(true)} className="px-3.5 py-3 bg-amber-500 hover:bg-lime-500 bg-opacity-40 rounded-md justify-start items-start gap-1 flex">
            <IoPlaySharp />Start Quiz
            </button>
        </div>
        
    </div>
</div>


<div className="w-[100%] h-[185px] mt-10 px-[132px] pb-[50px] border-b border-zinc-200 justify-start items-center gap-[100px] flex">
<div className="grow shrink basis-0 text-indigo-900 text-2xl font-semibold font-['Be Vietnam Pro'] leading-[72px]">Backend Developer Quiz – UI/UX</div>
<div className="grow shrink basis-0 text-indigo-900 text-lg text-left font-normal font-['Be Vietnam Pro'] leading-[27px]">Are you a frontend developer with a passion for crafting seamless user experiences? DevRecruits invites you to prove your skills and shine in the world of UI/UX with our Frontend Developer Quiz. This quiz is designed to assess your proficiency in frontend technologies, from HTML and CSS to JavaScript and responsive design.</div>
</div>
<div className="w-[80%] h-[350px] p-[10px] bg-white rounded-xl flex-col justify-center items-center gap-[0px] inline-flex">
    <div className="self-stretch text-right mt-2 text-indigo-400 text-[80px] font-bold font-['Be Vietnam Pro'] leading-normal">02</div>
    <div className="self-stretch text-indigo-900 mb-8 text-2xl font-semibold font-['Be Vietnam Pro'] leading-9">Backend Developer Quiz</div>
    <div className="self-stretch h-[403px] flex-col justify-start items-start gap-5 flex">
       
        <div className="self-stretch px-[30px] py-6 bg-white rounded-lg shadow border border-indigo-900 border-opacity-50 justify-start items-center gap-1.5 inline-flex">
            <div className="grow shrink basis-0 flex-col justify-center items-start gap-1.5 inline-flex">
                <div className="self-stretch text-indigo-900 text-xl font-medium font-['Be Vietnam Pro'] leading-[30px]">
                     {/* <li key={data[currentItemIndex].id}>{data[currentItemIndex].nom}</li>  */}
      </div>
                <div className="self-stretch text-indigo-900 text-lg font-normal font-['Be Vietnam Pro'] leading-[27px]">10 Questions</div>
            </div>
            <button onClick={()=>setShowModal(true)} className="px-3.5 py-3 bg-amber-500 hover:bg-lime-500 bg-opacity-40 rounded-md justify-start items-start gap-1 flex">
            <IoPlaySharp />Start Quiz
            </button>
        </div>
        
    </div>
</div>



<div className="w-[100%] h-[185px] mt-8 px-[132px] pb-[50px] border-b border-zinc-200 justify-start items-center gap-[100px] flex">
<div className="grow shrink basis-0 text-indigo-900 text-2xl font-semibold font-['Be Vietnam Pro'] leading-[72px]">FullStack Developer Quiz – UI/UX</div>
<div className="grow shrink basis-0 text-indigo-900 text-lg text-left font-normal font-['Be Vietnam Pro'] leading-[27px]">Are you a frontend developer with a passion for crafting seamless user experiences? DevRecruits invites you to prove your skills and shine in the world of UI/UX with our Frontend Developer Quiz. This quiz is designed to assess your proficiency in frontend technologies, from HTML and CSS to JavaScript and responsive design.</div>
</div>
<div className="w-[80%] h-[350px] p-[10px] bg-white rounded-xl flex-col justify-center items-center gap-[0px] inline-flex">
    <div className="self-stretch text-right mt-2 text-indigo-400 text-[80px] font-bold font-['Be Vietnam Pro'] leading-normal">03</div>
    <div className="self-stretch text-indigo-900 mb-8 text-2xl font-semibold font-['Be Vietnam Pro'] leading-9">FullStack Developer Quiz</div>
    <div className="self-stretch h-[403px] flex-col justify-start items-start gap-5 flex">
       
        <div className="self-stretch px-[30px] py-6 bg-white rounded-lg shadow border border-indigo-900 border-opacity-50 justify-start items-center gap-1.5 inline-flex">
            <div className="grow shrink basis-0 flex-col justify-center items-start gap-1.5 inline-flex">
                <div className="self-stretch text-indigo-900 text-xl font-medium font-['Be Vietnam Pro'] leading-[30px]">
                    {/* <li key={data[currentItemIndex].id}>{data[currentItemIndex].nom}</li>  */}
      </div>
                <div className="self-stretch text-indigo-900 text-lg font-normal font-['Be Vietnam Pro'] leading-[27px]">10 Questions</div>
            </div>
            <button onClick={()=>setShowModal(true)} className="px-3.5 py-3 bg-amber-500 hover:bg-lime-500 bg-opacity-40 rounded-md justify-start items-start gap-1 flex">
            <IoPlaySharp />Start Quiz
            </button>
        </div>
        
    </div>
</div>


    
    <Modal onClose={handleOnClose} visible={showModal}/>

   
    </>
  )
}

export default Quiz