import Image from "next/image";
import bookIcon from "@/public/icons/book (3).svg";
import flowerIcon from "@/public/icons/flower-icon.svg";
import mainBook from "@/public/icons/main-book.svg";
import copyIcon from "@/public/icons/copy.svg";
import bookmarkIcon from "@/public/icons/bookmark (1).svg";
import shareIcon from "@/public/icons/share.svg";
import directIcon from "@/public/icons/direct.svg";
import reportIcon from "@/public/icons/report.svg";
import hamBargerIcon from "@/public/icons/ham-barger.png";
import smallbookIcon from "@/public/icons/book (2).svg";

const HadithSection = async ({ section, hadith, books, chapter }) => {
  const booksData = await books;
  const chapterData = await chapter;
  const sectionData = await section;
  const hadithData = await hadith;

  return (
    <div className=" xl:col-span-9 2xl:col-span-8 rounded-md overflow-y-auto  mb-[50px] scrollbar">
      {booksData.map((book) => (
        <div className=" bg-white p-4 rounded-md mb-3" key={book.id}>
          <div className="flex">
            <Image
              className="hidden xl:block pr-2"
              src={smallbookIcon}
              alt="book Icon"
              width={25}
              height={25}
            />
            <p>
              / {book.book_name} / {book.id}
            </p>
          </div>
          <hr className="my-3 text-secondary" />
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Image
                className="hidden xl:block pr-3 rounded-md"
                src={mainBook}
                alt="book Icon"
                width={50}
                height={50}
              />

              <Image
                className="xl:hidden pr-3 rounded-md"
                src={hamBargerIcon}
                alt="book Icon"
                width={35}
                height={35}
              />
              <div>
                <h1 className="text-base lg:text-xl font-bold">{book.title}</h1>
                <p className="hidden xl:block">
                  সর্বমোট হাদিস - {book.number_of_hadis}
                </p>
              </div>
            </div>
            <p className="text-2xl font-bold">{book.title_ar}</p>
          </div>
        </div>
      ))}

      {chapterData.map((singelChapter) => (
        <div key={singelChapter.id}>
          <div className="flex items-center bg-white p-4 rounded-md my-3">
            <h1 className="bg-primary text-white mr-3 px-3 py-1 rounded-md">
              {singelChapter.id}
            </h1>
            <div>
              <h2 className="text-xl">{singelChapter.title}</h2>
            </div>
          </div>
          {sectionData
            .filter((item) => item.chapter_id === singelChapter.id)
            .map((section) => (
              <div key={section.id}>
                <div className="bg-white p-4 rounded-md my-3">
                  <div className="flex items-center font-bold mb-3">
                    <Image
                      className="pr-3 rounded-md"
                      src={bookIcon}
                      alt="book Icon"
                      width={45}
                      height={45}
                    />
                    <h2>{section.number}</h2>
                  </div>
                  <h2>{section.title}</h2>
                  <h2>{section.preface}</h2>
                </div>
                {hadithData
                  .filter((item) => item.section_id === section.id)
                  .map((item) => (
                    <div key={item.id} className="bg-white p-4 rounded-md my-3">
                      <div className="flex items-center justify-between">
                        <div className="flex mt-2 text-primary">
                          <Image
                            className="pr-3 rounded-md "
                            src={flowerIcon}
                            alt="book Icon"
                            width={35}
                            height={35}
                          />
                          <p className="text-xl">{item.hadith_id}</p>
                        </div>
                        <p className="lg:hidden py-1 px-3 bg-primary text-white rounded-md">
                          {item.grade}
                        </p>
                      </div>
                      <br />
                      <p>{item.ar}</p>
                      <br />
                      <p className="text-primary">{item.narrator}</p>
                      <br />
                      <p>{item.bn}</p>
                      <br />
                      <div className="md:flex justify-between">
                        <p className="hidden lg:block">
                          হাদিসের মান :{"  "}
                          <span className="py-1 px-2 ml-2 bg-primary text-white rounded-md">
                            {item.grade}
                          </span>
                        </p>
                        <div className="flex justify-evenly lg:border-0 border-t-2 border-secondary lg:pt-0 pt-5 md:mt-0 md:gap-16 lg:gap-20">
                          <Image
                            src={copyIcon}
                            alt="copy Icon"
                            width={25}
                            height={25}
                          />
                          <Image
                            src={bookmarkIcon}
                            alt="Bookmark Icon"
                            width={25}
                            height={25}
                          />
                          <Image
                            src={shareIcon}
                            alt="share Icon"
                            width={25}
                            height={25}
                          />
                          <Image
                            src={reportIcon}
                            alt="report Icon"
                            width={25}
                            height={25}
                          />
                          <Image
                            src={directIcon}
                            alt="direct Icon"
                            width={25}
                            height={25}
                          />
                        </div>
                      </div>
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
