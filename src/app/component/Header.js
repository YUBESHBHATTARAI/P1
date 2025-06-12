"use client";

function Header(){

    return(
        <>
        <div className="flex justify-evenly items-center min-h-[80px] bg-green-400 backdrop-blur-md bg-opacity-50 p-3 fixed top-0 left-0 right-0 z-50">
            {/* logo */}
            <div>
               BHATTARAI
            </div>
            {/* hamburger */}
            <div className="hidden md:flex text-black space-x-4">
             <a href="#Home" >home</a>
             <a href="#About" >About </a>
             <a href="#Photos" >Photos</a>
             <a href="#Contact" >contact us</a>
            </div>
        </div>
        </>
    );

}
export default Header;