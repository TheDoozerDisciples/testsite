"use client";
import Image from "next/image";
import { futura } from "../fonts.ts"
import Link from "next/link"
import { useState } from "react";
import { dropdown } from "../navigation_dropdown.tsx";

// The Nucleus
// Image #1 from: https://biologydictionary.net/cell-nucleus/
// Image #2 from: https://www.britannica.com/science/nucleus-biology#/media/1/422009/299945
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
                <h1 className="text-black text-center text-6xl font-black p-2 underline decoration-3 decoration-nice-purple-600 decoration-double">The Nucleus</h1>
                <h2 className="text-black text-center text-3xl font-bold mt-2 italic">Genetic Information Center</h2>
            </div>
            <div className="grid grid-cols-1 grid-rows-2 gap-0 bg-gradient-to-b from-nice-green-200 to-nice-green-300 rounded-lg mt-0 w-screen-4 flex-grow mx-4">
                <div className="flex flex-row">
                    <div className="flex-grow flex-auto bg-nice-blue-400 rounded-lg mx-4 mt-4 mb-2">
                        <p className="text-black text-left text-3xl font-semibold mx-4 my-4 indent-6 leading-loose">
                            The <a className="font-extrabold text-nice-purple-600">nucleus</a> is a large circular object that can be found in almost all cells, 
                            except those of bacteria and blue-green algae. It is separated from the rest of the cell by 
                            the <a className="font-extrabold text-nice-purple-600">nuclear membrane</a> and contains the 
                            cell’s <a className="font-extrabold text-nice-pink-600">genes</a>, acting as the main center of information for a 
                            cell. <a className="font-extrabold text-nice-pink-600">DNA</a> is stored in <a className="font-extrabold text-nice-purple-600">chromosomes</a>, 
                            staying bundled together except during <a className="font-extrabold text-nice-pink-600">cell division</a>. 
                            DNA is transcribed into <a className="font-extrabold text-nice-pink-600">messenger RNA</a>, which 
                            is used to encode the information for proteins. The mRNA are then transported through the nuclear envelope
                            and into the cytoplasm, where they are translated into proteins.
                        </p>
                    </div>
                    <div className="mr-4 self-center shrink-0">
                        <Image src="/images/nucleus_microscope.png" alt="" className="rounded-lg border-8 border-solid border-nice-blue-600 object-contain mt-2" width={250} height={250}/>
                    </div>
                </div>
                <div className="flex flex-row">
                    <div className="ml-4 self-center shrink-0">
                        <Image src="/images/nucleus.jpg" alt="" className="rounded-lg border-8 border-solid border-nice-blue-600 object-contain" width={400} height={400}/>
                    </div>
                    <div className="flex-grow flex-auto bg-nice-blue-400 rounded-lg mx-4 mt-2 mb-4">
                        <p className="text-black text-left text-3xl font-semibold mx-4 my-4 indent-6 leading-loose">
                            Inside the nucleus is the <a className="font-extrabold text-nice-purple-600">nucleolus</a>, 
                            which is involved in the synthesis of <a className="font-extrabold text-nice-pink-600">ribosomal RNA</a> and 
                            the formation of <a className="font-extrabold text-nice-purple-600">ribosomes</a>. 
                            The nucleolus contains the genes that encode rRNA. 
                            To form ribosomes, molecules of rRNA combine with ribosomal proteins inside of the nucleolus. 
                            The subunits formed by this process are returned to the cytoplasm for final assembly.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
