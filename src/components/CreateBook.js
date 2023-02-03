import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBooks } from '../redux/books/books';
import '../styles/app.css';

function Create() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const submit = (e) => {
    e.preventDefault();
    const bookContent = {
      id: uuidv4(),
      title,
      author,
    };
    dispatch(addBooks(bookContent));
    setTitle('');
    setAuthor('');
  };

  return (
    <form className="form-bar" onSubmit={submit}>
      <h2>Add books</h2>
      <div className="title-bar">
        <input
          type="text"
          id="text"
          placeholder="title-book"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
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

export default Create;
