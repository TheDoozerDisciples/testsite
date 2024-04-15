import Image from "next/image";
// nucleus info
export default function NucleusInfo(){
  return (
    <main>
      <div className="rounded-lg bg-gradient-to-r from-blue-600 to-blue-400 p-7 mx-4 mb-2 mt-4">
        <h1 className="text-gray-200 text-center text-6xl font-black">The Nucleus</h1>
        <h2 className="text-gray-200 text-center text-3xl font-bold">subcaption?</h2>
      </div>
      <div className="flex bg-gradient-to-b from-sky-300 to-sky-400 rounded-lg mt-0 w-screen-4 flex-col h-screen mx-4">
        <p className="text-white text-left text-2xl font-semibold w-7/12 mx-4 my-4 indent-6">The nucleus is...</p>
      </div>
    </main>
    );
}