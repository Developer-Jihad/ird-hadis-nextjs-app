export default async function getAllHadith() {
  const result = await fetch("http://localhost:5000/hadith");

  if (!result.ok) {
    throw new Error("There was an Error fething Data");
  }
  return result.json();
}
