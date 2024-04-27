import Image from "next/image";
import bookIcon from "@/public/icons/book (3).svg";
import flowerIcon from "@/public/icons/flower-icon.svg";
import mainBook from "@/public/icons/main-book.svg";

const HadithSection = async ({ section, hadith, books, chapter }) => {
  const booksData = await books;
  const chapterData = await chapter;
  const sectionData = await section;
  const hadithData = await hadith;

  return (
    <div className=" xl:col-span-9 2xl:col-span-8 rounded-md overflow-y-auto  mb-[50px] scrollbar">
      {booksData.map((book) => (
        <div
          className="flex items-center bg-white px-3 py-4 rounded-md mb-3"
          key={book.id}
        >
          <Image
            className="pr-3 rounded-md"
            src={mainBook}
            alt="book Icon"
            width={60}
            height={60}
          />
          <div>
            <h1 className="text-2xl font-bold">{book.title}</h1>
            <p>সর্বমোট হাদিস - {book.number_of_hadis}</p>
          </div>
        </div>
      ))}

      {chapterData.map((singelChapter) => (
        <div key={singelChapter.id}>
          <div className="flex items-center bg-white px-3 py-3 font-bold rounded-md my-3">
            <h1 className="bg-green-500 text-white mr-3 py-1 px-[13px] rounded-md text-2xl">
              {singelChapter.id}
            </h1>
            <div>
              <h2>{singelChapter.title}</h2>
            </div>
          </div>
          {sectionData
            .filter((item) => item.chapter_id === singelChapter.id)
            .map((section) => (
              <div key={section.id}>
                <div className="bg-white px-3 py-5 rounded-md my-3">
                  <div className="flex items-center font-bold mb-3">
                    <Image
                      className="pr-3 rounded-md"
                      src={bookIcon}
                      alt="book Icon"
                      width={50}
                      height={50}
                    />
                    <h2>{section.number}</h2>
                  </div>
                  <h2>{section.title}</h2>
                  <h2>{section.preface}</h2>
                </div>
                {hadithData
                  .filter((item) => item.section_id === section.id)
                  .map((item) => (
                    <div
                      key={item.id}
                      className="bg-white px-3 py-5 rounded-md my-3"
                    >
                      <div className="flex mt-2 text-green-500">
                        <Image
                          className="pr-3 rounded-md "
                          src={flowerIcon}
                          alt="book Icon"
                          width={35}
                          height={35}
                        />
                        <p>{item.hadith_id}</p>
                      </div>
                      <br />
                      <p>{item.ar}</p>
                      <br />
                      <p>{item.narrator}</p>
                      <br />
                      <p>{item.bn}</p>
                      <br />
                      <p>
                        হাদিসের মান :{" "}
                        <span className="py-1 px-2 bg-green-500 text-white rounded-md">
                          {item.grade}
                        </span>
                      </p>
                    </div>
                  ))}
              </div>
            ))}
        </div>
      ))}
    </div>
  );
};

export default HadithSection;
