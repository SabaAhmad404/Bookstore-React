import React from 'react';
import { useSelector } from 'react-redux';
import Title from './author';
import Create from './CreateBook';

function BookList() {
  const books = useSelector((state) => state.books);

  return (
    <ul className="container">
      {books.map((book) => (
        <>
          <li className="content" key={book.id}>
            <Title title={book.title} author={book.author} id={book.id} />
          </li>
        </>
      ))}

      <Create />
    </ul>
  );
}

export default BookList;
