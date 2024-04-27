export default async function getAllHadith() {
  const result = await fetch(
    "https://sever-ird-hadis-app-production.up.railway.app/hadith"
  );

  if (!result.ok) {
    throw new Error("There was an Error fething Data");
  }
  return result.json();
}
