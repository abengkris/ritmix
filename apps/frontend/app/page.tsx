import type { Metadata } from "next"

// async function fetchArtists() {
//     const res = await fetch("http://localhost:8000/api/artists", {
//         cache: "no-store"
//     });
//     return res.json();
// }

export const metadata: Metadata = {
  title: "Ritmix",
  description: "One stop music environment"
}

export default async function Home() {
  const artists = [{ id: 1, name: 'Artist one' }]; // Mock data
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-gray-800">Ritmix - One stop music</h1>
      <ul>
        {artists.map((artist: { id: number; name: string }) => (
          <li key={artist.id} className="text-gray-600">{artist.name}</li>
        ))}
      </ul>
    </div>
  );
}