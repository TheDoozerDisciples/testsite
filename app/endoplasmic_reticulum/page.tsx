import Image from "next/image";
import { futura } from "../fonts.ts"

// Endoplasmic Reticulum (and ribosomes)
// Image #1 from https://www.britannica.com/science/endoplasmic-reticulum
// Image #2 from https://www.news-medical.net/life-sciences/Ribosome-Function-in-Cells.aspx
// write a little more under ribosomes
export default function Home() {
    return (
        <main className={`${futura.className} flex flex-col h-screen`}>
            <div className="rounded-lg bg-gradient-to-r from-nice-purple-600 to-nice-purple-500 p-7 mx-4 mb-2 mt-4">
                <h1 className="text-black text-center text-6xl font-black p-2 underline decoration-3 decoration-nice-blue-400 decoration-double">Endoplasmic Reticulum & Ribosomes</h1>
                <h2 className="text-black text-center text-3xl font-bold mt-2 italic">Protein and Lipid Synthesizing</h2>
            </div>
            <div className="grid grid-cols-1 grid-rows-2 gap-0 bg-gradient-to-b from-nice-blue-200 to-nice-blue-300 rounded-lg mt-0 w-screen-4 flex-grow mx-4">
                <div className="flex flex-row">
                    <div className="flex-grow flex-auto bg-nice-purple-400 rounded-lg mx-4 mt-4 mb-2">
                        <p className="text-black text-left text-2xl font-semibold mx-4 my-4 indent-6 leading-loose">
                            There are two types of endoplasmic reticulum found in 
                            cells: <a className="font-extrabold text-nice-blue-600">rough endoplasmic reticulum</a> is 
                            named for its rough appearance, which is caused by 
                            the <a className="font-extrabold text-nice-yellow-500">ribosomes</a> attached to it. Rough ER lies immediately outside of the nucleus, 
                            and its membrane appears to be continuous with the outer layer of the nuclear membrane. 
                            Its main purpose is to hold ribosomes, which synthesize 
                            various <a className="font-extrabold text-nice-blue-600">proteins</a> sent to the rough ER. The 
                            <a className="font-extrabold text-nice-yellow-500">smooth endoplasmic reticulum</a> is located next to the 
                            rough ER, but it has a different function. It is not 
                            associated with ribosomes, and instead of synthesizing proteins, it helps 
                            synthesize <a className="font-extrabold text-nice-blue-600">lipids</a>, such as cholesterol and phospholipids.
                        </p>
                    </div>
                    <div className="mr-4 self-center shrink-0">
                        <Image src="/images/endoplasmic_reticulum.jpg" alt="" className="rounded-lg border-8 border-solid border-nice-purple-500 object-contain" width={325} height={325}/>
                    </div>
                </div>
                <div className="flex flex-row">
                    <div className="ml-4 self-center shrink-0">
                        <Image src="/images/ribosome.png" alt="" className="rounded-lg border-8 border-solid border-nice-purple-500 object-contain" width={400} height={400}/>
                    </div>
                    <div className="flex-grow flex-auto bg-nice-purple-400 rounded-lg mx-4 mt-2 mb-4">
                        <p className="text-black text-left text-2xl font-semibold mx-4 my-4 indent-6 leading-loose">
                            Ribosomes were first discovered in 1955 by George E. Palade. They are generally associated with the rough endoplasmic reticulum, 
                            but they can also be free particles in the cytoplasm. A single eukaryotic cell may contain as many 
                            as 10 million ribosomes, making them incredibly abundant in cells. 
                            In eukaryotes, ribosomes are approximately half protein and half <a className="font-extrabold text-nice-blue-600">RNA</a>. 
                            Ribosomes help convert genetic code into proteins, making them very important for life.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
