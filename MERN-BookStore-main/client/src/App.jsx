import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import CreateBook from "./pages/CreateBook";
import UpdateBook from "./pages/UpdateBook";
import ShowBook from "./pages/ShowBook";
import DeleteBook from "./pages/DeleteBook";
import Collection from "./pages/Collection";
import AboutUs from "./components/AboutUs";
import { ClerkProvider } from "@clerk/clerk-react";

const clerkKey = "pk_test_YXNzdXJpbmctdHJvbGwtMjQuY2xlcmsuYWNjb3VudHMuZGV2JA";

if (!clerkKey) {
  console.error("❌ Clerk Publishable Key is missing! Check your .env file.");
}

const App = () => {
  return (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/create" element={<CreateBook />} />
          <Route path="/book/:id" element={<ShowBook />} />
          <Route path="/update/:id" element={<UpdateBook />} />
          <Route path="/delete/:id" element={<DeleteBook />} />
        </Routes>
  );
};

export default App;
