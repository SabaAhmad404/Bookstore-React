import React from "react";
import { useSelector } from "react-redux";
import Title from "./author";
import Add from "./form";
import "../styles/app.css";

function Store() {
  const bookData = useSelector((state) => state.Books);

  return (
    <div>
      <ul className="bar">
        {bookData.Books.map((book) => (
          <li className="container">
            <Title
              title={book.title}
              id={book.id}
              author={book.author}
              key={book.id}
            />
          </li>
        ))}
      </ul>
      <Add />
    </div>
  );
}
export { Store as default };
