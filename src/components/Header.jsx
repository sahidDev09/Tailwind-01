import React from "react";
import mainimg from "../images/hero-img.png";

const Header = () => {
  return (
    <header>
      <div className=" sm:flex justify-around items-center text-center h-[80vh] px-10 pt-10">
        <div>
          <h1 className=" text-2xl sm:text-5xl mb-5 sm:mb-14">
            Tailwind 01 : Learn <br />
            Programming.
          </h1>
          <button className=" bg-indigo-600 text-white px-7 py-3 rounded-full text-xl hover:bg-[#F65023] transition">
            Join : Tailwind master course
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 inline-block">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
              />
            </svg>
          </button>
        </div>

        <div className="mainimgID">
          <img src={mainimg} alt="" />
        </div>
      </div>
    </header>
  );
};

export default Header;
