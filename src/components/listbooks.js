import React from "react";
import { useSelector } from "react-redux";
import Title from "./author";
import Add from "./form";
import "../styles/app.css";

function Store() {
  const bookData = useSelector((state) => state.Books);

  return (
    <section>
      <div>
        <ul>
          {bookData?.Books.map((book) => (
            <Title
              title={book.title}
              id={book.id}
              author={book.author}
              key={book.id}
            />
          ))}
        </ul>
      </div>
      <Add />
    </section>
  );
}
export { Store as default };
