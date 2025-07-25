import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div
      className=" pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden"
      id="Footer"
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center ">
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <img src={assets.logo_dark} alt="" />
          <p className="text-gray-400 mt-4">
           Lorem ipsum, dolor
            sit amet consectetur adipisicing elit. Inventore aliquid voluptas
            aliquam alias nam? Voluptatibus repudiandae in sit! Nihil, aliquam!
          </p>
        </div>
        <div className="w-full md:w-1/5 mb-8 md:mb-0">
          <h3 className="text-white text-lg font-bold mb-4">Company</h3>
          <ul className="flex flex-col gap-2 text-gray-400">
            <li className="text-gray-400 mb-2 hover:text-white">
              <a href="#Header">Home</a>
            </li>
            <li className="text-gray-400 mb-2 hover:text-white">
              <a href="#About">About Us</a>
            </li>
            <li className="text-gray-400 mb-2 hover:text-white">
              <a href="#Contact">Contact Us</a>
            </li>
            <li className="text-gray-400 mb-2 hover:text-white">
              <a href="#Contact">Privacy policy</a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/3 ">
          <h3 className="text-white text-lg font-bold mb-4">
            Suscribe to our newsletter
          </h3>
          <p className="text-gray-400 mb-4 max-w-80">
            Tha latest news, articles and resources, sent to your inbox weekly.
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-auto"
            />
            <button className="py-2 px-4 rounded bg-blue-500 text-white">
              Suscribe
            </button>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 py-4 mt-10 pt-6 text-center text-gray-500">
          © 2025 Real Estate Company. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
