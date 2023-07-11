import React from "react";
import apple from "../images/BrandsIcon/apple.png";
import samsung from "../images/BrandsIcon/samsung.png";
import windows from "../images/BrandsIcon/windows.png";
import lenevo from "../images/BrandsIcon/lenovo.png";
import huawei from "../images/BrandsIcon/huawei.png";
import blackberry from "../images/BrandsIcon/blackberry.png";
import lg from "../images/BrandsIcon/lg.png";
import toshiba from "../images/BrandsIcon/toshiba.png";
import sony from "../images/BrandsIcon/sony.png";

const Clients = () => {
  return (
  
      <section className=" bg-slate-200 container mx-auto mb-10 grid place-content-center text-center">
        <div className=" md:flex justify-center items-center gap-5 sm:gap-8 md:gap-12 md:gap-x-48">
          <div className=" w-[50vh]">
            <h1 className=" mb-4 animate-bounce text-lg sm:text-3xl text-center font-extrabold text-green-600">
              My Clients
            </h1>
            <h2 className=" text-xl">
              My take care of <br /> more
              <span className=" underline underline-offset-8 decoration-green-600">
                then 500k
              </span>
              <br /> customer
            </h2>
          </div>

          {/* brand name grid */}

          <div className=" items-center text-center grid sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-8 md:gap-12 my-10 sm:mt-10"> 

            <div>
              <img className=" h- h-14" src={apple} alt="" />
              <h3 className=" text-lg"> Apple </h3>
            </div>

            <div>
              <img className=" h- h-14" src={samsung} alt="" />
              <h3 className=" text-lg"> samsung </h3>
            </div>

            <div>
              <img className=" h- h-14" src={windows} alt="" />
              <h3 className=" text-lg"> windows </h3>
            </div>

            <div>
              <img className=" mix-blend-multiply h- h-14" src={sony} alt="" />
              <h3 className=" text-lg"> sony </h3>
            </div>

            <div>
              <img className=" h- h-14" src={lg} alt="" />
              <h3 className=" text-lg"> LG </h3>
            </div>

            <div>
              <img className=" h- h-14" src={huawei} alt="" />
              <h3 className=" text-lg"> Huawei </h3>
            </div>

            <div>
              <img className=" h- h-14" src={toshiba} alt="" />
              <h3 className=" text-lg"> Toshiba </h3>
            </div>

            <div>
              <img className=" h- h-14" src={lenevo} alt="" />
              <h3 className=" text-lg"> Lenovo </h3>
            </div>

            <div>
              <img className=" h- h-14" src={blackberry} alt="" />
              <h3 className=" text-lg"> BlackBerry </h3>
            </div>

          </div>



        </div>
      </section>
    
  );
};

export default Clients;
