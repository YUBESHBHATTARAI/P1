"use client";
import React, {useState}  from "react";
function Body(){
  

    return(
        <>
        <div className="  bg-pink-400 pt-[50px] flex flex-col h-screen items-center justify-center mx-9  my-1 w-[140vw] min-h-screen   md:w-[90vw] md:flex-row md:flex md:items-center md:justify-center lg:w-[100vw]  lg:flex lg:flex-row  lg:items-center lg:justify-around lg:m-0 lg:gap-4 ">
        {/* left */}
       
           <div className=" bg-amber-600 p-3 h-[calc(100vh-65vh)] md:h-[calc(100vh-40vh)] md:w-[35vw]  m-4 md:m-1  text-xl  md:text-3xl lg:text-4xl lg:font-bold ">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus optio quos quasi expedita ipsum      pariatur sunt ea architecto modi nihil, culpa accusamus cumque ipsam fugiat? Earum neque      praesentium in consequuntur.
            </div>
           
         {/* right */}
         <div>
             <div className="shadow-2xl m-2 p-5 bg-red-300  ">
              <img className="h-[400px]   rounded-xl  md:md:h-[300px] md:w-[300px] lg:h-[450px] lg:w-[500px] "  src="/all.png" />
            </div>
            </div>


        </div>
        </>
    )

}


export default  Body;