import React from 'react'
import Navbar from '../Navbar/Navbar'
const Quiz = () => {
  return (
    <>
    <Navbar/>
    <div className="w-[100%] h-[194px] px-[132px] pb-[50px] border-b border-zinc-200 justify-start items-center gap-[100px] inline-flex">
        <div className="grow shrink basis-0 text-neutral-800 text-3xl font-semibold font-['Be Vietnam Pro'] leading-[72px]">Online Courses on Design and Development</div>
        <div className="grow shrink basis-0 text-zinc-600 text-sm font-normal font-['Be Vietnam Pro'] leading-[27px]">Welcome to our online course page, where you can enhance your skills in design and development. Choose from our carefully curated selection of 10 courses designed to provide you with comprehensive knowledge and practical experience. Explore the courses below and find the perfect fit for your learning journey.</div>
    </div>
    <div className="w-[80%] h-[1027px] p-[50px] bg-white rounded-xl flex-col justify-start items-start gap-[50px] inline-flex">
    <div className="self-stretch h-[625px] flex-col justify-start items-start gap-[30px] flex">
        <div className="self-stretch justify-start items-center gap-[50px] inline-flex">
            <div className="grow shrink basis-0 self-stretch flex-col justify-start items-start gap-2.5 inline-flex">
                <div className="self-stretch text-neutral-800 text-2xl font-semibold font-['Be Vietnam Pro'] leading-9">Web Design Fundamentals</div>
                <div className="self-stretch text-zinc-600 text-lg font-normal font-['Be Vietnam Pro'] leading-[27px]">Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.</div>
            </div>
            <div className="px-6 py-[18px] bg-neutral-50 rounded-lg border border-zinc-100 justify-center items-center gap-2 flex">
                <div className="text-center text-neutral-800 text-lg font-medium font-['Be Vietnam Pro'] leading-[27px]">View Course</div>
            </div>
        </div>
        <div className="w-[80%] self-stretch justify-start items-start gap-[30px] inline-flex">
            <img className="w-[40%] h-[350px] rounded-lg" src="https://via.placeholder.com/479x422" />
            <img className="w-[40%] h-[350px] rounded-lg" src="https://via.placeholder.com/479x422" />
            <img className="w-[40%] h-[350px] rounded-lg" src="https://via.placeholder.com/479x422" />
        </div>
        <div className="self-stretch justify-between items-center inline-flex">
            <div className="justify-start items-start gap-2.5 flex">
                <div className="px-4 py-2.5 bg-white rounded-lg border border-zinc-100 justify-start items-start gap-2.5 flex">
                    <div className="text-zinc-600 text-lg font-normal font-['Be Vietnam Pro']">4 Weeks</div>
                </div>
                <div className="px-4 py-2.5 bg-white rounded-lg border border-zinc-100 justify-start items-start gap-2.5 flex">
                    <div className="text-zinc-600 text-lg font-normal font-['Be Vietnam Pro']">Beginner</div>
                </div>
            </div>
            <div className="text-neutral-800 text-xl font-medium font-['Be Vietnam Pro']">By John Smith</div>
        </div>
    </div>
    <div className="w-[100%] h-[252px] rounded-[10px] border  border-zinc-100 flex-col justify-start items-start flex">
        <div className="self-stretch px-[30px] py-6 border-b border-zinc-100 justify-start items-start gap-2.5 inline-flex">
            <div className="grow shrink basis-0 text-neutral-800 text-[22px] font-semibold font-['Be Vietnam Pro'] leading-[33px]">Curriculum</div>
        </div>
        <div className="w-[100%] bg-white rounded-xl justify-start items-start gap-[50px] inline-flex">
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-5 inline-flex">
                <div className="text-neutral-800 text-[50px] font-extrabold font-['Be Vietnam Pro'] leading-[75px]">01</div>
                <div className="self-stretch text-zinc-800 text-lg font-medium font-['Be Vietnam Pro'] leading-[27px]">Introduction to HTML</div>
            </div>
            <div className="w-[100%] self-stretch origin-top-left rotate-90 border border-zinc-100"></div>
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-5 inline-flex">
                <div className="text-neutral-800 text-[50px] font-extrabold font-['Be Vietnam Pro'] leading-[75px]">02</div>
                <div className="self-stretch text-zinc-800 text-lg font-medium font-['Be Vietnam Pro'] leading-[27px]">Styling with CSS</div>
            </div>
            <div className="w-[100%] self-stretch origin-top-left rotate-90 border border-zinc-100"></div>
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-5 inline-flex">
                <div className="text-neutral-800 text-[50px] font-extrabold font-['Be Vietnam Pro'] leading-[75px]">03</div>
                <div className="self-stretch text-zinc-800 text-lg font-medium font-['Be Vietnam Pro'] leading-[27px]">Introduction to Responsive Design</div>
            </div>
            <div className="w-[100%] self-stretch origin-top-left rotate-90 border border-zinc-100"></div>
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-5 inline-flex">
                <div className="text-neutral-800 text-[50px] font-extrabold font-['Be Vietnam Pro'] leading-[75px]">04</div>
                <div className="self-stretch text-zinc-800 text-lg font-medium font-['Be Vietnam Pro'] leading-[27px]">Design Principles for Web</div>
            </div>
            <div className="w-[100%] self-stretch origin-top-left rotate-90 border border-zinc-100"></div>
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-5 inline-flex">
                <div className="text-neutral-800 text-[50px] font-extrabold font-['Be Vietnam Pro'] leading-[75px]">05</div>
                <div className="self-stretch text-zinc-800 text-lg font-medium font-['Be Vietnam Pro'] leading-[27px]">Building a Basic Website</div>
            </div>
        </div>
    </div>
</div>
    </>
  )
}

export default Quiz