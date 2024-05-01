"use client";

import { useState } from "react";

import polygon from "@/public/icons/polygon.svg";

const Sectionbar = ({ books, chapter }) => {
  const [activeButton, setActiveButton] = useState("book");
  // console.log(books);
  const handleClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div className=" xl:col-span-3 2xl:col-span-2 hidden xl:block ">
      <div className="bg-white rounded-md h-[87%]">
        <div className="flex justify-evenly text-center items-center">
          <button
            className={`${
              activeButton == "book"
                ? "bg-primary text-white"
                : "bg-white text-black"
            } w-1/2 py-3 rounded-tl-lg font-bold`}
            onClick={() => handleClick("book")}
          >
            বই
          </button>

          <button
            className={`${
              activeButton == "chapter"
                ? "bg-primary text-white"
                : "bg-white text-black"
            } w-1/2 py-3 rounded-tr-lg font-bold`}
            onClick={() => handleClick("chapter")}
          >
            অধ্যায়
          </button>
        </div>
        <hr className="text-secondary" />
        <br />
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Search for filter"
          className="w-[92%] mx-3 bg-primaryBg rounded px-5 py-2"
          disabled
        />

        <div className="m-3">
          {activeButton === "book" && (
            <div>
              {books.map((book) => (
                <div
                  className=" flex items-center bg-secondaryBg px-2 py-3 rounded-md"
                  key={book.id}
                >
                  <div
                    className=" mr-2 py-1 bg-no-repeat text-white font-bold p-3 rounded-md text-2xl"
                    style={{ backgroundImage: `url(${polygon.src})` }}
                  >
                    B
                  </div>

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
                  className="flex items-center bg-secondaryBg px-2 py-3 rounded-md"
                  key={chapter.id}
                >
                  <div
                    className=" mr-2 bg-no-repeat py-1 text-white font-bold p-3 rounded-md text-2xl"
                    style={{ backgroundImage: `url(${polygon.src})` }}
                  >
                    {chapter.id}
                  </div>
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
