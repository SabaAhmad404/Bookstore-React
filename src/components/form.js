import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import { Addbooks } from '../redux/book/book';
import '../styles/app.css';

function Add() {
  const [title, settitle] = useState('');
  const [author, setauthor] = useState('');
  const id = Math.random().toString();

  const dispatch = useDispatch();
  const submit = (e) => {
    e.preventDefault();
    dispatch(Addbooks({ title, author, id }));
  };

  return (
    <form className="form-bar">
      <h2>Add books</h2>
      <div className="title-bar">
        <input
          type="text"
          id="text"
          value={title}
          onChange={(e) => settitle(e.target.value)}
          placeholder="title-book"
        />
      </div>
      <div className="author-bar">
        <input
          type="text"
          id="text-author"
          placeholder="Author-book"
          value={author}
          onChange={(e) => setauthor(e.target.value)}
        />
      </div>
      <button type="submit" className="add-book" onClick={submit}>
        Add Book
      </button>
    </form>
  );
}
export { Add as default };
