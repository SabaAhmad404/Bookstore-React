import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { addBooks } from "../redux/book/book";
import "../styles/app.css";

function Add() {
  const [title, setTitle] = useState(" ");
  const [author, setAuthor] = useState(" ");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const book = {
      id: uuidv4(),
      title,
      author,
    };
    dispatch(addBooks(book));
    setTitle(" ");
    setAuthor(" ");
  };

  return (
    <form className="form-bar" onSubmit={handleSubmit}>
      <h2>Add books</h2>
      <div className="title-bar">
        <input
          type="text"
          id="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="title-book"
        />
      </div>
      <div className="author-bar">
        <input
          type="text"
          id="text-author"
          placeholder="Author-book"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>
      <button type="submit" className="add-book">
        Add Book
      </button>
    </form>
  );
}
export { Add as default };
