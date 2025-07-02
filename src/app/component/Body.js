"use client";
import React, {useState}  from "react";
function Body(){
  

    return(
        <>
        <div className=" pt-[100px] flex flex-col items-center justify-center min-h-screen ">
        {/* left */}
        
           <div className=" bg-amber-600 p-3 ">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus optio quos quasi expedita ipsum      pariatur sunt ea architecto modi nihil, culpa accusamus cumque ipsam fugiat? Earum neque      praesentium in consequuntur.
            </div>
           
        {/* right */}
         <div>
             <div className="shadow-2xl m-2 p-5 bg-red-300 ">
              <img className="h-[400px]   rounded-xl   "  src="/all.png"/>
            </div>
         </div>

        
        </div>
        </>
    )

}
export default  Body;