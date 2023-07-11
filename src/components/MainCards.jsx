import React from "react";
import devimg from "../images/web-development.png";

const MainCards = () => {
  return (
    <main className="container mx-auto">
      <section className=" mt-20">
        <h2 className=" text-3xl text-center">Our Service</h2>

        {/* main cards div  */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 my-7">
          {/* cards info code */}

          {/* 1 */}

          <div className=" bg-slate-200 p-8 rounded-lg text-center border-4 border-slate-200 hover:border-red-200 hover:scale-[102%] cursor-pointer transition-all">
            <img className=" w-1/2 mx-auto" src={devimg} alt="" />
            <h4 className=" text-lg underline underline-offset-8 my-5">
              Front-End Development{" "}
            </h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
          </div>

          {/* 2 */}
          <div className=" bg-slate-200 p-8 rounded-lg text-center border-4 border-slate-200 hover:border-red-200 hover:scale-[102%] cursor-pointer transition-all">
            <img className=" w-1/2 mx-auto" src={devimg} alt="" />
            <h4 className=" text-lg underline underline-offset-8 my-5">
              Front-End Development{" "}
            </h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
          </div>
          {/* 3 */}
          <div className=" bg-slate-200 p-8 rounded-lg text-center border-4 border-slate-200 hover:border-red-200 hover:scale-[102%] cursor-pointer transition-all">
            <img className=" w-1/2 mx-auto" src={devimg} alt="" />
            <h4 className=" text-lg underline underline-offset-8 my-5">
              Front-End Development{" "}
            </h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
          </div>
          {/* 4 */}
          <div className=" bg-slate-200 p-8 rounded-lg text-center border-4 border-slate-200 hover:border-red-200 hover:scale-[102%] cursor-pointer transition-all">
            <img className=" w-1/2 mx-auto" src={devimg} alt="" />
            <h4 className=" text-lg underline underline-offset-8 my-5">
              Front-End Development{" "}
            </h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
          </div>
          {/* 5 */}
          <div className=" bg-slate-200 p-8 rounded-lg text-center border-4 border-slate-200 hover:border-red-200 hover:scale-[102%] cursor-pointer transition-all">
            <img className=" w-1/2 mx-auto" src={devimg} alt="" />
            <h4 className=" text-lg underline underline-offset-8 my-5">
              Front-End Development{" "}
            </h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
          </div>
          {/* 6 */}
          <div className=" bg-slate-200 p-8 rounded-lg text-center border-4 border-slate-200 hover:border-red-200 hover:scale-[102%] cursor-pointer transition-all">
            <img className=" w-1/2 mx-auto" src={devimg} alt="" />
            <h4 className=" text-lg underline underline-offset-8 my-5">
              Front-End Development{" "}
            </h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MainCards;
