import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBooks } from '../redux/books/books';

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
    <form className="add-book" onSubmit={submit}>
      <span className="title" htmlFor="title">
        Title:
      </span>
      <input
        type="text"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <span htmlFor="author">Author:</span>
      <input
        type="text"
        id="author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <button type="submit">Add Book</button>
    </form>
  );
}

export default Create;
