export default async function getAllbooks() {
  const result = await fetch("http://localhost:5000/books");

  if (!result.ok) {
    throw new Error("There was an Error fething Data");
  }
  return result.json();
}
