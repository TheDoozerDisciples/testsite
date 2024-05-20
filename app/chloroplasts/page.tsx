import Image from "next/image";
import { futura } from "../fonts.ts"

// Chloroplasts
// Image #1 from [insert link here]
// Image #2 from [insert link here]
export default function Home() {
	return (
		<main className={`${futura.className} flex flex-col h-screen`}>
			<div className="rounded-lg bg-gradient-to-r from-nice-green-600 to-nice-green-500 p-7 mx-4 mb-2 mt-4">
				<h1 className="text-black text-center text-6xl font-black p-2 underline decoration-3 decoration-nice-purple-600 decoration-double">Chloroplasts</h1>
				<h2 className="text-black text-center text-3xl font-bold mt-2 italic">Photosynthesizers</h2>
			</div>
			<div className="grid grid-cols-1 grid-rows-2 gap-0 bg-gradient-to-b from-nice-blue-200 to-nice-blue-300 rounded-lg mt-0 w-screen-4 flex-grow mx-4">
				<div className="flex flex-row">
					<div className="flex-grow flex-auto bg-nice-green-400 rounded-lg mx-4 mt-4 mb-2">
						<p className="text-black text-left text-2xl font-semibold mx-4 my-4 indent-6 leading-loose">
                            <a className="font-extrabold text-nice-purple-500">Chloroplasts</a> are organelles found only in the cells of photosynthesizing organisms, 
                            mainly plants and green algae. They enable the plant to 
                            perform <a className="font-extrabold text-nice-pink-400">photosynthesis</a> and are what gives plants their green color. 
                            They are a type of <a className="font-extrabold text-nice-purple-500">plastid</a>— a round, oval, or disk-shaped body 
                            involved in the synthesis and/or storage of foodstuffs. What distinguishes 
                            chloroplasts from various other plastids is their green pigment, which is 
                            caused by <a className="font-extrabold text-nice-pink-400">chlorophyll</a>. Chloroplasts are 
                            roughly 5-7 micrometers in diameter.
						</p>
					</div>
					<div className="mr-4 self-center shrink-0">
						<Image src="/images/dashspider.jpg" alt="" className="rounded-lg border-8 border-solid border-nice-green-500 object-contain max-h-96 max-w-96" width={500} height={500}/>
					</div>
				</div>
				<div className="flex flex-row">
					<div className="ml-4 self-center shrink-0">
						<Image src="/images/en_passant.png" alt="" className="rounded-lg border-8 border-solid border-nice-green-500 object-contain" width={300} height={300}/>
					</div>
					<div className="flex-grow flex-auto bg-nice-green-400 rounded-lg mx-4 mt-2 mb-4">
						<p className="text-black text-left text-2xl font-semibold mx-4 my-4 indent-6 leading-loose">
                            Chloroplasts help perform photosynthesis, the process in which plants convert light energy into chemical energy, 
                            creating oxygen and other compounds in the process. First, 
                            the <a className="font-extrabold text-nice-pink-400">electron transport chain</a> converts <a className="font-extrabold text-nice-purple-500">ADP</a> to the energy-rich 
                            storage compound <a className="font-extrabold text-nice-purple-500">ATP</a>. It also creates 
                            <a className="font-extrabold text-nice-pink-400">NADPH</a>, which together with ATP is used in light-independent 
                            reactions that assimilate water and carbon dioxide into organic compounds.
						</p>
					</div>
				</div>
			</div>
		</main>
	);
}
