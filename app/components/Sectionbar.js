"use client";

import { useState } from "react";

const Sectionbar = ({ books, chapter }) => {
  const [activeButton, setActiveButton] = useState("book");

  const handleClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div className="bg-green-500 p-7 xl:col-span-4 2xl:col-span-2 rounded-md hidden xl:block">
      <h1>this is Section</h1>

      <button
        onClick={() => handleClick("book")}
        className="px-3 py-1 m-2 bg-gray-300"
      >
        বই
      </button>
      <button
        onClick={() => handleClick("chapter")}
        className="px-3 py-1 bg-gray-300"
      >
        অধ্যায়
      </button>

      {activeButton === "book" && (
        <div>
          {books.map((book) => (
            <div key={book.id}>
              <h2>{book.title}</h2>
            </div>
          ))}
        </div>
      )}

      {activeButton === "chapter" && (
        <div>
          {chapter.map((chapter) => (
            <div key={chapter.id}>
              <h2>{chapter.title}</h2>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Sectionbar;
