

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import Spinner from "../components/Spinner";
// import { MdOutlineAddBox } from "react-icons/md";
// import BooksCard from "../components/home/BooksCard";
// import BooksTable from "../components/home/BooksTable";
// import { motion } from "framer-motion";
// import { FaUserCircle } from "react-icons/fa";
// import AboutUs from "../components/AboutUs";
// import { SignedIn, SignedOut, UserButton, SignInButton, SignUpButton } from "@clerk/clerk-react";



// const Home = () => {

//   return (
//     <div className="min-h-screen bg-white-100">
//       {/* 🔹 Navbar */}
//       <nav className="fixed top-0 left-0 w-full bg-white shadow-md py-4 px-8 flex justify-between items-center z-50">
//         <h1 className="text-3xl font-extrabold text-blue-900">PAPER TRAIL</h1>

//         {/* Navigation Links */}
//         <div className="hidden md:flex space-x-8 text-lg font-semibold text-gray-700">
//           <Link to="/" className="hover:text-blue-600 transition">Home</Link>
//           <Link to="/collection" className="hover:text-blue-600 transition">Collection</Link>
//           <Link to="/Aboutus" className="hover:text-blue-600 transition">About Us</Link>
//         </div>

//         {/* Authentication Section */}
//         <div className="flex items-center space-x-4">
//           {/* If signed in, show user avatar */}
//           <SignedIn>
//             <UserButton afterSignOutUrl="/" />
//           </SignedIn>

//           {/* If signed out, show Sign In & Sign Up buttons */}
//           <SignedOut>
//             <SignInButton mode="modal">
//               <button className="px-5 py-2 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition">
//                 Sign In
//               </button>
//             </SignInButton>

//             <SignUpButton mode="modal">
//               <button className="px-5 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
//                 Sign Up
//               </button>
//             </SignUpButton>
//           </SignedOut>
//         </div>
//       </nav>

//       {/* 🔹 Hero Section */}
//       <section className="relative h-screen flex flex-col lg:flex-row items-center justify-between px-12 lg:px-20 pt-20">
//         {/* Left Side - Text Content */}
//         <div className="lg:w-1/2 text-center lg:text-left">
//           <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
//             The book you don't <br /> read <span className="text-blue-600">won't help.</span>
//           </h1>
//           <p className="mt-4 text-lg text-gray-600 max-w-md">
//             Unlimited reading for less than the price of a single book. Explore our vast collection and start reading today.
//           </p>
//           <Link to="/create">
//           <button 
//             className="mt-6 px-6 py-3 bg-orange-500 hover:bg-orange-600 transition rounded-lg text-lg font-semibold text-white shadow-lg flex items-center"
//             onClick={() => document.getElementById("books-section").scrollIntoView({ behavior: "smooth" })}
//           >
//             CREATE BOOK  →
//           </button> 
//           </Link>
//         </div>

//         {/* Right Side - Illustration */}
//         <div className="lg:w-1/2 flex justify-center">
//           <img
//             src="https://img.freepik.com/free-vector/library-concept-illustration_114360-2788.jpg?t=st=1741525432~exp=1741529032~hmac=a34f4f8758953f1a9d14371532fc607b6a364add91141a7586f9097cb3339a4f&w=740"
//             alt="Reading Illustration"
//             className="w-full max-w-md lg:max-w-lg"
//           />
//         </div>
//       </section>

//       {/* 🔹 Books Section */}
      
//     </div>
//   );
// };

// export default Home;


import React from "react";
import { Link } from "react-router-dom";
import { SignedIn, SignedOut, UserButton, SignInButton, SignUpButton } from "@clerk/clerk-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-white-100">
      {/* 🔹 Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md py-4 px-8 flex justify-between items-center z-50">
        <h1 className="text-3xl font-extrabold text-blue-900">PAPER TRAIL</h1>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8 text-lg font-semibold text-gray-700">
          <Link to="/" className="hover:text-blue-600 transition">Home</Link>
          <Link to="/collection" className="hover:text-blue-600 transition">Collection</Link>
          <Link to="/aboutus" className="hover:text-blue-600 transition">About Us</Link>
        </div>
        {/* Authentication Section */}
        <div className="flex items-center space-x-4">
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
          <SignedOut>
            <SignInButton mode="modal">
              <button className="px-5 py-2 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition">
                Sign In
              </button>
            </SignInButton>

            <SignUpButton mode="modal">
              <button className="px-5 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
                Sign Up
              </button>
            </SignUpButton>
          </SignedOut>
        </div>
      </nav>

      {/* 🔹 Hero Section */}
      <section className="relative h-screen flex flex-col lg:flex-row items-center justify-between px-12 lg:px-20 pt-20">
        {/* Left Side - Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
            The book you don't <br /> read <span className="text-blue-600">won't help.</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-md">
            Unlimited reading for less than the price of a single book. Explore our vast collection and start reading today.
          </p>
          <Link to="/create">
            <button 
              className="mt-6 px-6 py-3 bg-orange-500 hover:bg-orange-600 transition rounded-lg text-lg font-semibold text-white shadow-lg flex items-center"
              onClick={() => document.getElementById("books-section").scrollIntoView({ behavior: "smooth" })}
            >
              CREATE BOOK  →
            </button> 
          </Link>
        </div>

        {/* Right Side - Illustration */}
        <div className="lg:w-1/2 flex justify-center">
          <img
            src="https://img.freepik.com/free-vector/library-concept-illustration_114360-2788.jpg"
            alt="Reading Illustration"
            className="w-full max-w-md lg:max-w-lg"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
