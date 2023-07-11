import React from "react";

const Pricing = () => {
  return (
    <>
    <h2 className=" text-xl sm:text-2xl md:text-3xl font-medium my-10">Pricing Plans</h2>
    <section className=" container mx-auto mt-8 text-white mb-5">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12 md:gap-15 justify-center items-center">
        <div className=" text-start bg-blue-500 p-10 hover:bg-blue-700 hover:scale-[102%] transition-all 0.3s  rounded-lg">
          <p className="my-2">Basic Plan</p>
          <h2 className="">
            $
            <span className=" text-xl sm:text-2xl md:text-5xl font-bold">
              19.00
            </span>
            /month
          </h2>
          <hr className=" my-5" />
          <ul className=" list-disc list-inside leading-10 text-xl">
            <li>500 User Activities</li>
            <li>Unlimited Access</li>
            <li>No Hidden Charge</li>
            <li>03 Time Updates</li>
            <li>Figma Source File</li>
            <li>Many More Facilities</li>
          </ul>
          <button className="border transition-all bg-blue-500 px-5 py-2 hover:bg-orange-500 rounded-md block mx-auto mt-4 text-white font-bold text-center">
            Purchese
          </button>
        </div>

        <div className=" text-start bg-blue-500 p-10 hover:bg-blue-700 hover:scale-[102%] transition-all 0.3s  rounded-lg">
          <p className="my-2">Pro Plan</p>
          <h2 className="">
            $
            <span className=" text-xl sm:text-2xl md:text-5xl font-bold ml-1">
              41.00
            </span>
            /month
          </h2>
          <hr className=" my-5" />
          <ul className=" list-disc list-inside leading-10 text-xl">
            <li>500 User Activities</li>
            <li>Unlimited Access</li>
            <li>No Hidden Charge</li>
            <li>03 Time Updates</li>
            <li>Figma Source File</li>
            <li>Many More Facilities</li>
          </ul>
          <button className="border transition-all bg-blue-500 px-5 py-2 hover:bg-orange-500 rounded-md block mx-auto mt-4 text-white font-bold text-center">
            Purchese
          </button>
        </div>

        <div className=" text-start bg-blue-500 p-10 hover:bg-blue-700 hover:scale-[102%] transition-all 0.3s  rounded-lg">
          <p className="my-2">Master Plan</p>
          <h2 className="">
            $
            <span className=" text-xl sm:text-2xl md:text-5xl font-bold ml-1">
              99
            </span>
            /month
          </h2>
          <hr className=" my-5" />
          <ul className=" list-disc list-inside leading-10 text-xl">
            <li>500 User Activities</li>
            <li>Unlimited Access</li>
            <li>No Hidden Charge</li>
            <li>03 Time Updates</li>
            <li>Figma Source File</li>
            <li>Many More Facilities</li>
          </ul>
          <button className="border transition-all bg-blue-500 px-5 py-2 hover:bg-orange-500 rounded-md block mx-auto mt-4 text-white font-bold text-center">
            Purchese
          </button>
        </div>
      
      </div>
    </section>
    </>
    
  );
};

export default Pricing;
