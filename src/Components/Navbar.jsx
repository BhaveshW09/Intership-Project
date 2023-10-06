import React, { useState } from "react";

import { AiOutlineMenu } from "react-icons/ai";
import Button from "./Button";

export const Navbar = () => {
  let Links = [
    { name: "Home", link: "/" },
    { name: "Network", link: "/" },
    { name: "Product", link: "/" },
    { name: "Technology", link: "/" },
    { name: "Our Story", link: "/" },
    { name: "Knowledge Center", link: "/" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <>
      <div className=" max-w-[20em] relative lg:flex lg:justify-between  lg:items-center  sm:max-w-lg md:max-w-xl lg:max-w-[1280px] py-4 mx-auto ">
        {/* Navlist */}
        <div className="md:flex items-center justify-between lg:px-0 md:px-10">
          <div
            className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800"
          >
            <svg
              width="90"
              height="54"
              viewBox="0 0 90 54"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M90 40.9651C84.9525 47.5181 77.6577 52.1985 69.1002 53.5849C60.3014 55.0104 51.7771 52.6929 44.9922 47.7653C50.0397 41.2123 57.3364 36.5319 65.892 35.1455C74.6889 33.7221 83.2151 36.0375 90 40.9651Z"
                fill="#322D76"
              />
              <path
                d="M90 40.9651C84.9525 47.5181 77.6577 52.1985 69.1002 53.5849C60.3014 55.0104 51.7771 52.6929 44.9922 47.7653C50.0397 41.2123 57.3364 36.5319 65.892 35.1455C74.6889 33.7221 83.2151 36.0375 90 40.9651Z"
                stroke="white"
              />
              <path
                d="M0 40.8456C6.61232 36.0705 14.8718 33.7612 23.453 34.9869C32.2753 36.2476 39.821 41.0145 44.992 47.7653C38.3797 52.5404 30.1182 54.8497 21.5391 53.624C12.7207 52.3612 5.17298 47.5943 0 40.8456Z"
                fill="#322D76"
              />
              <path
                d="M0 40.8456C6.61232 36.0705 14.8718 33.7612 23.453 34.9869C32.2753 36.2476 39.821 41.0145 44.992 47.7653C38.3797 52.5404 30.1182 54.8497 21.5391 53.624C12.7207 52.3612 5.17298 47.5943 0 40.8456Z"
                stroke="white"
              />
              <g opacity="0.8">
                <path
                  d="M74.9063 11.7876C75.1455 20.2152 72.5159 28.7581 66.886 35.6695C61.0973 42.7745 53.1946 46.8555 44.994 47.766C44.7547 39.3384 47.3844 30.7955 53.0142 23.8841C58.801 16.779 66.7036 12.6961 74.9063 11.7876Z"
                  fill="#A6244B"
                />
                <path
                  d="M74.9063 11.7876C75.1455 20.2152 72.5159 28.7581 66.886 35.6695C61.0973 42.7745 53.1946 46.8555 44.994 47.766C44.7547 39.3384 47.3844 30.7955 53.0142 23.8841C58.801 16.779 66.7036 12.6961 74.9063 11.7876Z"
                  stroke="white"
                />
              </g>
              <g opacity="0.8">
                <path
                  d="M15.5956 11.3201C23.5629 12.3315 31.2106 16.3362 36.8758 23.2167C42.6998 30.2909 45.3608 39.1078 44.9922 47.764C37.0248 46.7525 29.3752 42.7458 23.7119 35.8674C17.8879 28.7953 15.2269 19.9763 15.5956 11.3201Z"
                  fill="#A6244B"
                />
                <path
                  d="M15.5956 11.3201C23.5629 12.3315 31.2106 16.3362 36.8758 23.2167C42.6998 30.2909 45.3608 39.1078 44.9922 47.764C37.0248 46.7525 29.3752 42.7458 23.7119 35.8674C17.8879 28.7953 15.2269 19.9763 15.5956 11.3201Z"
                  stroke="white"
                />
              </g>
              <path
                d="M45.4531 0C50.8496 6.23983 54.1401 14.5253 54.1401 23.6223C54.1401 32.9749 50.6613 41.4725 44.9922 47.7659C39.5957 41.5261 36.3052 33.2386 36.3052 24.1435C36.3052 14.7931 39.784 6.29339 45.4531 0Z"
                fill="#765EA8"
              />
              <path
                d="M45.4531 0C50.8496 6.23983 54.1401 14.5253 54.1401 23.6223C54.1401 32.9749 50.6613 41.4725 44.9922 47.7659C39.5957 41.5261 36.3052 33.2386 36.3052 24.1435C36.3052 14.7931 39.784 6.29339 45.4531 0Z"
                stroke="white"
              />
            </svg>
          </div>

          <div
            onClick={() => setOpen(!open)}
            className="text-3xl absolute right-0  top-6 cursor-pointer md:hidden"
          >
            <AiOutlineMenu> name={open ? "close" : "menu"}</AiOutlineMenu>
          </div>

          <ul
            className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white lg:bg-transparent md:z-auto z-[10] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
              open ? "top-20 " : "top-[-490px]"
            }`}
          >
            {Links.map((link) => (
              <li
                key={link.name}
                className="md:ml-8 text-sm font-semibold md:my-0 my-7"
              >
                <a
                  href={link.link}
                  className="text-gray-800 hover:text-gray-400 duration-500"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* Buttons */}
        <div className="  lg:mt-2   hidden lg:flex gap-1 text-sm lg:gap-5 ">
          <button className=" border-2 px-3 py-1 border-black font-medium   lg:px-6 lg:py-2 rounded-2xl  lg:text-white  lg:border-white">
            Contact Us
          </button>
          <button className=" px-3 py-1 bg-[#7D59C3] text-white  font-medium lg:bg-white lg:text-[#7D59C3] lg:px-6 lg:py-2 rounded-2xl ">
            Log In
          </button>
        </div>
      </div>
    </>
  );
};
<div className="max-w-[20em] relative lg:flex lg:justify-center lg:items-center  sm:max-w-lg md:max-w-xl lg:max-w-[1280px]  mx-auto">
  <div className=" lg:w-full  relative z-50 mx-auto flex items-center lg:justify-between  ">
    {/* Navbar */}
    <div className=" w-full lg:w-full  lg:gap-16   mt-3 flex items-center lg:justify-start justify-between  ">
      {/* Logo */}
      <div>
        <svg
          width="90"
          height="54"
          viewBox="0 0 90 54"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M90 40.9651C84.9525 47.5181 77.6577 52.1985 69.1002 53.5849C60.3014 55.0104 51.7771 52.6929 44.9922 47.7653C50.0397 41.2123 57.3364 36.5319 65.892 35.1455C74.6889 33.7221 83.2151 36.0375 90 40.9651Z"
            fill="#322D76"
          />
          <path
            d="M90 40.9651C84.9525 47.5181 77.6577 52.1985 69.1002 53.5849C60.3014 55.0104 51.7771 52.6929 44.9922 47.7653C50.0397 41.2123 57.3364 36.5319 65.892 35.1455C74.6889 33.7221 83.2151 36.0375 90 40.9651Z"
            stroke="white"
          />
          <path
            d="M0 40.8456C6.61232 36.0705 14.8718 33.7612 23.453 34.9869C32.2753 36.2476 39.821 41.0145 44.992 47.7653C38.3797 52.5404 30.1182 54.8497 21.5391 53.624C12.7207 52.3612 5.17298 47.5943 0 40.8456Z"
            fill="#322D76"
          />
          <path
            d="M0 40.8456C6.61232 36.0705 14.8718 33.7612 23.453 34.9869C32.2753 36.2476 39.821 41.0145 44.992 47.7653C38.3797 52.5404 30.1182 54.8497 21.5391 53.624C12.7207 52.3612 5.17298 47.5943 0 40.8456Z"
            stroke="white"
          />
          <g opacity="0.8">
            <path
              d="M74.9063 11.7876C75.1455 20.2152 72.5159 28.7581 66.886 35.6695C61.0973 42.7745 53.1946 46.8555 44.994 47.766C44.7547 39.3384 47.3844 30.7955 53.0142 23.8841C58.801 16.779 66.7036 12.6961 74.9063 11.7876Z"
              fill="#A6244B"
            />
            <path
              d="M74.9063 11.7876C75.1455 20.2152 72.5159 28.7581 66.886 35.6695C61.0973 42.7745 53.1946 46.8555 44.994 47.766C44.7547 39.3384 47.3844 30.7955 53.0142 23.8841C58.801 16.779 66.7036 12.6961 74.9063 11.7876Z"
              stroke="white"
            />
          </g>
          <g opacity="0.8">
            <path
              d="M15.5956 11.3201C23.5629 12.3315 31.2106 16.3362 36.8758 23.2167C42.6998 30.2909 45.3608 39.1078 44.9922 47.764C37.0248 46.7525 29.3752 42.7458 23.7119 35.8674C17.8879 28.7953 15.2269 19.9763 15.5956 11.3201Z"
              fill="#A6244B"
            />
            <path
              d="M15.5956 11.3201C23.5629 12.3315 31.2106 16.3362 36.8758 23.2167C42.6998 30.2909 45.3608 39.1078 44.9922 47.764C37.0248 46.7525 29.3752 42.7458 23.7119 35.8674C17.8879 28.7953 15.2269 19.9763 15.5956 11.3201Z"
              stroke="white"
            />
          </g>
          <path
            d="M45.4531 0C50.8496 6.23983 54.1401 14.5253 54.1401 23.6223C54.1401 32.9749 50.6613 41.4725 44.9922 47.7659C39.5957 41.5261 36.3052 33.2386 36.3052 24.1435C36.3052 14.7931 39.784 6.29339 45.4531 0Z"
            fill="#765EA8"
          />
          <path
            d="M45.4531 0C50.8496 6.23983 54.1401 14.5253 54.1401 23.6223C54.1401 32.9749 50.6613 41.4725 44.9922 47.7659C39.5957 41.5261 36.3052 33.2386 36.3052 24.1435C36.3052 14.7931 39.784 6.29339 45.4531 0Z"
            stroke="white"
          />
        </svg>
      </div>

      {/* List Item */}
      <div className="">
        <ul className="w-full  hidden lg:flex  items-center gap-6">
          <li>Home</li>
          <li>Network</li>
          <li>Product</li>
          <li>Technology</li>
          <li>Our Story</li>
          <li>Knowledge Center</li>
        </ul>
        <div className=" lg:hidden">
          <AiOutlineMenu />
        </div>
      </div>
    </div>

    {/* Buttons */}
    <div className=" lg:mt-2 lg:w-80  hidden lg:flex gap-1 text-sm lg:gap-5 ">
      <button className=" border-2 px-3 py-1 border-black font-medium   lg:px-6 lg:py-2 rounded-2xl  lg:text-white  lg:border-white">
        Contact Us
      </button>
      <button className=" px-3 py-1 bg-[#7D59C3] text-white  font-medium lg:bg-white lg:text-[#7D59C3] lg:px-6 lg:py-2 rounded-2xl ">
        Log In
      </button>
    </div>
  </div>
</div>;
