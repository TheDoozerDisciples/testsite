"use client";
import Image from "next/image";
import { futura } from "../fonts.ts"
import Link from "next/link"
import { useState } from "react";
import { dropdown } from "../navigation_dropdown.tsx";

// Cell Wall: Armor of the Cell
// Image #1 from https://www.sciencefacts.net/cell-wall.html
// Image #2 from https://microbenotes.com/plasmodesmata-structure-functions/
export default function Home() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	const toggleDropdown = () => {
		setIsDropdownOpen(!isDropdownOpen);
	};

	return (
		<main className={`${futura.className} flex flex-col h-screen`}>
			<div className="rounded-lg bg-gradient-to-r from-nice-green-700 to-nice-green-600 p-7 mx-4 mb-2 mt-4">
            	<button
					className="absolute top-2 left-2 rounded-lg bg-nice-purple-400 text-black text-xl mx-4 my-4 object-top-left border-solid border-nice-yellow-300 border-2 p-2"
					onClick={toggleDropdown}
				>
					Navigation
				</button>
				{isDropdownOpen && (
					dropdown()
				)}
				<h1 className="text-black text-center text-6xl font-black p-2 underline decoration-3 decoration-nice-purple-600 decoration-double">The Cell Wall</h1>
				<h2 className="text-black text-center text-3xl font-bold mt-2 italic">Armor of the Cell</h2>
			</div>
			<div className="grid grid-cols-1 grid-rows-2 gap-0 bg-gradient-to-b from-nice-yellow-300 to-nice-yellow-400 rounded-lg mt-0 w-screen-4 flex-grow mx-4">
				<div className="flex flex-row">
					<div className="flex-grow flex-auto bg-nice-green-500 rounded-lg mx-4 mt-4 mb-2">
						<p className="text-black text-left text-2xl font-semibold mx-4 mt-4 indent-6 leading-loose">
                            The <a className="font-extrabold text-nice-blue-700">cell wall</a> is a form of <a className="font-extrabold text-nice-pink-600">extracellular matrix</a> that serves as structural support for the cell. 
                            In addition, it also provides <a className="font-extrabold text-nice-purple-600">mechanical and chemical protection</a>, provides a medium for the circulation and 
                            distribution of water and other nutrients. 
						</p>
                        <p className="text-black text-left text-2xl font-semibold mx-4 my-t-2 mb-4 indent-6 leading-loose">
                            All cell walls contain at least <a className="font-extrabold text-nice-blue-700">two layers</a>: 
                            the <a className="font-extrabold text-nice-pink-600">middle lamella</a> and the <a className="font-extrabold text-nice-pink-600">primary cell wall</a>. 
                            Many cells produce a third layer, called the <a className="font-extrabold text-nice-pink-600">secondary wall</a>. 
                            The middle lamella serves as a sort of cement between the primary walls of adjacent cells. 
                            The primary cell wall contains <a className="font-extrabold text-nice-purple-600">cell wall</a> and is laid down by cells that are dividing and growing. 
                            A fully grown plant cell may either thicken its primary wall, or it would create the secondary wall. 
                            The secondary wall is responsible for most of a plant’s mechanical support and is 
                            much more rigid than the primary wall.
						</p>
					</div>
					<div className="mr-4 self-center shrink-0">
						<Image src="/images/cell_wall.jpg" alt="" className="rounded-lg border-8 border-solid border-nice-green-600 object-contain max-h-96 max-w-96" width={500} height={500}/>
					</div>
				</div>
				<div className="flex flex-row">
					<div className="ml-4 self-center shrink-0">
						<Image src="/images/plasmodesma.jpg" alt="" className="rounded-lg border-8 border-solid border-nice-green-600 object-contain" width={500} height={500}/>
					</div>
					<div className="flex-grow flex-auto bg-nice-green-500 rounded-lg mx-4 mt-2 mb-4">
						<p className="text-black text-left text-3xl font-semibold mx-4 my-4 indent-6 leading-loose">
							There is also a channel connecting the cell walls of adjacent plant cells, called the <a className="font-extrabold text-nice-pink-600">plasmodesma</a>. 
							It allows for direct molecular communication between the adjacent cells. 
							Plasmodesmata are lined with <a className="font-extrabold text-nice-blue-700">cell membrane</a>, 
							effectively connecting every cell in the plant with a single continuous cell membrane.
						</p>
					</div>
				</div>
			</div>
		</main>
	);
}
