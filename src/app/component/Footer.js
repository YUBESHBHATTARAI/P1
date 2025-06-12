"use client";
import React from "react";

function Footer(){


    return(
        <>
        <footer className= "   lg:text-gray-500 bg-gray-800  p-4 md:p-2 md:w-full sm:w-full md:bottom-0 sm:bottom-0 left-0 right-0 sm:text-white md:text-amber-400 text-blue-400">
            <div className="flex lg:flex-row sm:flex-col justify-evenly m-2">
                {/* logo */}
                <div>
                     <div className="text-black text-3xl font-serif font-bold">BHATTARAI</div>
                </div>
                {/* others */}
                <div>
                    {/* links */}
                    <div className="flex flex-col">
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