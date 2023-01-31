import React from 'react';

function Add() {
  return (
    <form className="form-bar">
      <h2>Add books</h2>
      <div className="title-bar">
        <input type="text" id="text" placeholder="title-book" />
      </div>
      <div className="author-bar">
        <input type="text" id="text-author" placeholder="Author-book" />
      </div>
      <button type="submit">Add Book</button>
    </form>
  );
}
export { Add as default };
