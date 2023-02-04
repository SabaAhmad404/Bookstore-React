import React from 'react';
import Title from './author';
import Add from './form';
import '../styles/app.css';

function Store() {
  const Books = [
    {
      id: 1,
      title: 'The Hunger Games',
      genres: 'Action',
      author: 'Suzanne Collins',
      progres: 64,
      chapter: 'Chapter 17: "A Lesson Learned"',
    },
    {
      id: 2,
      title: 'Dune',
      genres: 'Fantasy',
      author: 'Frank Herbert',
      progres: 8,
      chapter: 'Chapter 3: "A Lesson Learned"',
    },
    {
      id: 3,
      title: 'Capital in the Twenty-First Century',
      genres: 'Economics',
      author: 'Suzanne Collins',
      progres: 0,
      chapter: 'Introduction: "A Lesson Learned"',
    },
  ];

  return (
    <div>
      <ul className="map-bar">
        {Books.map((book) => (
          <li className="container" key={book.id}>
            <Title title={book.title} author={book.author} />
            <button type="submit">Remove</button>
          </li>
        ))}
      </ul>
      <Add />
    </div>
  );
}
export { Store as default };
