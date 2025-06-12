"use client";
import React, {useState}  from "react";
function Body(){
    
     const[body,setBody]=useState(0);

    return(
        <>
        <div className="flex justify-center items-center">
        {/* left */}
        <div>
        <div className="text-2xl font-cursive overflow-auto">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi praesentium dolorum pariatur eveniet distinctio laboriosam delectus quisquam, vel eius maiores explicabo odit ab sapiente iure, et omnis rem earum fuga alias! Cupiditate at minus labore dicta alias repellendus deserunt temporibus ipsum id facere. Tenetur ut animi maiores dolorem. Dolore nam similique repudiandae illum ex quas excepturi? Nostrum itaque eos inventore consequuntur deserunt excepturi sit odio illum, delectus, totam vitae commodi perferendis, necessitatibus deleniti dolorem tempore aut officia eum. Labore vel commodi enim odio repudiandae tenetur libero deleniti illo perferendis nam architecto nesciunt eveniet accusamus doloribus, beatae, adipisci esse molestias. Assumenda.
        </div>
        </div>
        {/* right */}
        <div>
        <div className="shadow-2xl m-2 p-5">
         <img className="h-[400px] w-[600px]  rounded-xl "  src="/all.png"/>
        </div>
        </div>

        </div>
        </>
    )

}
export default  Body;