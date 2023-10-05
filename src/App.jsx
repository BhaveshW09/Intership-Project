import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { AboutUs } from "./Components/AboutUs";
import { Footer } from "./Components/Footer";
function App() {
  return (
    <>
      <div className="">
        <div className=" hidden relative -z-50 lg:flex lg:justify-end flex-wrap">
          <img className="absolute" src="/Images/Rectangle.png" alt="" />
        </div>
        <nav className="relative mx-4 mt-5 z-0 lg:mt-10 flex gap-10 max-w-[1280px] items-center justify-between lg:m-auto ">
          <div className="flex items-center gap-10">
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
            <div>
              <ul className="hidden lg:flex items-center gap-6">
                <li>Home</li>
                <li>Network</li>
                <li>Product</li>
                <li>Technology</li>
                <li>Our Story</li>
                <li>Knowledge Center</li>
              </ul>
              <div className=" hidden">
                <AiOutlineMenu />
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-1 text-sm lg:gap-5 ">
            <button className=" border-2 px-3 py-1 border-black font-medium   lg:px-6 lg:py-2 rounded-2xl  lg:text-white  lg:border-white">
              Contact Us
            </button>
            <button className=" px-3 py-1 bg-[#7D59C3] text-white  font-medium lg:bg-white lg:text-[#7D59C3] lg:px-6 lg:py-2 rounded-2xl ">
              Log In
            </button>
          </div>
        </nav>

        {/* Hero Section */}
        <div className=" flex flex-col lg:flex-row gap-16 relative z-50  justify-between my-10 ">
          {/* Left */}
          <div className="max-w-[400px] lg:max-w-[600px] m-auto lg:ml-28 gap-20 flex flex-col ">
            <div className="flex flex-col gap-5">
              <p className=" font-semibold mb-[-15px] text-[#9E2349]">
                Welcone To The
              </p>
              <h1 className=" font  text-4xl lg:text-6xl font-bold text-[#2F3130]">
                Unprecedented Era of
                <span className=" text-[#9E2349]"> Real Estate Investing</span>
              </h1>
              <p className=" line-clamp-2">
                Lilypads uses sophisticated technologies for data-driven
                decisions in investing, managing and funding commercial real
                estate assets
              </p>
              <div className="">
                <button className=" py-3 px-6 rounded-2xl bg-[#7D59C3] text-white">
                  Start Investing Now <span></span>
                </button>
              </div>
            </div>

            <div className=" flex gap-5">
              <div>
                <h2 className=" text-3xl text-[#7D59C3] font-bold">658+</h2>
                <p className=" text-sm font-medium">Properties Registered</p>
              </div>
              <div>
                <h2 className=" text-3xl text-[#7D59C3] font-bold">658+</h2>
                <p className=" text-sm font-medium">Properties Registered</p>
              </div>
              <div>
                <h2 className=" text-3xl text-[#7D59C3] font-bold">658+</h2>
                <p className=" text-sm font-medium">Properties Registered</p>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="">
            <div className="  w-[300px]  flex lg:hidden relative -z-50 lg:justify-end">
              <img
                className="absolute left-[150px] h-[410px]"
                src="/Images/Rectangle.png"
                alt=""
              />
            </div>
            <div className=" flex justify-end gap-5">
              <div>
                <img
                  className=" max-h-[370px] lg:max-h-[750px] w-auto"
                  src="/Images/Group 48096398.png"
                  alt=""
                />
              </div>

              <div>
                <img
                  className="max-h-[370px] lg:max-h-[750px] w-auto"
                  src="/Images/Group 20793.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        {/* About us Section */}
        <AboutUs />

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}

export default App;
