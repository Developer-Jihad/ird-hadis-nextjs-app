import getAllbooks from "@/lib/getAllbooks";
import Sectionbar from "./components/Sectionbar";
import Settingsbar from "./components/Settingsbar";
import getAllChapter from "@/lib/getAllChapter";
import getAllSection from "@/lib/getAllSection";
import getAllHadith from "@/lib/getAllHadith";
import HadithSection from "./components/HadithSection";

export default async function Home() {
  const books = await getAllbooks();
  const chapter = await getAllChapter();
  const section = await getAllSection();
  const hadith = await getAllHadith();
  // console.log(chapter);

  return (
    <main className="xl:grid xl:grid-cols-12 xl:gap-3 mt-[64px] lg:mt-[80px] lg:ml-[80px] p-3 lg:p-5 xl:h-dvh xl:fixed bg-primaryBg lg:rounded-tl-3xl">
      <Sectionbar books={books} chapter={chapter}></Sectionbar>
      <HadithSection
        section={section}
        hadith={hadith}
        books={books}
        chapter={chapter}
      ></HadithSection>
      <Settingsbar></Settingsbar>
    </main>
  );
}
