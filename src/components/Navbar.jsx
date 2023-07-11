import React from "react";

const Navbar = () => {
  return (
    <nav className=" bg-[] shadow-md sticky top-0 bg-white z-10">
        <div className=" container mx-auto">
            <div className="sm:flex justify-between py-5 items-center">
                <div>
                    <a className=" font-bold text-black text-xl sm:text-3xl" href="/#"> <span className=" text-[#F65023]">T</span>ailwind css <span className="text-[#F65023]">01</span> </a> 
                </div>
                <ul className="sm:flex text-xl text-black border-t sm:border-none transition-all">
                    <li> <a className="p-3 text-[#F65023]  " href="/#"> Home </a></li> 
                    <li> <a className="p-3 hover:text-[#F65023]"href="/#"> Products </a></li>  
                    <li> <a className="p-3 hover:text-[#F65023]  " href="/#"> Blog </a></li>  
                    <li> <a className="p-3 hover:text-[#F65023] " href="/#"> Portfolio </a></li>  
                    <li> <a className="p-3 hover:text-[#F65023]  " href="/#"> contact </a></li>  
                </ul>
            </div>
        </div>
    </nav>
  );
};

export default Navbar;
