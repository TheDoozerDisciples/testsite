"use client";
import Image from "next/image";
import { futura } from "../fonts.ts"
import Link from "next/link"
import { useState } from "react";
import { dropdown } from "../navigation_dropdown.tsx";

// Acknowledgements!
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
				<h1 className="text-black text-center text-6xl font-black p-2 underline decoration-3 decoration-nice-purple-600 decoration-double">Acknowledgements</h1>
				<h2 className="text-black text-center text-3xl font-bold mt-2 italic">Thanks for Giving a Helping Hand!</h2>
			</div>
			<div className="grid grid-cols-1 grid-rows-2 gap-0 bg-gradient-to-b from-nice-blue-200 to-nice-blue-300 rounded-lg mt-0 w-screen-4 flex-grow mx-4">
				<div className="flex flex-row">
					<div className="flex-grow flex-auto bg-nice-blue-500 rounded-lg mx-4 mt-4 mb-2">
						<p className="text-black text-left text-2xl font-semibold mx-4 my-4 indent-6 leading-loose">
							First, we would like to thank Devansh Goel for helping create the base for our project, and Oliver Rich for
							providing some of our 3D printing materials! 
							We would also like to thank all of our parents for buying many of the materials 
							we used to make this project. Last but certainly not least, we would like to thank Dr. Nathan Pumplin for 
							participating in our interview. Without all of these people, this project would not have been possible.
						</p>
					</div>
				</div>
				<div className="flex flex-row justify-center">
					{/*add images of the people here*/}
					<div className=" mx-4 self-center">
						<Image src="/images/devansh.png" alt="" className="rounded-lg border-8 border-solid border-nice-green-600 object-contain" width={300} height={300}/>
					</div>
					<div className=" mx-4 self-center">
						<Image src="/images/pumplin.png" alt="" className="rounded-lg border-8 border-solid border-nice-green-600 object-contain" width={300} height={300}/>
					</div>
					<div className=" mx-4 self-center">
						<Image src="/images/oliver.png" alt="" className="rounded-lg border-8 border-solid border-nice-green-600 object-contain" width={300} height={300}/>
					</div>
				</div>
			</div>
		</main>
	);
}
