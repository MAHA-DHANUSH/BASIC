import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import './FrontPage.css';
import dot from './apps_FILL0_wght400_GRAD0_opsz24.svg';
import exp from './experiment_FILL0_wght400_GRAD0_opsz24.svg';
import prof from './account_circle_FILL0_wght400_GRAD0_opsz24.svg';
import mic from './mic_FILL0_wght400_GRAD0_opsz24.svg';
import searchImage from './image_search_FILL0_wght400_GRAD0_opsz24.svg';

function FrontPage() {
  return (
    <Router>
      <div className="bg-blue-100 min-h-screen">
        <div className="flex flex-col justify-center items-center text-center">
          {/* <h1 className="text-3xl font-bold mb-4 jump-effect-h1">FRONT END TASK-1</h1> */}
          <div className="mb-4">
            <br/>
            <div className="inline-flex space-x-4 custom-align-left">
              <a href="mailto:example@gmail.com" className="text-blue-500 underline">Email</a>
              <a href="https://www.instagram.com/" className="text-purple-500 underline">Instagram</a>
              <a href="https://www.facebook.com/" className="text-blue-800 underline">Facebook</a>
              <img src={dot} alt="Facebook Icon" className="mx-auto w-8 h-8" />
              <img src={exp} alt="exp icon" className="mx-auto w-8 h-8" />
              <img src={prof} alt="profile icon" className="mx-auto w-8 h-8"/>
            </div>
          </div>
          <Link to="https://www.google.com" className="block mb-4">
            <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="Google Logo" className="mx-auto" />
          </Link>
          <div className="flex items-center justify-center mb-4">
            <div className="relative">
            <input type="text" placeholder="Search" className="border border-gray-300 rounded-lg px-4 py-2 pl-10 focus:outline-none focus:border-blue-500 input-text" />
              <AiOutlineSearch className="text-gray-600 absolute top-3 left-3" />

              <img src={mic} alt="Microphone" className="absolute top-2 right-10 w-6 h-6 cursor-pointer" />
              <img src={searchImage} alt="Search" className="absolute top-2 right-2 w-6 h-6 cursor-pointer" />

              
            </div>
          </div>
          {/* WhatsApp Button */}
          <a href="https://api.whatsapp.com/send?phone=1234567890" className="block mb-4">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1199px-WhatsApp.svg.png" alt="WhatsApp Icon" className="mx-auto w-8 h-8" />
          </a>
        </div>
      </div>
    </Router>
  );
}

export default FrontPage;
