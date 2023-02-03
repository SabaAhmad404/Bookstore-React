import { Route, Routes, Link } from 'react-router-dom';
import React from 'react';
import BookList from './components/BookList';
import Categories from './components/Categories';

function App() {
  return (
    <>
      <nav className="nav-bar">
        <h1>Bookstore CMS</h1>
        <ul className="links">
          <li>
            {' '}
            <Link className="Books" to="/">
              Books
            </Link>
          </li>
          <li>
            {' '}
            <Link className="category" to="/Category">
              Category
            </Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/Category" element={<Categories />} />
      </Routes>
    </>
  );
}
export { App as default };
