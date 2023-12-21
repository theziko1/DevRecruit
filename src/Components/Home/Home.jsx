import React from "react";
import Navbar from "../Navbar/Navbar";
import Icon from "../../assets/HomeImage/Icon.svg";
import Abstract from "../../assets/HomeImage/Abstract.svg";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <Navbar />
      <div className="w-[39px] h-[43px] ml-[200px]">
        <img src={Abstract} alt="" />
      </div>
      <div className="w-[60%] h-[100px] pl-5 pr-[30px] py-3.5 bg-neutral-50 rounded-[11px] border border-zinc-100 justify-center items-center gap-2.5 inline-flex">
        <div className="p-3.5 rounded-md bg-gray-100 justify-center items-center gap-2.5 flex">
          <img src={Icon} alt="" />
        </div>
        <div className="text-center">
          <span className="text-indigo-400 text-3xl font-semibold font-['Be Vietnam Pro'] leading-[72px]">
            Explore
          </span>
          <span className="text-zinc-900 text-3xl font-semibold font-['Be Vietnam Pro'] leading-[72px]">
            {" "}
          </span>
          <span className="text-indigo-900 text-3xl font-semibold font-['Be Vietnam Pro'] leading-[72px]">
            Boundless Opportunities{" "}
          </span>
        </div>
      </div>
      <h1 className="w-[100%] text-center text-indigo-900 py-3 text-[38px] font-medium font-['Be Vietnam Pro']">
        Welcome to DevRecruits: Where Innovation Meets Talent!
      </h1>
      <p className="w-[100%] text-center text-indigo-900 py-3 text-lg font-normal font-['Be Vietnam Pro'] leading-[27px]">
        Are you ready to embark on a coding adventure? DevRecruits is your
        gateway to a world of possibilities, connecting visionary developers
        with companies that are shaping the future. Join us and let's build the
        next generation of technology together!
      </p>

      <Link
        to="/Quiz"
        className="w-[135px] h-[63px] mr-2 px-6 py-[18px] bg-amber-500 rounded-lg justify-center items-center gap-2 inline-flex"
      >
        <div className="text-center text-white text-lg font-semibold font-['Be Vietnam Pro'] leading-[27px]">
          Take Quiz
        </div>
      </Link>
      <Link
        to="/Contact"
        className="w-[149px] h-[63px] px-6 py-[18px] bg-indigo-300 rounded-lg border border-zinc-100 justify-center items-center gap-2 inline-flex"
      >
        <div className="text-center text-indigo-900 text-lg font-medium font-['Be Vietnam Pro'] leading-[27px]">
          Contact Us
        </div>
      </Link>
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

      <section className="w-[90%] h-[200px]- my-8 mx-auto  justify-center items-center gap-[300px] flex">
        <div className="w-[1177px] flex-col justify-start items-start gap-1.5 flex">
          <h1 className=" text-indigo-900 text-5xl font-semibold font-['Be Vietnam Pro'] leading-[72px]">
            Our Quizzes
          </h1>
          <p className="w-fit text-indigo-900 text-lg text-justify font-normal font-['Be Vietnam Pro'] leading-[27px]">
            Ready to showcase your skills? Engage in our interactive quizzes and
            coding challenges tailored to assess your expertise. Whether you're
            a seasoned developer or a rising star, our quizzes help match you
            with opportunities that align with your strengths.
          </p>
        </div>
        <div className="w-[120px] h-[63px] px-6 py-[18px] bg-neutral-50 rounded-lg border border-zinc-100 justify-center items-center gap-2 flex">
          <div className="text-center text-indigo-900 text-lg font-medium font-['Be Vietnam Pro'] leading-[27px]">
            View All
          </div>
        </div>
      </section>

<main className="grid grid-cols-2 gap-4" >
 
  <div className="w-[100%] h-[807px] p-[50px] bg-white rounded-xl border border-zinc-100 flex-col justify-between items-start gap-7 inline-flex">
        
        <div className="self-stretch h-[614px] flex-col justify-start items-start gap-[30px] flex">
        <img className="self-stretch h-[380px] rounded-lg" src="https://via.placeholder.com/683x380" />
        <div className="self-stretch h-[204px] flex-col justify-start items-start gap-[30px] flex">
        <div className="self-stretch justify-between items-center inline-flex">
        <div className="justify-start items-start gap-2.5 flex">
        <div className="px-4 py-2.5 bg-white rounded-lg border border-zinc-100 justify-start items-start gap-2.5 flex">
        <div className="text-indigo-900 text-lg font-normal font-['Be Vietnam Pro']">4 Weeks</div>
        </div>
        <div className="px-4 py-2.5 bg-white rounded-lg border border-zinc-100 justify-start items-start gap-2.5 flex">
        <div className="text-indigo-900 text-lg font-normal font-['Be Vietnam Pro']">Beginner</div>
        </div>
        </div>
        <div className="text-indigo-900 text-xl font-medium font-['Be Vietnam Pro']">By John Smith</div>
        </div>
        <div className="self-stretch h-[131px] flex-col justify-start items-start gap-3.5 flex">
        <div className="self-stretch text-indigo-900 text-2xl font-semibold font-['Be Vietnam Pro'] leading-9">Web Design Fundamentals</div>
        <div className="self-stretch text-indigo-900 text-lg font-normal font-['Be Vietnam Pro'] leading-[27px]">Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.</div>
        </div>
        </div>
        </div>
        <div className="self-stretch px-6 py-[18px] bg-amber-500 rounded-lg border border-gray-100 justify-center items-center gap-2 inline-flex">
        <div className="text-center text-gray-100 text-lg font-medium font-['Be Vietnam Pro'] leading-[27px]">Get it Now</div>
        </div>
        </div>
 
  <div className="w-[100%] h-[807px] p-[50px] bg-white rounded-xl border border-zinc-100 flex-col justify-between items-start inline-flex">
        
        <div className="self-stretch h-[614px] flex-col justify-start items-start gap-[30px] flex">
        <img className="self-stretch h-[380px] rounded-lg" src="https://via.placeholder.com/683x380" />
        <div className="self-stretch h-[204px] flex-col justify-start items-start gap-[30px] flex">
        <div className="self-stretch justify-between items-center inline-flex">
        <div className="justify-start items-start gap-2.5 flex">
        <div className="px-4 py-2.5 bg-white rounded-lg border border-zinc-100 justify-start items-start gap-2.5 flex">
        <div className="text-indigo-900 text-lg font-normal font-['Be Vietnam Pro']">4 Weeks</div>
        </div>
        <div className="px-4 py-2.5 bg-white rounded-lg border border-zinc-100 justify-start items-start gap-2.5 flex">
        <div className="text-indigo-900 text-lg font-normal font-['Be Vietnam Pro']">Beginner</div>
        </div>
        </div>
        <div className="text-indigo-900 text-xl font-medium font-['Be Vietnam Pro']">By John Smith</div>
        </div>
        <div className="self-stretch h-[131px] flex-col justify-start items-start gap-3.5 flex">
        <div className="self-stretch text-indigo-900 text-2xl font-semibold font-['Be Vietnam Pro'] leading-9">Web Design Fundamentals</div>
        <div className="self-stretch text-indigo-900 text-lg font-normal font-['Be Vietnam Pro'] leading-[27px]">Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.</div>
        </div>
        </div>
        </div>
        <div className="self-stretch px-6 py-[18px] bg-amber-500 rounded-lg border border-gray-100 justify-center items-center gap-2 inline-flex">
        <div className="text-center text-gray-100 text-lg font-medium font-['Be Vietnam Pro'] leading-[27px]">Get it Now</div>
        </div>
        </div>

        <div className="w-[100%] h-[807px] p-[50px] bg-white rounded-xl border border-zinc-100 flex-col justify-between items-start inline-flex">
        
        <div className="self-stretch h-[614px] flex-col justify-start items-start gap-[30px] flex">
        <img className="self-stretch h-[380px] rounded-lg" src="https://via.placeholder.com/683x380" />
        <div className="self-stretch h-[204px] flex-col justify-start items-start gap-[30px] flex">
        <div className="self-stretch justify-between items-center inline-flex">
        <div className="justify-start items-start gap-2.5 flex">
        <div className="px-4 py-2.5 bg-white rounded-lg border border-zinc-100 justify-start items-start gap-2.5 flex">
        <div className="text-indigo-900 text-lg font-normal font-['Be Vietnam Pro']">4 Weeks</div>
        </div>
        <div className="px-4 py-2.5 bg-white rounded-lg border border-zinc-100 justify-start items-start gap-2.5 flex">
        <div className="text-indigo-900 text-lg font-normal font-['Be Vietnam Pro']">Beginner</div>
        </div>
        </div>
        <div className="text-indigo-900 text-xl font-medium font-['Be Vietnam Pro']">By John Smith</div>
        </div>
        <div className="self-stretch h-[131px] flex-col justify-start items-start gap-3.5 flex">
        <div className="self-stretch text-indigo-900 text-2xl font-semibold font-['Be Vietnam Pro'] leading-9">Web Design Fundamentals</div>
        <div className="self-stretch text-indigo-900 text-lg font-normal font-['Be Vietnam Pro'] leading-[27px]">Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.</div>
        </div>
        </div>
        </div>
        <div className="self-stretch px-6 py-[18px] bg-amber-500 rounded-lg border border-gray-100 justify-center items-center gap-2 inline-flex">
        <div className="text-center text-gray-100 text-lg font-medium font-['Be Vietnam Pro'] leading-[27px]">Get it Now</div>
        </div>
        </div>

      <div className="w-[100%] h-[807px] p-[50px] bg-white rounded-xl border border-zinc-100 flex-col justify-between items-start inline-flex">
        
        <div className="self-stretch h-[614px] flex-col justify-start items-start gap-[30px] flex">
        <img className="self-stretch h-[380px] rounded-lg" src="https://via.placeholder.com/683x380" />
        <div className="self-stretch h-[204px] flex-col justify-start items-start gap-[30px] flex">
        <div className="self-stretch justify-between items-center inline-flex">
        <div className="justify-start items-start gap-2.5 flex">
        <div className="px-4 py-2.5 bg-white rounded-lg border border-zinc-100 justify-start items-start gap-2.5 flex">
        <div className="text-indigo-900 text-lg font-normal font-['Be Vietnam Pro']">4 Weeks</div>
        </div>
        <div className="px-4 py-2.5 bg-white rounded-lg border border-zinc-100 justify-start items-start gap-2.5 flex">
        <div className="text-indigo-900 text-lg font-normal font-['Be Vietnam Pro']">Beginner</div>
        </div>
        </div>
        <div className="text-indigo-900 text-xl font-medium font-['Be Vietnam Pro']">By John Smith</div>
        </div>
        <div className="self-stretch h-[131px] flex-col justify-start items-start gap-3.5 flex">
        <div className="self-stretch text-indigo-900 text-2xl font-semibold font-['Be Vietnam Pro'] leading-9">Web Design Fundamentals</div>
        <div className="self-stretch text-indigo-900 text-lg font-normal font-['Be Vietnam Pro'] leading-[27px]">Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.</div>
        </div>
        </div>
        </div>
        <div className="self-stretch px-6 py-[18px] bg-amber-500 rounded-lg border border-gray-100 justify-center items-center gap-2 inline-flex">
        <div className="text-center text-gray-100 text-lg font-medium font-['Be Vietnam Pro'] leading-[27px]">Get it Now</div>
        </div>
        </div>        
  
</main>
     


      <div className="w-[100%] h-[1221px] p-[100px] mt-[100px] bg-white rounded-xl justify-start items-start gap-[120px] flex">
    <div className="w-[408px] flex-col justify-start items-start gap-[50px] inline-flex">
        <div className="self-stretch h-[153px] flex-col justify-start items-start gap-2.5 flex">
            <div className="self-stretch text-indigo-900 text-5xl text-left font-semibold font-['Be Vietnam Pro'] leading-[57.60px]">Frequently Asked Questions</div>
            <div className="self-stretch text-indigo-900 text-lg text-left font-normal font-['Be Vietnam Pro'] leading-[27px]">Your DevRecruits Queries Answered</div>
        </div>
        <div className="px-6 py-[18px] bg-amber-500 rounded-lg border border-zinc-100 justify-center items-center gap-2 inline-flex">
            <div className="text-center text-gray-100 text-lg font-medium font-['Be Vietnam Pro'] leading-[27px]">Contact Us For More Questions</div>
        </div>
    </div>
    <div className="grow shrink basis-0 flex-col justify-start items-start gap-[30px] inline-flex">
        <div className="self-stretch h-[453px] p-[50px] bg-white rounded-xl border border-zinc-100 flex-col justify-start items-start gap-[50px] flex">
            <div className="self-stretch pb-6 border-b border-zinc-100 justify-start items-center gap-[30px] inline-flex">
                <div className="grow shrink basis-0 text-indigo-900 text-xl font-medium font-['Be Vietnam Pro'] leading-[30px]">Q: How does DevRecruits work?</div>
                <div className="p-3 bg-gray-100 rounded-lg justify-start items-start gap-2.5 flex">
                    <div className="w-7 h-7 relative" />
                </div>
            </div>
            <div className="self-stretch text-indigo-900 text-lg font-normal font-['Be Vietnam Pro'] leading-[27px]">A: DevRecruits simplifies the developer recruitment process. Developers showcase their skills through quizzes, and companies gain access to a pool of curated talent, ensuring the perfect match.</div>
            <div className="self-stretch px-[30px] py-5 bg-neutral-100 rounded-lg border border-zinc-100 justify-start items-center inline-flex">
                <div className="grow shrink basis-0 text-indigo-900 text-lg font-medium font-['Be Vietnam Pro'] leading-[27px]">Enrollment Process for Different Courses</div>
                <div className="p-3.5 bg-amber-500 rounded-[100px] justify-start items-start gap-2.5 flex">
                    <div className="w-7 h-7 relative" />
                </div>
            </div>
        </div>
        <div className="self-stretch px-[50px] py-[30px] bg-white rounded-xl border border-zinc-100 justify-start items-center gap-[50px] inline-flex">
            <div className="grow shrink basis-0 text-indigo-900 text-xl font-medium font-['Be Vietnam Pro'] leading-[30px]">Q: Can I trust the opportunities presented on DevRecruits?</div>
            <div className="p-3 bg-amber-500 rounded-lg justify-start items-start gap-2.5 flex">
                <div className="w-7 h-7 relative" />
            </div>
        </div>
        <div className="self-stretch px-[50px] py-[30px] bg-white rounded-xl border border-zinc-100 justify-start items-center gap-[50px] inline-flex">
            <div className="grow shrink basis-0 text-indigo-900 text-xl font-medium font-['Be Vietnam Pro'] leading-[30px]">Q: Are the quizzes mandatory?</div>
            <div className="p-3 bg-amber-500 rounded-lg justify-start items-start gap-2.5 flex">
                <div className="w-7 h-7 relative" />
            </div>
        </div>
        <div className="self-stretch px-[50px] py-[30px] bg-white rounded-xl border border-zinc-100 justify-start items-center gap-[50px] inline-flex">
            <div className="grow shrink basis-0 text-indigo-900 text-xl font-medium font-['Be Vietnam Pro'] leading-[30px]">Q: How fast can I find a match on DevRecruits?</div>
            <div className="p-3 bg-amber-500 rounded-lg justify-start items-start gap-2.5 flex">
                <div className="w-7 h-7 relative" />
            </div>
        </div>
        <div className="self-stretch px-[50px] py-[30px] bg-white rounded-xl border border-gray-100 justify-start items-center gap-[50px] inline-flex">
            <div className="grow shrink basis-0 text-indigo-900 text-xl font-medium font-['Be Vietnam Pro'] leading-[30px]">Can I download the course materials for offline access?</div>
            <div className="p-3 bg-amber-500 rounded-lg justify-start items-start gap-2.5 flex">
                <div className="w-7 h-7 relative" />
            </div>
        </div>
    </div>
</div>
    </>
  );
};

export default Home;
