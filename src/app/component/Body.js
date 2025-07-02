"use client";
import React, {useState}  from "react";
function Body(){
  

    return(
        <>
        <div className="  bg-pink-400 pt-[80px] flex flex-col items-center justify-center mx-9 my-1 w-[140vw] min-h-screen   md:w-[100vw] md:flex-row  md:justify-around">
        {/* left */}
        
           <div className=" bg-amber-600 p-3 h-[calc(100vh-65vh)] md:h-[calc(100vh-40vh)] md:w-[35vw]  m-4 md:m-1  text-xl  md:text-4xl ">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus optio quos quasi expedita ipsum      pariatur sunt ea architecto modi nihil, culpa accusamus cumque ipsam fugiat? Earum neque      praesentium in consequuntur.
            </div>
           
        {/* right */}
         <div>
             <div className="shadow-2xl m-2 p-5 bg-red-300  ">
              <img className="h-[400px]   rounded-xl   "  src="/all.png"/>
            </div>
         </div>

        
        </div>
        </>
    )

}
export default  Body;