export default async function getAllChapter() {
  const result = await fetch(
    "https://sever-ird-hadis-app-production.up.railway.app/chapter"
  );

  if (!result.ok) {
    throw new Error("There was an Error fething Data");
  }
  return result.json();
}
