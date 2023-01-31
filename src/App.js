import { Route, Routes, Link } from 'react-router-dom';
import './styles/app.css';
import React from 'react';
import Store from './components/listbooks';
import Category from './components/checkstatus';

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
        <Route path="/" element={<Store />} />
        <Route path="/Category" element={<Category />} />
      </Routes>
    </>
  );
}
export { App as default };
