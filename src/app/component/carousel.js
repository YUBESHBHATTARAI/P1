"use client"



export default function Carousel() {


    return(
        <div className="w-3/4 m-auto bg-red-500">
            <div className="mt-20">
                {data.map((item)=>(
                    
                    <div className="bg-white text-black h-[400px] rounded-xl " key={item.id}>
                    <div className=" h-56 rounded-t-xl bg-blue-400 flex justify-center items-center " >
                        <img src={item.img} alt="" className="h-44 w-44  rounded-full" />
                    </div>
                    <div className="flex flex-col justify-center items-center ">
                        <h1 className="">{item.name}</h1>
                        <p className="">{item.discp}</p>
                       
                        <button className="">Read more</button>

                    </div>
                </div>
                ))
                
                }
               

                
            </div>
       </div>
    )

}
    const data=[
{   id:1,
       name:"yubeshbhattarai",
       img:"/chasmawalla.JPG", 
       discp:"lorem bista "
    },
    {   id:2,
       name:"aru koi hola ",
       img:"/demo.jpg", 
       discp:"lorence bista "
    },
    {   id:3,
       name:"someone ele",
       img:"/swimming .jpg", 
       discp:"fdfdsfs bista "
    },


    ]
