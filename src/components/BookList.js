import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Title from './author';
import Create from './CreateBook';
import { getAllBooks } from '../redux/fetch';

function BookList() {
  const dispatch = useDispatch();
  const { books } = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(getAllBooks());
  }, [dispatch]);

  return (
    <div className="book-container">
      <ul>
        {books.map((book) => (
          <Title
            key={book.Id}
            Id={book.Id}
            Title={book.title}
            Author={book.author}
            Category={book.category}
          />
        ))}
      </ul>
      <Create />
    </div>
  );
}

export default BookList;
