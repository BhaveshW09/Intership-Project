import React from "react";
import { BsDash } from "react-icons/bs";

export const Herosection = () => {
  return (
    <div>
      <div className="  flex flex-col  lg:flex-row  md:gap-44 lg:gap-16 justify-between mt-10 relative ">
        {/* Left */}
        <div className=" max-w-[360px] md:max-w-sm lg:max-w-lg  mx-auto  lg:ml-28 gap-20 flex flex-col ">
          <div className="flex flex-col lg:gap-5 gap-3">
            <div className=" flex items-center gap-1">
              <BsDash className=" mt-4 h-6" />
              <p className=" font-semibold mb-[-15px] text-[#9E2349]">
                Welcone To The
              </p>
            </div>

            <h1 className=" font  text-4xl lg:text-6xl font-bold text-[#2F3130]">
              Unprecedented Era of
              <span className=" text-[#9E2349]"> Real Estate Investing</span>
            </h1>
            <p className=" line-clamp-2">
              Lilypads uses sophisticated technologies for data-driven decisions
              in investing, managing and funding commercial real estate assets
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
        <div className=" mt-40 lg:mt-0">
          {/* Background Image */}
          <div className="  relative ">
            <img
              className=" max-h-[420px] sm:max-h-[420px] lg:max-h-[1000px] w-auto absolute -mt-32 right-0 -z-20"
              src="/Images/Rectangle.png"
              alt=""
            />
          </div>
          <div className=" flex justify-end gap-5 lg:mb-16 md:mb-8 mb-6 lg:mt-0 -mt-[100px]  sm:-mt-20">
            <div>
              <img
                className=" max-h-[370px] sm:max-h[650px]  lg:max-h-[700px] w-auto"
                src="/Images/Group 48096398.png"
                alt=""
              />
            </div>

            <div>
              <img
                className="max-h-[370px] sm:max-h[650px] lg:max-h-[700px] w-auto"
                src="/Images/Group 20793.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
