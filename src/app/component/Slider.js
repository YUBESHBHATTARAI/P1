"use client"

import React,{useState,useEffect} from "react";

const data=[
    {
        id:1,
        name:"yubesh",
        role:"developer",
        img:"/all.png",
    },
    {
        id:1,
        name:"yabush",
        role:"scientit",
        img:"/all.png",
    },
    {
        id:1,
        name:"sachibn",
        role:"behula ",
        img:"/all.png",
    },
    {
        id:1,
        name:"sachdgfg",
        role:"feuffg",
        img:"/all.png",
    },
    {
        id:1,
        name:"yubesh",
        role:"developer",
        img:"/all.png",
    },
    {
        id:1,
        name:"yubesh",
        role:"developer",
        img:"/all.png",
    },
]

export default function Slider(){
      const [currentdata,setCurrentdata]=useState(0)



    return(
        <>
        <div>
            <div className=" flex flex-col justify-center items-center">
                {/* image container */}
                <div className=" h-40 w-40 ">
                  <img src="./all.png" />

                </div>
               {/* text container */}
               <div>
                  <h1>Name</h1>
                  <p>role</p>
               </div>
               h1
            </div>
            
            </div></>
    )
}