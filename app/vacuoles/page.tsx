import Image from "next/image";
import { futura } from "../fonts.ts"

// Vacuoles
// Image #1 from: [link goes here]
// Image #2 from: [link goes here]
export default function Home() {
	return (
		<main className={`${futura.className} flex flex-col h-screen`}>
			<div className="rounded-lg bg-gradient-to-r from-nice-purple-600 to-nice-purple-500 p-7 mx-4 mb-2 mt-4">
				<h1 className="text-black text-center text-6xl font-black p-2 underline decoration-3 decoration-nice-blue-500 decoration-double">Vacuoles</h1>
				<h2 className="text-black text-center text-3xl font-bold mt-2 italic">Waste Management Center</h2>
			</div>
			<div className="grid grid-cols-1 grid-rows-2 gap-0 bg-gradient-to-b from-nice-blue-300 to-nice-blue-400 rounded-lg mt-0 w-screen-4 flex-grow mx-4">
				<div className="flex flex-row">
					<div className="flex-grow flex-auto bg-nice-purple-400 rounded-lg mx-4 mt-4 mb-2">
						<p className="text-black text-left text-2xl font-semibold mx-4 my-4 indent-6 leading-loose">
                            A <a className="font-extrabold text-nice-pink-600">vacuole</a> is a membrane-bound organelle that is in both plant and animal cells. 
                            The vacuoles in the animal cells are usually smaller and they isolate waste products. 
                            The vacuoles in the plant cells maintain, balance, store, and transport water. 
                            They also get rid of harmful toxins by bringing them into the cell for conversion. 
                            In plant cells, there is usually a large <a className="font-extrabold text-nice-yellow-400">central vacuole</a>. These vacuoles allow plant 
                            cells to attain a large size without gaining too much bulk, which would make 
                            metabolism difficult.
						</p>
					</div>
					<div className="mr-4 self-center shrink-0">
						<Image src="/images/dashspider.jpg" alt="" className="rounded-lg border-8 border-solid border-nice-purple-600 object-contain max-h-96 max-w-96" width={500} height={500}/>
					</div>
				</div>
				<div className="flex flex-row">
					<div className="ml-4 self-center shrink-0">
						<Image src="/images/en_passant.png" alt="" className="rounded-lg border-8 border-solid border-nice-purple-600 object-contain" width={300} height={300}/>
					</div>
					<div className="flex-grow flex-auto bg-nice-purple-400 rounded-lg mx-4 mt-2 mb-4">
						<p className="text-black text-left text-2xl font-semibold mx-4 my-4 indent-6 leading-loose">
							TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT NEED ENOUGH TEXT FOR THIS TO LINE WRAP
						</p>
					</div>
				</div>
			</div>
		</main>
	);
}
