import React from "react";
import "./App.css";
import Login from "./components/login";
import { Route, Routes} from "react-router-dom";
import BrowseBooks from "./components/browse-books";
import BorrowBooks from "./components/borrow-books";

function App() {
  return (
    <>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="/" element={<BrowseBooks />} />
        <Route path="/borrow-books" element={<BorrowBooks />}/>
      </Routes>
    </>
  );
}

export default App;
