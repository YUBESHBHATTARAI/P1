'use client';
import React, { useState, useRef } from 'react';
import { FaPhoneAlt } from 'react-icons/fa';



const Navbar = () => {
   const [navbar, setNavbar] = useState(false);
   const toggleMenu = () => {
      setNavbar(!navbar);
   };

   // Create refs for the sections
   const homeRef = useRef(null);
   const aboutRef = useRef(null);
   const cardRef = useRef(null);


   // Function to scroll to the sections
   const scrollToSection = (section) => {
      section.current.scrollIntoView({
         behavior: 'smooth',
         block: 'start',
      });
      setNavbar(false); 
   };

   const scrolltoTop = () => {
      
      window.scrollTo({
         top: 0,
         behavior: 'smooth',
      });
   };
   

   return (
      <div className='bg-gray-100'>

         <div className="text-black bg-white   font-bold m-4 p-4   ">
            <div className="flex justify-between items-center bg-white/75 backdrop-blur-md bg-opacity-50 p-3 fixed top-0  left-0 right-0 z-50">
               <div className='text-black text-3xl font-serif'>BHATTARAI</div>

               {/* Desktop Menu */}
               <div className="hidden lg:flex text-black space-x-4 ">
                  <a href="#home" onClick={() => scrollToSection(homeRef)} >Home</a>
                  <a href="#about" onClick={() => scrollToSection(aboutRef)}>About</a>
                  <a href="#cards" onClick={() => scrollToSection(cardRef)}>Cards</a>   
               </div>

               {/* Mobile Menu Button (Hamburger Icon) */}
               <div className="md:hidden">
                  <button onClick={toggleMenu}>
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                     >
                        <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           strokeWidth="2"
                           d="M4 6h16M4 12h16M4 18h16"
                        />
                     </svg>
                  </button>
               </div>
            </div>

            {/* Mobile Menu */}
            {navbar && (
               <div className="sm:hidden text-amber-600 mt-4 flex flex-col items-center space-y-4">
                  <a href="#home" onClick={() => scrollToSection(homeRef)} className="hover:text-gray-400">Home</a>
                  <a href="#about" onClick={() => scrollToSection(aboutRef)} className="hover:text-gray-400">About</a>
                  <a href="#cards" onClick={() => scrollToSection(cardRef)} className="hover:text-gray-400">Cards</a>
               </div>
            )}
         </div>

         {/* Sections on the Page */}
         <hr className="border-2 rounded-2xl border-stone-600  w-[98%] mx-4 my-3" />
         
         <div ref={homeRef} id="home" className="h  flex justify-between">

            {/* for left part */}
         <div className='flex-row-reverse  hidden md:block slide m-2 py-6 text-center ' style={{ maxHeight: '500px', overflowY: 'auto', }}>
            <div className='   flex justify-center '>
               <a className='mx-3 px-3  text-2xl font-bold' href="https://www.facebook.com/yubesh.bhattarai"> yubesh bhattarai </a>
              <div className='flex justify-center items-center'>
                 <FaPhoneAlt className="text-black  " />  :
                  <a  href="tel:+1234567890">   1234567890 </a> 
              </div>
           </div>
          
         </div>
            {/* for right part */}
            <div className=' px-3 py-5 m-2  text-center  md:m-auto '> <img className='h-96 w-96 rounded-xl shadow-black' src="/family.jpg" alt="" /></div>
            {/* Content for the Home section */}
         </div>

         {/* hr */}
         {/* <hr className='border-1 rounded-4xl border-stone-400 w-[95%] flex mx-auto ' /> */}


         <div ref={aboutRef} id="about" className="h-auto bg-gray-100">
            <h1 className='text-center text-3xl text-red-500 underline font-bold'>About</h1>
            <h2 className=" text-xl p-4 m-6 text-justify">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita doloremque esse, sint blanditiis id tempora rerum quam ducimus nisi magni officia explicabo, laborum sunt, ut aut nihil. Porro possimus, vero totam architecto quisquam ad dolores dolore laudantium. Iste ipsam necessitatibus doloribus. Deserunt obcaecati officia deleniti! Corporis distinctio provident cumque id labore consequuntur recusandae modi veniam vel totam voluptas, sunt sed soluta assumenda obcaecati alias officia quas doloribus repellendus debitis, illum suscipit. Odio explicabo ullam reiciendis inventore deserunt asperiores ab ea error molestiae earum, porro eum iste, ipsam eveniet maiores adipisci, rerum eius! Harum architecto tempore dicta similique esse saepe commodi!
             </h2>
            {/* Content for the About section */}
         </div>

         <div ref={cardRef} id="cards" className="h-screen ">
            <h2 className="text-center text-4xl text-black pt-20">Cards Section</h2>
            <h1>underconstruction.....</h1>
            <h3>very soon.</h3>
         
         </div>

       <div  className='fixed bottom-[20px] right-[20px] flex justify-center items-center w-[60px] h-[60px] bg-blue-400 text-white rounded-full shadow-lg cursor-pointer  '>
         <button className=' hover:cursor-pointer' href="#nav" onClick={scrolltoTop}>⬆️</button>   
       </div>
       {/* hr */}
        <hr className='border-2 rounded-4xl border-black w-[94%] md:w-[98%]  flex mx-auto ' />


       <footer className='  bg-gray-200 flex justify-around mx-4 md:mx-3'> 
         {/* left area */}
         <div className=' font-stretch-50% text-3xl font-black my-8 text-stone-700 font-serif'>BHATTARAI</div>

         {/* right area */}
         <div className='text-center text-md my-4  text-stone-500'>
            <div className='hover:underline hover:cursor-pointer' href="#home" onClick={() => scrollToSection(homeRef)}>home</div>
            <div className='hover:underline hover:cursor-pointer' href="#about"onClick={()=>scrollToSection(aboutRef)}>about us</div>
            <div className='hover:underline hover:cursor-pointer' href="#card" onClick={()=>scrollToSection(cardRef)}>Contact</div>
         </div>
       </footer>
            <div className=' bg-gray-200 text-center mx-4 md:mx-3 p-3 text-stone-500'>
               All rights reserved &copy;|| {new Date().getUTCFullYear()}
              <h1 className='text-xl text-stone-500'> powered by | <span className='text-sm text-black'> <a href="https://www.facebook.com/yubesh.bhattarai"> yubesh bhattarai</a> </span> </h1>
            </div>
      </div>
   );
};

export default Navbar;
