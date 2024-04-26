export default async function getAllChapter() {
  const result = await fetch("http://localhost:5000/chapter");

  if (!result.ok) {
    throw new Error("There was an Error fething Data");
  }
  return result.json();
}
