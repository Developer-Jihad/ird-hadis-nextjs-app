import Hadith from "./components/Hadith";
import Sectionbar from "./components/Sectionbar";
import Settingsbar from "./components/Settingsbar";

export default function Home() {
  return (
    <main className="xl:grid xl:grid-cols-12 xl:gap-3">
      <Sectionbar></Sectionbar>
      <Hadith></Hadith>
      <Settingsbar></Settingsbar>
    </main>
  );
}
