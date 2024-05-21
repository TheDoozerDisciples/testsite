"use client";
import Image from "next/image";
import { futura } from "../fonts.ts"
import Link from "next/link"
import { useState } from "react";
import { dropdown } from "../navigation_dropdown.tsx";

// The Cell Membrane: The Gatekeeper of the Cell
// Image #1 from https://www.thoughtco.com/cell-membrane-373364
// Image #2 from https://www.nature.com/scitable/topicpage/cell-membranes-14052567/
export default function Home() {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	const toggleDropdown = () => {
		setIsDropdownOpen(!isDropdownOpen);
	};

	return (
		<main className={`${futura.className} flex flex-col h-screen`}>
			<div className="rounded-lg bg-gradient-to-r from-nice-blue-600 to-nice-blue-500 p-7 mx-4 mb-2 mt-4">
				<button
					className="absolute top-2 left-2 rounded-lg bg-nice-purple-400 hover:bg-nice-purple-500 text-black text-xl mx-4 my-4 object-top-left border-solid border-nice-yellow-300 border-2 p-2"
					onClick={toggleDropdown}
				>
					Navigation
				</button>
				{isDropdownOpen && (
					dropdown()
				)}
				<h1 className="text-black text-center text-6xl font-black p-2 underline decoration-3 decoration-nice-purple-600 decoration-double">The Cell Membrane</h1>
				<h2 className="text-black text-center text-3xl font-bold mt-2 italic">Gatekeeper of the Cell</h2>
			</div>
			<div className="grid grid-cols-1 grid-rows-2 gap-0 bg-gradient-to-b from-nice-blue-200 to-nice-blue-300 rounded-lg mt-0 w-screen-4 flex-grow mx-4">
				<div className="flex flex-row">
					<div className="flex-grow flex-auto bg-nice-blue-500 rounded-lg mx-4 mt-4 mb-2">
						<p className="text-black text-left text-3xl font-semibold mx-4 my-4 indent-6 leading-loose">
							The <a className="font-extrabold text-nice-pink-600">cell membrane</a> is a thin membrane surrounding every living cell. It acts 
							primarily as protection, as it is a <a className="font-extrabold text-nice-purple-600">selectively permeable</a> membrane 
							that keeps out unwanted substances. It is primarily composed of lipids and proteins, 
							both of which are of two types. Membrane lipids are either phospholipids or sterols, 
							while membrane proteins are either extrinsic or intrinsic.
						</p>
					</div>
					<div className="mr-4 self-center shrink-0">
						<Image src="/images/cell_membrane.png" alt="" className="rounded-lg border-8 border-solid border-nice-blue-600 object-contain max-h-96 max-w-96" width={500} height={500}/>
					</div>
				</div>
				<div className="flex flex-row">
					<div className="ml-4 self-center shrink-0">
						<Image src="/images/selective_transport.jpg" alt="" className="rounded-lg border-8 border-solid border-nice-blue-600 object-contain" width={350} height={350}/>
					</div>
					<div className="flex-grow flex-auto bg-nice-blue-500 rounded-lg mx-4 mt-2 mb-4">
						<p className="text-black text-left text-3xl font-semibold mx-4 my-4 indent-6 leading-loose">
							The cell membrane is composed of a <a className="font-extrabold text-nice-pink-600">phospholipid bilayer</a>, which is a 
							double layer of phospholipids. The phospholid bilayer has hydrophilic heads and 
							a hydrophilic tail. The structure of the membrane is such small molecules can pass through it, while larger
							molecules, charged ions, etc. cannot. The proteins in the membrane help cells to communicate, maintain 
							their shape, and transport substances in and out of the cell. Some proteins are specialized to transport
							specific types of molecules in and out of the cell, such as glucose, amino acids, or ions.
						</p>
					</div>
				</div>
			</div>
		</main>
	);
}
