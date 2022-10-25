import "./App.css";
import React from "react";
import Navigation from "./components/common/Navigation";
import BookList from "./components/Books/BookList";
import ReviewList from "./components/Reviews/ReviewList";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About/About";

function App() {
  document.title = "book-reactions";

  return (
    <BrowserRouter>
      <div className="container-fluid">
        <Navigation />
        <div className="container">
          <Routes>
            <Route path="/" element={<BookList />} />
            <Route path="/about" element={<About />} />
            <Route path="/reviews/:bookid/:title" element={<ReviewList/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
