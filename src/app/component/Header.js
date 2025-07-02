"use client";
import React,{useState} from "react";

function Header(){
    const [isColor,setIscolor]=useState(false);
        function changeColor(){
        setIscolor(!isColor);
      }
      
    

    return( 
        <div >
        <div className= { `${ isColor ? " bg-black text-white" : " bg-white text-black "} flex justify-evenly items-center min-h-[60px] backdrop-blur-md bg-opacity-50 p-2 fixed top-0 left-0 right-0 z-50`}>
            {/* logo */}
            <div>
               BHATTARAI
            </div>
            {/* hamburger */}
            <div className="hidden md:flex  space-x-4">
             <a href="#Home" >Home</a>
             <a href="#About" >About </a>
             <a href="#Photos" >Photos</a>
             <a href="#Contact" >contact us</a>

            </div>
            <button className="hover:cursor-pointer bg-blue-100" onClick={changeColor}>-Toggle menu-</button>
        </div>
        </div>
    );

}
export default Header;