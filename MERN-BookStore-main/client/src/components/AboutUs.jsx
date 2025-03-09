import React from "react";
import { Link } from "react-router-dom";
import { FaBookOpen, FaUserFriends, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* 🔹 Hero Section */}
      <section className="relative h-[60vh] bg-[url('https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=600')] bg-cover bg-center flex flex-col justify-center items-center text-white text-center px-6">
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
        <div className="relative">
          <h1 className="text-5xl font-bold text-white drop-shadow-lg">About Paper Trail</h1>
          <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
            Your go-to destination for books of all genres. Discover, learn, and get inspired with us!
          </p>
        </div>
      </section>

      {/* 🔹 Our Mission */}
      <section className="py-12 px-6 md:px-20 text-center">
        <h2 className="text-4xl font-extrabold text-gray-800">📖 Our Mission</h2>
        <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
          At Paper Trail, we believe in the power of books to **educate, inspire, and transform lives**. Our goal is to make reading accessible to everyone, offering a diverse collection for all book lovers.
        </p>
      </section>

      {/* 🔹 Why Choose Us? */}
      <section className="bg-white py-12 px-6 md:px-20">
        <h2 className="text-4xl font-extrabold text-gray-800 text-center">✨ Why Choose Us?</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Feature Card */}
          <div className="bg-gray-100 p-6 rounded-xl text-center shadow-md hover:shadow-lg transition">
            <FaBookOpen className="text-4xl text-blue-500 mx-auto" />
            <h3 className="mt-4 text-xl font-semibold">Diverse Collection</h3>
            <p className="text-gray-600">Explore books across multiple genres, from fiction to self-help and beyond.</p>
          </div>

          <div className="bg-gray-100 p-6 rounded-xl text-center shadow-md hover:shadow-lg transition">
            <FaUserFriends className="text-4xl text-green-500 mx-auto" />
            <h3 className="mt-4 text-xl font-semibold">Community-Driven</h3>
            <p className="text-gray-600">Join a passionate community of readers and share book recommendations.</p>
          </div>

          <div className="bg-gray-100 p-6 rounded-xl text-center shadow-md hover:shadow-lg transition">
            <FaEnvelope className="text-4xl text-yellow-500 mx-auto" />
            <h3 className="mt-4 text-xl font-semibold">Personalized Recommendations</h3>
            <p className="text-gray-600">Get book suggestions tailored to your interests and reading habits.</p>
          </div>
        </div>
      </section>

      {/* 🔹 Meet Our Team */}
      <section className="py-12 px-6 md:px-20 text-center">
        <h2 className="text-4xl font-extrabold text-gray-800">👩‍💻 Meet Our Team</h2>
        <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
          Our passionate team is dedicated to bringing you the best book collection and reading experience.
        </p>

        {/* Team Members */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <img
              src="https://images.pexels.com/photos/7651584/pexels-photo-7651584.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Team Member"
              className="w-50 h-40 rounded-full mx-auto"
            />
            <h3 className="mt-4 text-lg font-semibold">Illeana</h3>
            <p className="text-gray-500">Founder & CEO</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <img
              src="https://images.pexels.com/photos/7658428/pexels-photo-7658428.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Team Member"
              className="w-50 h-40 rounded-full mx-auto"
            />
            <h3 className="mt-4 text-lg font-semibold">Salena</h3>
            <p className="text-gray-500">Head of Curation</p>
          </div>

          
        </div>
      </section>

      {/* 🔹 Contact Us */}
      <section className="bg-blue-600 text-white py-12 text-center">
        <h2 className="text-4xl font-extrabold">📞 Contact Us</h2>
        <p className="mt-4 text-lg">Have questions? Get in touch with us!</p>
        <div className="mt-6 flex justify-center space-x-6">
          <a href="tel:+1234567890" className="flex items-center gap-2 text-lg bg-white text-blue-600 px-6 py-3 rounded-lg shadow-md hover:bg-gray-200 transition">
            <FaPhoneAlt /> +123 456 7890
          </a>
          <a href="mailto:support@papertrail.com" className="flex items-center gap-2 text-lg bg-white text-blue-600 px-6 py-3 rounded-lg shadow-md hover:bg-gray-200 transition">
            <FaEnvelope /> kamravanshika1@gmail.com
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
