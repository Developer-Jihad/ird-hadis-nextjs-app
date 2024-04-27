export default async function getAllbooks() {
  const result = await fetch(
    "https://sever-ird-hadis-app-production.up.railway.app/books"
  );

  if (!result.ok) {
    throw new Error("There was an Error fething Data");
  }
  return result.json();
}
