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
        id:2,
        name:"yabush",
        role:"scientit",
        img:"/all.png",
    },
    {
        id:3,
        name:"sachibn",
        role:"behula ",
        img:"/all.png",
    },
    {
        id:4,
        name:"sachdgfg",
        role:"feuffg",
        img:"/all.png",
    },
    {
        id:5,
        name:"yubesh",
        role:"developer",
        img:"/all.png",
    },
    {
        id:6,
        name:"yubesh",
        role:"developer",
        img:"/all.png",
    },
]

export default function Slider(){
      const [currentdata,setCurrentdata]=useState(0);
        useEffect(
            ()=>{
            const interval =setInterval( ()=>
                setCurrentdata((prev)=>(prev==data.length-1 ? 0 : prev+1 ))
                ,2000
            )
            return()=>clearInterval(interval)  
             } 
             ,[] )
                  

    return(
        <>
        <div>
            <div className=" flex flex-col justify-center items-center">
                {/* image container */}
                <div className=" h-40 w-40 ">
                  <img src={data[currentdata].img} />

                </div>
               {/* text container */}
               <div>
                  <h1>{data[currentdata].name}</h1>
                  <p>{data[currentdata].role}</p>
               </div>
             
            </div>
            
            </div></>
    )
}