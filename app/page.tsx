import Image from "next/image";
// test liam
export default function Home() {
  return (
    <main>
      <div className="rounded-lg bg-blue-500 p-4">
        <h1 className="text-white text-center text-4xl font-black	">Introduction</h1>
      </div>
      <div className="rounded-lg bg-white p-100">
        <p className="text-black text-left">
          This is an example paragraph. Don't forget to google en passant, as it is very unsightreadable for new players.
        </p>
      </div>
    </main>
  );
}
