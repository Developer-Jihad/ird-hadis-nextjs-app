"use client";

import Image from "next/image";
import { useState } from "react";
import searchIcon from "@/public/icons/search.svg";
import hexagon from "@/public/icons/hexagon.png";

const Sectionbar = ({ books, chapter }) => {
  const [activeButton, setActiveButton] = useState("book");
  // console.log(books);
  const handleClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div className=" xl:col-span-3 2xl:col-span-2 hidden xl:block ">
      <div className="bg-white rounded-2xl h-[89%]">
        <div className="flex justify-evenly text-center items-center">
          <button
            className={`${
              activeButton == "book"
                ? "bg-primary text-white"
                : "bg-white text-black"
            } w-1/2 py-3 rounded-tl-2xl text-xl font-bold`}
            onClick={() => handleClick("book")}
          >
            বই
          </button>

          <button
            className={`${
              activeButton == "chapter"
                ? "bg-primary text-white"
                : "bg-white text-black"
            } w-1/2 py-3 rounded-tr-2xl text-xl font-bold`}
            onClick={() => handleClick("chapter")}
          >
            অধ্যায়
          </button>
        </div>
        <hr className="text-secondary" />

        <div className="w-[92%] mx-3 mt-3 bg-primaryBg rounded-lg px-5 py-3">
          <Image
            className="mr-3 inline-block"
            src={searchIcon}
            alt="search-icon"
            width={20}
            height={20}
          />
          <input
            className="w-[130px]"
            type="text"
            id="name"
            name="name"
            placeholder="Search For Filter"
            disabled
          />
        </div>

        <div className="m-3">
          {activeButton === "book" && (
            <div>
              {books.map((book) => (
                <div
                  className=" flex items-center bg-secondaryBg px-2 py-3 rounded-lg"
                  key={book.id}
                >
                  <div
                    className=" mr-2 px-4 py-2 bg-contain bg-no-repeat text-white font-bold rounded--2xl text-2xl"
                    style={{ backgroundImage: `url(${hexagon.src})` }}
                  >
                    B
                  </div>

                  <div>
                    <h2 className="text-lg">{book.title}</h2>
                    <p className="text-gray">
                      সর্বমোট হাদিস - {book.number_of_hadis}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeButton === "chapter" && (
            <div>
              {chapter.map((chapter) => (
                <div
                  className="flex items-center bg-secondaryBg px-2 py-3 rounded-2xl"
                  key={chapter.id}
                >
                  <div
                    className=" mr-2 bg-no-repeat bg-contain text-white font-bold px-4 py-2 rounded-2xl text-2xl"
                    style={{ backgroundImage: `url(${hexagon.src})` }}
                  >
                    {chapter.id}
                  </div>
                  <div>
                    <h2 className="text-lg">{chapter.title}</h2>
                    <p className="text-gray">
                      হদিসের রেন্জ - {chapter.hadis_range}
                    </p>
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
