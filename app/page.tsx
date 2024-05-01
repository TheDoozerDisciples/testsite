import Image from "next/image";
import { futura } from "./fonts.ts"
import Link from "next/link"

// default page, intro
export default function Home() {
	return (
		<main className={`${futura.className} flex flex-col h-screen`}>
			<div className="rounded-lg bg-gradient-to-r from-nice-blue-600 to-nice-blue-500 p-7 mx-4 mb-2 mt-4">
				<Link href="/navigation" className="absolute top-2 left-2 rounded-lg bg-black text-nice-purple-600 text-xl mx-4 my-4 object-top-left border-solid border-nice-yellow-300 border-2">Navigation</Link>
				<h1 className="text-black text-center text-6xl font-black p-2 underline decoration-3 decoration-nice-purple-700 decoration-double">The Plant Cell</h1>
				<h2 className="text-black text-center text-3xl font-bold mt-2">By Cyrus Brown, Peter Du, and Liam Sy</h2>
			</div>
			<div className="grid grid-cols-1 grid-rows-2 gap-0 bg-gradient-to-b from-nice-yellow-200 to-nice-yellow-300 rounded-lg mt-0 w-screen-4 flex-grow mx-4">
				<div className="flex flex-row">
					<div className="flex-grow flex-auto bg-nice-green-500 rounded-lg mx-4 mt-4 mb-2">
						<p className="text-black text-left text-2xl font-semibold mx-4 my-4 indent-6 leading-loose">
							As you may know, <a className="font-extrabold text-nice-purple-500">all life is made up of cells</a>. This project details the inner workings of a typical plant cell. 
							We interviewed accomplished biologists at <a className="font-black text-nice-yellow-500">UC Davis</a> about 
							the amazing and complex world of <a className=" font-extrabold text-nice-blue-700">plant cell biology</a>.
							We also created a 3D model of a plant cell to help visualize what we learned.
						</p>
					</div>
					<div className="mx-4 self-center flex-auto">
						<Image src="/images/uc_davis_logo.png" alt="" className="rounded-lg border-8 border-solid border-nice-pink-300 object-contain max-h-96 max-w-96" width={400} height={400}/>
					</div>
				</div>
				<div className="flex flex-row">
					<div className="mx-4 self-center flex-auto">
						<Image src="/images/plant_cell.jpg" alt="" className="rounded-lg border-8 border-solid border-nice-pink-300 object-contain" width={400} height={400}/>
					</div>
					<div className="flex-grow flex-auto bg-nice-purple-400 rounded-lg mx-4 mt-2 mb-4">
						<p className="text-black text-left text-2xl font-semibold mx-4 my-4 indent-6 leading-loose">
							Every component in the model you see before you is <a className="font-extrabold text-nice-blue-600">removable</a>. 
							To get started, try placing a part of the cell on the base.
						</p>
					</div>
				</div>
			</div>
		</main>
	);
}
