import Image from "next/image";
import { futura } from "../fonts.ts"

// Acknowledgements!
export default function Home() {
	return (
		<main className={`${futura.className} flex flex-col h-screen`}>
			<div className="rounded-lg bg-gradient-to-r from-nice-blue-600 to-nice-blue-500 p-7 mx-4 mb-2 mt-4">
				<h1 className="text-black text-center text-6xl font-black p-2 underline decoration-3 decoration-nice-purple-600 decoration-double">Annotated Bibliography</h1>
				<h2 className="text-black text-center text-3xl font-bold mt-2">AKA Works Cited</h2>
			</div>
			<div className="grid grid-cols-1 grid-rows-1 gap-0 bg-gradient-to-b from-nice-blue-200 to-nice-blue-300 rounded-lg mt-0 w-screen-4 flex-grow mx-4">
				<div className="flex flex-row">
					<div className="flex-grow flex-auto bg-nice-blue-500 rounded-lg mx-4 mt-4 mb-2">
						<p className="text-black text-left text-2xl font-semibold mx-4 my-4 indent-6 leading-loose">
                            [insert works cited here]
						</p>
					</div>
				</div>
			</div>
		</main>
	);
}
