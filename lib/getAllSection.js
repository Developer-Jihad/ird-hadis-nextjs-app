export default async function getAllSection() {
  const result = await fetch("http://localhost:5000/section");

  if (!result.ok) {
    throw new Error("There was an Error fething Data");
  }
  return result.json();
}
