"use client";
import Image from "next/image";
import { futura } from "../fonts.ts"
import Link from "next/link"
import { useState } from "react";
import { dropdown } from "../navigation_dropdown.tsx";

// Golgi Apparatus
// Image #1 from https://www.britannica.com/science/Golgi-apparatus
// Image #2 from https://www.britannica.com/science/Golgi-apparatus
export default function Home() {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	const toggleDropdown = () => {
		setIsDropdownOpen(!isDropdownOpen);
	};

	return (
		<main className={`${futura.className} flex flex-col h-screen`}>
			<div className="rounded-lg bg-gradient-to-r from-nice-blue-600 to-nice-blue-500 p-7 mx-4 mb-2 mt-4">
				<button
					className="absolute top-2 left-2 rounded-lg bg-nice-purple-400 text-black text-xl mx-4 my-4 object-top-left border-solid border-nice-yellow-300 border-2 p-2"
					onClick={toggleDropdown}
				>
					Navigation
				</button>
				{isDropdownOpen && (
					dropdown()
				)}
				<h1 className="text-black text-center text-6xl font-black p-2 underline decoration-3 decoration-nice-purple-600 decoration-double">Golgi Apparatus</h1>
				<h2 className="text-black text-center text-3xl font-bold mt-2 italic">Sorting and Packaging</h2>
			</div>
			<div className="grid grid-cols-1 grid-rows-2 gap-0 bg-gradient-to-b from-nice-purple-200 to-nice-purple-300 rounded-lg mt-0 w-screen-4 flex-grow mx-4">
				<div className="flex flex-row">
					<div className="flex-grow flex-auto bg-nice-blue-500 rounded-lg mx-4 mt-4 mb-2">
						<p className="text-black text-left text-3xl font-semibold mx-4 my-4 indent-6 leading-loose">
							The <a className="font-extrabold text-nice-pink-600">Golgi apparatus</a>, also known as the 
							golgi complex or golgi body, functions as a factory that is responsible for 
							transporting, modifying, and packaging <a className="font-extrabold text-nice-purple-600">membranes, secretory proteins, and lipids</a>. 
							These proteins and lipids are packaged into <a className="font-extrabold text-nice-pink-600">vesicles</a>, 
							which are sent into the cytoplasm. Much of the material that the <a className="font-extrabold text-nice-purple-600">cell wall</a> is 
							made of passes through the Golgi apparatus. The Golgi apparatus is made up 
							of approximately four to eight <a className="font-extrabold text-nice-pink-600">cisternae</a>, however 
							some may consist of as many as sixty cisternae. Cisternae are long and flattened sac-like structures.
						</p>
					</div>
					<div className="mr-4 self-center shrink-0">
						<Image src="/images/golgi_body.png" alt="" className="rounded-lg border-8 border-solid border-nice-blue-600 object-contain max-h-96 max-w-96" width={350} height={350}/>
					</div>
				</div>
				<div className="flex flex-row">
					<div className="ml-4 self-center shrink-0">
						<Image src="/images/golgi_body_microscope.jpg" alt="" className="rounded-lg border-8 border-solid border-nice-blue-600 object-contain" width={400} height={400}/>
					</div>
					<div className="flex-grow flex-auto bg-nice-blue-500 rounded-lg mx-4 mt-2 mb-4">
						<p className="text-black text-left text-3xl font-semibold mx-4 my-4 indent-6 leading-loose">
							The Golgi apparatus also performs <a className="font-extrabold text-nice-pink-600">lipid metabolism</a>. 
							Lipid metabolism is the process where the stomach and duodenum 
							synthesize and deteriorate lipids to create and store energy. 
							It also synthesizes glycolipids and sphingomyelin. Finally, 
							the Golgi apparatus processes them and then sorts them to the 
							correct <a className="font-extrabold text-nice-purple-600">intracellular compartment</a>, which is the space within the organism's cells.
						</p>
					</div>
				</div>
			</div>
		</main>
	);
}
