import React from 'react'
import Navbar from "../Navbar/Navbar";
import Icon from '../../assets/HomeImage/Icon.svg'
import Abstract from '../../assets/HomeImage/Abstract.svg'
const Home = () => {
  return (
    <>
    <Navbar/>
    <div className="w-[39px] h-[43px] ml-[200px]" >
    <img src={Abstract} alt="" />
    </div>
    <div className="w-[60%] h-[100px] pl-5 pr-[30px] py-3.5 bg-neutral-50 rounded-[11px] border border-zinc-100 justify-center items-center gap-2.5 inline-flex">

<div className="p-3.5 bg-orange-50 rounded-md justify-center items-center gap-2.5 flex">

    <img src={Icon} alt="" />
</div>
<div className="text-center"><span className="text-amber-500 text-3xl md:text-xl font-semibold font-['Be Vietnam Pro'] leading-[72px]">Unlock</span><span className="text-zinc-900 text-3xl md:text-xl font-semibold font-['Be Vietnam Pro'] leading-[72px]"> Your Creative Potential</span></div>
</div>
<div className="w-[100%] mt-auto text-center text-neutral-800 text-[38px] font-medium font-['Be Vietnam Pro'] leading-[57px]">with Online Design and Development Courses.</div>
<button className="w-[15%] h-[63px] gap-4 mr-[20px] text-center text-white text-lg font-semibold font-['Be Vietnam Pro'] leading-[27px] bg-amber-500 rounded-lg justify-center items-center mt-2 inline-flex">
Explore Courses
</button> 
<button className="w-[15%] h-[63px]  gap-4  bg-white rounded-lg border border-zinc-100 justify-center items-center mt-2 inline-flex">
<div className="text-center text-neutral-800 text-lg font-medium font-['Be Vietnam Pro'] leading-[27px]">View Pricing</div>
</button> 
<div className="w-[90%] h-[154px] p-[30px] mt-[50px] bg-neutral-50 rounded-xl border border-zinc-100 justify-start items-start inline-flex">
    <div className="grow shrink basis-0 h-[94px] px-10 py-[30px] justify-center items-center gap-[30px] flex">
        <div className="w-[68px] h-[34px] relative" />
    </div>
    <div className="w-[94px] self-stretch origin-top-left rotate-90 border border-zinc-100"></div>
    <div className="grow shrink basis-0 h-[94px] px-10 py-[30px] justify-center items-center gap-[30px] flex">
        <div className="w-[99.17px] h-[34px] relative" />
    </div>
    <div className="w-[94px] self-stretch origin-top-left rotate-90 border border-zinc-100"></div>
    <div className="grow shrink basis-0 h-[94px] px-10 py-[30px] justify-center items-center gap-[30px] flex">
        <div className="w-[69.42px] h-[34px] relative" />
    </div>
    <div className="w-[94px] self-stretch origin-top-left rotate-90 border border-zinc-100"></div>
    <div className="grow shrink basis-0 h-[94px] px-10 py-[30px] justify-center items-center gap-[30px] flex">
        <div className="w-[77.92px] h-[34px] relative" />
    </div>
    <div className="w-[94px] self-stretch origin-top-left rotate-90 border border-zinc-100"></div>
    <div className="grow shrink basis-0 h-[94px] px-10 py-[30px] justify-center items-center gap-[30px] flex">
        <div className="w-[94.21px] h-[34px] relative" />
    </div>
    <div className="w-[94px] self-stretch origin-top-left rotate-90 border border-zinc-100"></div>
    <div className="grow shrink basis-0 h-[94px] px-10 py-[30px] justify-center items-center gap-[30px] flex">
        <div className="w-[91.38px] h-[34px] relative" />
    </div>
    <div className="w-[94px] self-stretch origin-top-left rotate-90 border border-zinc-100"></div>
    <div className="grow shrink basis-0 h-[94px] px-10 py-[30px] justify-center items-center gap-[30px] flex">
        <div className="w-[78.62px] h-[34px] relative" />
    </div>
</div> 
<div className="w-[90%] mt-[50px] h-[790px] p-[100px] bg-black bg-opacity-20 rounded-xl border-8 border-neutral-100 justify-center items-center gap-2.5 inline-flex">
<div className="p-3.5 bg-white bg-opacity-20 rounded-[68px] border-4 border-white border-opacity-30 justify-start items-start gap-2.5 flex">
<div className="w-11 h-11 relative" />
</div>
</div>

    </>
  )
}

export default Home