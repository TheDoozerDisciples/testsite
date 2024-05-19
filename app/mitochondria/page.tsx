import Image from "next/image";
import { futura } from "../fonts.ts"

// Mitocondria
// Image #1 from: [link goes here]
// Image #2 from: [link goes here]
export default function Home() {
    return (
        <main className={`${futura.className} flex flex-col h-screen`}>
            <div className="rounded-lg bg-gradient-to-r from-nice-yellow-600 to-nice-yellow-500 p-7 mx-4 mb-2 mt-4">
                <h1 className="text-black text-center text-6xl font-black p-2 underline decoration-3 decoration-nice-purple-600 decoration-double">The Mitochondria</h1>
                <h2 className="text-black text-center text-3xl font-bold mt-2">The Powerhouse of the Cell</h2>
            </div>
            <div className="grid grid-cols-1 grid-rows-2 gap-0 bg-gradient-to-b from-nice-pink-100 to-nice-pink-200 rounded-lg mt-0 w-screen-4 flex-grow mx-4">
                <div className="flex flex-row">
                    <div className="flex-grow flex-auto bg-nice-yellow-400 rounded-lg mx-4 mt-4 mb-2">
                        <p className="text-black text-left text-2xl font-semibold mx-4 my-4 indent-6 leading-loose">
                            <a className="font-extrabold text-nice-blue-600">Mitochondria</a>, commonly called the <a className="font-extrabold text-nice-purple-600">‘Powerhouse of the Cell’</a>, 
                            are organelles found in almost all eukaryotic cells. A mitochondrion’s main purpose is to generate energy 
                            for the cell in the form of <a className="font-extrabold text-nice-pink-600">adenosine triphosphate (ATP)</a>. 
                            ATP is used for many important processes in the cell, making mitochondria one of the most important 
                            organelles of eukaryotic cells. Mitochondria are typically oval in shape and have a 
                            size of about 0.5 to 10 micrometers. 
                        </p>
                    </div>
                    <div className="mr-4 self-center shrink-0">
                        <Image src="/images/dashspider.jpg" alt="" className="rounded-lg border-8 border-solid border-nice-yellow-500 object-contain max-h-96 max-w-96" width={500} height={500}/>
                    </div>
                </div>
                <div className="flex flex-row">
                    <div className="ml-4 self-center shrink-0">
                        <Image src="/images/en_passant.png" alt="" className="rounded-lg border-8 border-solid border-nice-yellow-500 object-contain" width={300} height={300}/>
                    </div>
                    <div className="flex-grow flex-auto bg-nice-yellow-400 rounded-lg mx-4 mt-2 mb-4">
                        <p className="text-black text-left text-2xl font-semibold mx-4 my-4 indent-6 leading-loose">
                            In order to generate ATP, a process called <a className="font-extrabold text-nice-blue-600">cellular respiration</a> occurs in the cytoplasm 
                            and the mitochondria. Cellular respiration requires oxygen and sugar to perform 
                            and creates energy in the form of ATP as a product.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
