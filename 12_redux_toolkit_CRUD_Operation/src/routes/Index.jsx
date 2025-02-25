import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Error from "../pages/Error";
import Navbar from "../layouts/Navbar";
import BooksView from "../features/books/BooksView";
import AddBooks from "../features/books/AddBooks";
import Footer from "../layouts/Footer";
import EditBook from "../features/books/EditBook";

const Index = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/show-books" element={<BooksView/>} />
          <Route path="/add-books" element={<AddBooks/>} />
          <Route path="/edit-book" element={<EditBook/>} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
      <Footer/>
    </BrowserRouter>
  );
};

export default Index;
