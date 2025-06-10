"use client";
import React, {useState}  from "react";
function Body(){
    
     const[body,setBody]=useState(0);

    return(
        <>
        <div>
        {/* left */}
        <div>
        <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus omnis culpa exercitationem harum dolor dolorem odio ipsam corrupti? Eum facere officia sequi voluptatum explicabo. Voluptatum doloribus nobis illo id temporibus?

        </div>
        </div>
        {/* right */}
        <div>
        <div>
         <img src="f1/public/all.png"/>
        </div>
        </div>

        </div>
        </>
    )

}
export default  Body;