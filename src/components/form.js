import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import '../styles/app.css';
import { Addbooks } from '../redux/book/book';

function Add() {
  const [title, settitle] = useState('');
  const [author, setauthor] = useState('');
  const id = Math.random().toString();
  const dispatch = useDispatch();
  const handleEvent = (e) => {
    e.preventDefault();
    dispatch(Addbooks({ title, author, id }));
    settitle('');
    setauthor('');
  };
  return (
    <form className="form-bar" onSubmit={handleEvent}>
      <h2>Add books</h2>
      <div className="title-bar">
        <input
          type="text"
          id="text"
          value={title}
          placeholder="title-book"
          onChange={(e) => settitle(e.target.value)}
        />
      </div>
      <div className="author-bar">
        <input
          type="text"
          id="text-author"
          value={author}
          placeholder="Author-book"
          onChange={(e) => setauthor(e.target.value)}
        />
      </div>
      <button type="submit" className="add-book" onClick={handleEvent}>
        Add Book
      </button>
    </form>
  );
}
export { Add as default };
