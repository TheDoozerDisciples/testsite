import Image from "next/image";
import { futura } from "./fonts.ts"

// default page, intro
export default function Home() {
	return (
		<main className={`${futura.className} flex flex-col h-screen`}>
			<div className="rounded-lg bg-gradient-to-r from-nice-blue-600 to-nice-blue-500 p-7 mx-4 mb-2 mt-4">
				<h1 className="text-black text-center text-6xl font-black p-2 underline decoration-3 decoration-nice-purple-700 decoration-double">The Plant Cell</h1>
				<h2 className="text-black text-center text-4xl font-bold mt-2">By Cyrus Brown, Peter Du, and Liam Sy</h2>
			</div>
			<div className="grid grid-cols-1 grid-rows-2 gap-0 bg-gradient-to-b from-nice-yellow-200 to-nice-yellow-300 rounded-lg mt-0 w-screen-4 flex-grow mx-4">
				<div className="flex flex-row">
					<div className="flex-grow flex-auto bg-nice-green-500 rounded-lg mx-4 mt-4 mb-2">
						<p className="text-black text-left text-3xl font-semibold mx-4 my-4 indent-6 leading-loose">
							As you may know, <a className="font-extrabold text-nice-purple-500">all life is made up of cells</a>. This project details the inner workings of a typical plant cell. 
							We interviewed biologist <a className="font-black text-nice-pink-500">Dr. Nathan Pumplin</a>, CEO of Norfolk Healthy Produce, about 
							the amazing and complex world of <a className=" font-extrabold text-nice-blue-700">plant biology</a>. 
							We also created a 3D model of a plant cell to help visualize what we have learned. There are also several other 
							models that correspond to different things, such as the annotated bibliography, 
							interview takeaways, or acknowledgements.
						</p>
					</div>
					<div className="mr-4 self-center shrink-0">
						<Image src="/images/norfolk_healthy_produce.png" alt="" className="rounded-lg border-8 border-solid border-nice-pink-300 object-contain" width={400} height={400}/>
					</div>
				</div>
				<div className="flex flex-row">
					<div className="ml-4 self-center shrink-0">
						<Image src="/images/plant_cell.jpg" alt="" className="rounded-lg border-8 border-solid border-nice-pink-300 object-contain" width={400} height={400}/>
					</div>
					<div className="flex-grow flex-auto bg-nice-purple-400 rounded-lg mx-4 mt-2 mb-4">
						<p className="text-black text-left text-3xl font-semibold mx-4 mt-4 indent-6 leading-loose">
							Every component in the model you see before you is <a className="font-extrabold text-nice-blue-600">removable</a>. 
							To get started, try placing a part of the cell on the base. Please be patient, it can take a little bit of time to load. 
							Do not touch any of the components other than the model, and place the model parts back where they were after you are done reading.
						</p>
						<p className="text-black text-left text-2xl font-semibold mx-4 mt-2 mb-4 indent-6 leading-loose">
							DISCLAIMER: This model is <a className="font-extrabold text-red-600">NOT</a> to scale. Cell parts may be shaped differently in this model than in reality. 
							For example, in this model the cell wall is below all the other cell parts and is filled in, but 
							in reality the cell wall surrounds all the other cell parts and is is not filled in. A similar misrepresentation can 
							be seen with the model of the cell membrane. Note that these misrepresentations are 
							for educational purposes, as it makes it easier to show each individual cell part.
						</p>
					</div>
				</div>
			</div>
		</main>
	);
}
