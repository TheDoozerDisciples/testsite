import Image from "next/image";
import { futura } from "../fonts.ts"
import Link from "next/link"

// Navigation page, contains links to every other page

export default function Home() {
	return (
		<main className={`${futura.className} flex flex-col h-screen`}>
			<div className="rounded-lg bg-gradient-to-r from-nice-blue-600 to-nice-blue-500 p-7 mx-4 mb-2 mt-4">
				<h1 className="text-black text-center text-6xl font-black p-2 underline decoration-3 decoration-nice-purple-600 decoration-double">NAVIGATION (ONLY FOR PEER REVIEWERS, NOT TO BE USED IN FINISHED PRODUCT)</h1>
				<h2 className="text-black text-center text-3xl font-bold mt-2">Links to all the other pages are here</h2>
			</div>
			<div className="gap-0 bg-gradient-to-b from-nice-blue-400 to-nice-blue-500 rounded-lg mt-0 w-screen-4 flex-grow mx-4">
				<div className="flex flex-row">
					<div className="flex-grow flex-auto bg-nice-yellow-500 rounded-lg mx-4 mt-4 mb-2">
						<p className="text-blue-400 underline decoration-4 decoration-blue-400 text-left text-2xl font-semibold mt-4 mb-2 mx-4 leading-loose">
							<Link href="/">Home Page/Default</Link>
						</p>
                        <p className="text-blue-400 underline decoration-4 decoration-blue-400 text-left text-2xl font-semibold mt-4 mb-2 mx-4 leading-loose">
							<Link href="/page_template">Page Template</Link>
						</p>
                        <p className="text-blue-400 underline decoration-4 decoration-blue-400 text-left text-2xl font-semibold mt-4 mb-2 mx-4 leading-loose">
							<Link href="/cell_membrane">Cell Membrane</Link>
						</p>
					</div>
				</div>
			</div>
		</main>
	);
}
