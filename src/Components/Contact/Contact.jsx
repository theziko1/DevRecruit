import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from "../Footer/Footer";

const Contact = () => {
  return (
    
    <>
    <Navbar/>
    <div>
      <div className="inline  items-center md:flex gap-10 pb-50 pl-132 pr-132 border-b-2 bt-2 pb-10 border-slate-200">
        <div className="flex-1 text-indigo-800 text-4xl font-semibold leading-72 break-words">
            Contact Us
        </div>
        <div className="flex-1 md:mb-0 mb-[200px] text-indigo-800 text-base font-normal leading-27 break-words">
            Welcome to SkillBridge's Pricing Plan page, where we offer two comprehensive options to cater to your needs: Free and Pro. We believe in providing flexible and affordable pricing options for our services. Whether you're an individual looking to enhance your skills or a business seeking professional development solutions,
            we have a plan that suits you. Explore our pricing options below and choose the one that best fits your requirements.
        </div>
      </div>
      {/* form */}
      <div class="flex items-center mt-[50px] justify-center min-h-screen bg-gray-100">
      <div class="w-full max-w-4xl p-10 bg-white mt-5 mb-5 rounded-lg shadow-lg">
        <h1 class="text-4xl font-semibold text-indigo-800 mb-20">Contact Us</h1>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* <!-- First Name --> */}
            <div class="flex flex-col mb-4">
                <label for="first_name" class="text-indigo-800 text-left text-sm font-semibold mb-2">First Name</label>
                <input type="text" id="first_name" placeholder="Enter First Name" class="input-field" />
            </div>

            {/* <!-- Last Name --> */}
            <div class="flex flex-col mb-4">
                <label for="last_name" class="text-indigo-800 text-left text-sm font-semibold mb-2">Last Name</label>
                <input type="text" id="last_name" placeholder="Enter Last Name" class="input-field" />
            </div>

            {/* <!-- Email --> */}
            <div class="flex flex-col mb-4">
                <label for="email" class="text-indigo-800 text-left text-sm font-semibold mb-2">Email</label>
                <input type="email" id="email" placeholder="Enter your Email" class="input-field" />
            </div>

            {/* <!-- Phone --> */}
            <div class="flex flex-col mb-4">
                <label for="phone" class="text-indigo-800 text-left text-sm font-semibold mb-2">Phone</label>
                <input type="tel" id="phone" placeholder="Enter Phone Number" class="input-field" />
            </div>

            {/* <!-- Subject --> */}
            <div class="flex flex-col col-span-2 mb-4">
                <label for="subject" class="text-indigo-800 text-left text-sm font-semibold mb-2">Subject</label>
                <input type="text" id="subject" placeholder="Enter your Subject" class="input-field" />
            </div>

            {/* <!-- Message --> */}
            <div class="flex flex-col col-span-2 mb-4">
                <label for="message" class="text-indigo-800 text-left text-sm font-semibold mb-2">Message</label>
                <textarea id="message" placeholder="Enter your Message here..." class="input-field h-32"></textarea>
            </div>
        </div>

        {/* <!-- Submit Button --> */}
        <button class="mt-8 px-6 py-3 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition duration-300">
            Send Your Message
        </button>
    </div>
</div>

    </div>
    <Footer/>
    </>
  )
}

export default Contact