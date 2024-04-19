import Image from "next/image";
// template for pages
// COLOR2 should be a slightly lighter variant of COLOR1
export default function Home() {
  return (
    <main>
      <div className="rounded-lg bg-gradient-to-r from-blue-600 to-blue-400 p-7 mx-4 mb-2 mt-4">
        <h1 className="text-gray-200 text-center text-6xl font-black">Vacuoles</h1>
        <h2 className="text-gray-200 text-center text-3xl font-bold">SUBCAPTION</h2>
      </div>
      <div className="grid grid-cols-3 grid-rows-2 gap-0 bg-gradient-to-b from-sky-300 to-sky-400 rounded-lg mt-0 w-screen-4 h-screen mx-4">
        <div className="col-span-2">
          <p className="text-white text-left text-2xl font-semibold mx-4 my-4 indent-6">TEXT</p>
        </div>
        <div className="mx-4 my-4">
          <Image src="/images/dashspider.jpg" alt="" className="rounded-lg border-8 border-solid border-green-700" width={600} height={378}/>
        </div>
        <div className="mx-4 my-4">
          <Image src="/images/dashspider.jpg" alt="" className="rounded-lg border-8 border-solid border-green-700" width={600} height={378}/>
        </div>
        <div className="col-span-2">
          <p className="text-white text-left text-2xl font-semibold mx-4 my-4 indent-6">TEXT</p>
        </div>
      </div>
    </main>
  );
}
