const HadithSection = async ({ section, hadith, books, chapter }) => {
  const booksData = await books;
  const chapterData = await chapter;
  const sectionData = await section;
  const hadithData = await hadith;

  return (
    <div className="bg-blue-500 p-7 xl:col-span-8 rounded-md">
      <h1>Hadith</h1>
      {booksData.map((book) => (
        <div key={book.id}>{book.title}</div>
      ))}

      {chapterData.map((singelChapter) => (
        <div key={singelChapter.id}>
          <h1>{singelChapter.title}</h1>
          {sectionData
            .filter((item) => item.chapter_id === singelChapter.id)
            .map((section) => (
              <div key={section.id}>
                <h2>{section.title}</h2>
                {hadithData
                  .filter((item) => item.section_id === section.id)
                  .map((item) => (
                    <div key={item.id}>
                      <p>{item.hadith_id}</p>
                      <p>{item.ar}</p>
                      <p>{item.narrator}</p>
                      <p>{item.bn}</p>
                      <p>হাদিসের মান : {item.grade}</p>
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
