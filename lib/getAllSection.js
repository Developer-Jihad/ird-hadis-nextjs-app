export default async function getAllSection() {
  const result = await fetch(
    "https://sever-ird-hadis-app-production.up.railway.app/section"
  );

  if (!result.ok) {
    throw new Error("There was an Error fething Data");
  }
  return result.json();
}
