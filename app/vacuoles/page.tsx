"use client";
import Image from "next/image";
import { futura } from "../fonts.ts"
import Link from "next/link"
import { useState } from "react";
import { dropdown } from "../navigation_dropdown.tsx";

// Vacuoles
// Image #1 from: https://www.geeksforgeeks.org/vacuoles/
// Image #2 from: https://www.ahmadcoaching.com/2020/11/structure-and-function-of-vacuole.html
export default function Home() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	const toggleDropdown = () => {
		setIsDropdownOpen(!isDropdownOpen);
	};

	return (
		<main className={`${futura.className} flex flex-col h-screen`}>
			<div className="rounded-lg bg-gradient-to-r from-nice-purple-600 to-nice-purple-500 p-7 mx-4 mb-2 mt-4">
                <button
					className="absolute top-2 left-2 rounded-lg bg-nice-purple-400 text-black text-xl mx-4 my-4 object-top-left border-solid border-nice-yellow-300 border-2 p-2"
					onClick={toggleDropdown}
				>
					Navigation
				</button>
				{isDropdownOpen && (
					dropdown()
				)}
				<h1 className="text-black text-center text-6xl font-black p-2 underline decoration-3 decoration-nice-blue-500 decoration-double">Vacuoles</h1>
				<h2 className="text-black text-center text-3xl font-bold mt-2 italic">Waste Management Center</h2>
			</div>
			<div className="flex flex-col bg-gradient-to-b from-nice-blue-300 to-nice-blue-400 rounded-lg mt-0 w-screen-4 flex-grow mx-4">
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
						<Image src="/images/vacuole_2.png" alt="" className="rounded-lg border-8 border-solid border-nice-purple-600 object-contain max-h-96 max-w-96" width={500} height={500}/>
					</div>
				</div>
				<div className="flex flex-row flex-grow">
					<div className="ml-4 self-center shrink-0">
						<Image src="/images/vacuole.jpg" alt="" className="rounded-lg border-8 border-solid border-nice-purple-600 object-contain" width={400} height={400}/>
					</div>
					<div className="flex-grow flex-auto bg-nice-purple-400 rounded-lg mx-4 mt-2 mb-4">
						<p className="text-black text-left text-2xl font-semibold mx-4 my-4 indent-6 leading-loose">
							Vacuoles in plant cells are surrounded with a membrane called the <a className="font-extrabold text-nice-yellow-400">tonoplast</a>, otherwise 
                            known as the vacuolar membrane. Inside a vacuole is a fluid called the <a className="font-extrabold text-nice-pink-600">cell sap</a>, which 
                            consists of water, amino acids, sugars, and salts, and contains variable amounts of food and waste materials.
						</p>
                        <p className="text-black text-left text-2xl font-semibold mx-4 my-4 indent-6 leading-loose">
							Unlike what most common models show, the vacuoles take up almost all of the space in a plant cell. 
                            As Dr. Pumplin said, "...most plant cells are almost entirely vacuole. So, when you look at those 
                            cells in a microscope, what you see is mostly just a clear water balloon and all the other stuff, the 
                            cytoplasm, the endoplasmic reticulum, the golgi body, is actually a very small porportion of the volume 
                            of the cell that's mostly squeezed around the outside."
						</p>
					</div>
				</div>
			</div>
		</main>
	);
}
