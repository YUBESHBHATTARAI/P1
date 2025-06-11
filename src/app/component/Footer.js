"use Client";
import React from "react";

function Footer(){


    return(
        <>
        <div className="text-gray-500 bg-gray-200  p-4  ">
            <footer className="flex flex-row justify-evenly m-2">
                {/* logo */}
                <div>
                     <div className="text-black text-3xl font-serif font-bold">BHATTARAI</div>
                </div>
                {/* others */}
                <div>
                    {/* links */}
                    <div className="flex flex-col">
                      <a href="#home" className="text-black hover:text-green-800">Home</a>
                      <a href="#About" className="text-black hover:text-green-800">About</a>
                      <a href="#Contact Us " className="text-black hover:text-green-800">Contact Us</a>
                      <a href="#Cards" className="text-black hover:text-green-800">Cards</a>
                    </div>
                </div>
            </footer>
            <div className="text-center mt-4">
                {new Date().getFullYear()} &copy; All rights reserved.
            </div>
            <div  className="text-center mt-4">
                <h1 className="text-black">Developed by <span className="text-green-800 italic">Yubesh Bhattarai</span></h1>
            </div>
            
        </div>
        </>
    )

}
export default Footer;