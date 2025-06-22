"use client";
import React from "react";
function Footer(){





    return(
        <>
        <footer className= "  m-1 w-[680px] bg-gray-200 text-black p-6 lg:w-full">
            <div className="  flex flex-col  md:flex-row md:justify-evenly md:space-y-1 lg:"> 
                {/* logo */}
                <div>
                     <div className="text-black text-3xl font-serif font-bold">BHATTARAI</div>
                </div>
                {/* others */}
                <div>
                    {/* links */}
                    <div className="flex flex-col my-1">
                      <a href="#home" className="text-black hover:text-green-800 hover:underline active:text-xl active:text-red-500">Home</a>
                      <a href="#About" className="text-black hover:text-green-800 hover:underline active:text-xl active:text-red-500">About</a>
                      <a href="#Cards" className="text-black hover:text-green-800 hover:underline active:text-xl active:text-red-500">Cards</a>
                      <a href="#Contact Us" className="text-black hover:text-green-800 hover:underline active:text-xl active:text-red-500">Contact Us</a>
                    </div>
                </div>
            </div>
            <hr />
            <div className="text-center mt-4">
                {new Date().getFullYear()} &copy; All rights reserved.
            
            
                <h1 className="text-black">Developed by <span className="text-green-800 italic">Yubesh Bhattarai</span></h1>
            </div>
            
        </footer>
        </>
    )

}
export default Footer;