import Image from "next/image";
// default page, intro
export default function Home() {
  return (
    <main>
      <div className="rounded-lg bg-gradient-to-r from-green-600 to-green-400 p-7 mx-4 mb-2 mt-4">
        <h1 className="text-gray-200 text-center text-6xl font-black">Q4 Bio Project</h1>
        <h2 className="text-gray-200 text-center text-3xl font-bold">By Cyrus Brown, Peter Du, and Liam Sy</h2>
      </div>
      <div className="grid grid-cols-3 grid-rows-2 gap-0 bg-gradient-to-b from-emerald-300 to-emerald-400 rounded-lg mt-0 w-screen-4 h-screen mx-4">
        <div className="col-span-2">
          <p className="text-white text-left text-2xl font-semibold mx-4 my-4 indent-6">As you may know, all life is made up of cells. This project details the inner workings of a plant cell. We interviewed accomplished biologists at UC Davis about the amazing and complex world of plant cell biology.</p>
        </div>
        <div className="mx-4 my-4">
          <Image src="/images/dashspider.jpg" alt="" className="rounded-lg border-8 border-solid border-green-700" width={600} height={378}/>
        </div>
        <div className="mx-4 my-4">
          <Image src="/images/en_passant.png" alt="" className="rounded-lg border-8 border-solid border-green-700" width={300} height={245}/>
        </div>
        <div className="col-span-2">
          <p className="text-white text-left text-2xl font-semibold mx-4 my-4 indent-6">Every component in the model you see before you is removable. To get started, try placing a part on the [base].</p>
        </div>
      </div>
    </main>
  );
}
