"use client";

import { useState } from "react";

const Sectionbar = ({ books, chapter }) => {
  const [activeButton, setActiveButton] = useState("book");
  // console.log(books);
  const handleClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div className=" xl:col-span-3 2xl:col-span-2 hidden xl:block ">
      <div className="bg-white rounded-md h-[90%]">
        <div className="flex justify-evenly text-center items-center">
          <button
            className={`${
              activeButton == "book"
                ? "bg-green-500 text-white"
                : "bg-white text-black"
            } w-1/2 py-3 rounded-tl-lg font-bold`}
            onClick={() => handleClick("book")}
          >
            বই
          </button>

          <button
            className={`${
              activeButton == "chapter"
                ? "bg-green-500 text-white"
                : "bg-white text-black"
            } w-1/2 py-3 rounded-tr-lg font-bold`}
            onClick={() => handleClick("chapter")}
          >
            অধ্যায়
          </button>
        </div>
        <hr />
        <br />
        <div className="m-3">
          {activeButton === "book" && (
            <div>
              {books.map((book) => (
                <div
                  className="flex items-center bg-green-100 px-2 py-3 rounded-md"
                  key={book.id}
                >
                  <h1 className="hover:bg-slate-300 mr-2 py-1 font-bold px-3 rounded-md text-2xl">
                    B
                  </h1>

                  <div>
                    <h2 className="font-bold">{book.title}</h2>
                    <p>সর্বমোট হাদিস - {book.number_of_hadis}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeButton === "chapter" && (
            <div>
              {chapter.map((chapter) => (
                <div
                  className="flex items-center bg-green-100 px-2 py-3 rounded-md"
                  key={chapter.id}
                >
                  <h1 className="hover:bg-slate-300 mr-2 py-1 font-bold px-3 rounded-md text-2xl">
                    {chapter.id}
                  </h1>
                  <div>
                    <h2 className="font-bold">{chapter.title}</h2>
                    <p>হদিসের রেন্জ - {chapter.hadis_range}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sectionbar;
