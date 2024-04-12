import Image from "next/image";
// test liam
export default function Home() {
  return (
    <main>
      <div className="rounded-lg bg-gradient-to-r from-green-600 to-green-400 p-7 mx-4 mb-2 mt-4">
        <h1 className="text-gray-200 text-center text-6xl font-black	">Insert Title Here</h1>
        <h2 className="text-gray-200 text-center text-3xl font-bold">By Cyrus Brown, Peter Du, and Liam Sy</h2>
      </div>
      <div className="flex bg-gradient-to-b from-emerald-300 to-emerald-400 rounded-lg mt-0 w-screen-4 flex-col h-screen mx-4">
        <p className="text-white text-left text-2xl font-semibold w-7/12 mx-4 my-4">WoW! FIRE IN THE HOLE!!!! GOOGLE EN PASSANT!!! SILKSONG COMES OUT TOMORROW FR!!! BRO SLAY THE SPIRE II IS IN 2025 ISTG 2025 HAS GOT TO BE THE BEST YEAR EVER JUST FOR THAT...</p>
        <Image src="/images/dashspider.jpg" alt="idk man this seems too unsightreadable for new players" width={600} height={378}/>
      </div>
    </main>
  );
}
