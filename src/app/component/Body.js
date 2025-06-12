"use client";
import React, {useState}  from "react";
function Body(){
    
     const[body,setBody]=useState(0);

    return(
        <>
        <div className="flex justify-evenly items-center min-h-screen">
        {/* left */}
        <div>
        <div className="text-2xl font-sans p-2 mx-1 h-[400px] w-[600px]  rounded-md bg-red-300 shadow-xl md:p-1">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus optio quos quasi expedita ipsum pariatur sunt ea architecto modi nihil, culpa accusamus cumque ipsam fugiat? Earum neque praesentium in consequuntur.        </div>
        </div>
        {/* right */}
        <div>
        <div className="shadow-2xl m-2 p-5 bg-red-300 ">
         <img className="h-[400px] w-[600px]  rounded-xl   "  src="/all.png"/>
        </div>
        </div>

        </div>
        </>
    )

}
export default  Body;