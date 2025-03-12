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

        {/* 🔹 Authentication Section */}
        {/* <div className="flex items-center space-x-4">
          <SignedOut>
            <SignInButton mode="modal">
              <button className="px-4 py-2 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition">
                Sign In
              </button>
            </SignInButton>

            <SignUpButton mode="modal">
              <button className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
                Sign Up
              </button>
            </SignUpButton>
          </SignedOut>

          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div> */}
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
