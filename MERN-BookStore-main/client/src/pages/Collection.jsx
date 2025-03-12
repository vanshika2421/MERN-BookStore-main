import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";
import { MdOutlineAddBox } from "react-icons/md";
import BooksCard from "../components/home/BooksCard";
import BooksTable from "../components/home/BooksTable";
import { FaTh, FaList, FaSearch } from "react-icons/fa";

const Collection = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState("grid");
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("All");

  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      try {
        const res = await axios.get("https://bookstore-server-po8m.onrender.com/api/v1/allbooks");
        setBooks(res.data.data);
      } catch (error) {
        console.error("Error fetching books:", error);
        setBooks([]);
      } finally {
        setLoading(false);
      }
    };
    fetchBooks();
  }, []);
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (category === "All" || book.genre.toLowerCase() === category.toLowerCase())
  );
  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10">
      {/* 🔹 Page Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-4xl font-extrabold text-gray-800">📚 Book Collection</h2>
        <Link to="/create">
          <button className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md">
            <MdOutlineAddBox className="text-xl mr-2" />
            Add Book
          </button>
        </Link>
      </div>

      {/* 🔹 Search & Filters */}
      <div className="flex flex-wrap justify-between items-center gap-4 mb-6 bg-white p-4 rounded-lg shadow-md">
        {/* Search Bar */}
        <div className="flex items-center border rounded-lg overflow-hidden shadow-sm w-full md:w-1/2">
          <input
            type="text"
            placeholder="Search books..."
            className="px-4 py-2 w-full focus:outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="px-4 bg-blue-500 text-white">
            <FaSearch />
          </button>
        </div>

        {/* Category Filter */}
        <select
          className="px-4 py-2 border rounded-lg shadow-sm"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="All">All Genres</option>
          <option value="Fiction">Fiction</option>
          <option value="Mystery">Mystery</option>
          <option value="Sci-Fi">Sci-Fi</option>
          <option value="Biography">Biography</option>
          <option value="Self-Help">Self-Help</option>
        </select>

        {/* Toggle Views */}
        <div className="flex space-x-4">
          <button
            className={`p-3 rounded-lg transition ${showType === "grid" ? "bg-blue-600 text-white" : "bg-gray-300"}`}
            onClick={() => setShowType("grid")}
          >
            <FaTh />
          </button>
          <button
            className={`p-3 rounded-lg transition ${showType === "list" ? "bg-blue-600 text-white" : "bg-gray-300"}`}
            onClick={() => setShowType("list")}
          >
            <FaList />
          </button>
        </div>
      </div>

      {/* 🔹 Books Section */}
      {loading ? (
        <Spinner />
      ) : filteredBooks.length > 0 ? (
        showType === "grid" ? (
          <BooksCard books={filteredBooks} />
        ) : (
          <BooksTable books={filteredBooks} />
        )
      ) : (
        <p className="text-center text-gray-500 text-xl mt-6">No books found...</p>
      )}
    </div>
  );
};

export default Collection;
