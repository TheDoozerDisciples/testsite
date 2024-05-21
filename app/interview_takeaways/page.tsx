"use client";
import Image from "next/image";
import { futura } from "../fonts.ts"
import Link from "next/link"
import { useState } from "react";
import { dropdown } from "../navigation_dropdown.tsx";

// Interview Takeawys
export default function Home() {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	const toggleDropdown = () => {
		setIsDropdownOpen(!isDropdownOpen);
	};

	return (
		<main className={`${futura.className} flex flex-col h-screen`}>
			<div className="rounded-lg bg-gradient-to-r from-nice-purple-600 to-nice-purple-500 p-7 mx-4 mb-2 mt-4">
				<h1 className="text-black text-center text-6xl font-black p-2 underline decoration-3 decoration-nice-purple-700 decoration-double">Interview Takeaways</h1>
				<h2 className="text-black text-center text-4xl font-bold mt-2">W/Nathan Pumplin</h2>
			</div>
			<div className="flex flex-col bg-gradient-to-b from-nice-yellow-200 to-nice-yellow-300 rounded-lg mt-0 w-screen-4 flex-grow mx-4">
				<div className="flex flex-row flex-grow">
					<div className="flex-grow flex-auto bg-nice-purple-400 rounded-lg mx-4 mt-4 mb-2">
						<p className="text-black text-left text-xl font-semibold mx-4 my-4 leading-loose">
                            - Dr. Pumplin has worked in the field for around 20 years. He initially started out with research and devlopment
                                in university research, and eventually moved into how that basic science can actually impact our lives.<br />
                            - Biological technology is something that seems to carry a negative connotation with a lot of people, but it 
                                is technology that has brought many benefits into the world. <br />
                            - His company, Norfolk Healthy Produce, produces and sells bioengineered purple tomatoes. <br />
                            - Even with all the company management responsibilities, he still uses his knowledge of biology a lot. 
                                He said, "So sometimes I'm using my knowledge to develop better tomatoes, sometimes I'm using my knowledge to work on regulatory questions so we’re able to sell our tomatoes. A lot of times i’m using my biology knowledge to explain to people why is our product so great and why is bioengineering such great technology to use to improve our food. And thats something where its different from working in a lab and doing experiments, Its really important in my view to have the expertise and to have the experience because I can answer a lot of questions and I can uh represent as an expert really with knowledge."<br />
							- One of the most interesting things he said was about the way cells distribute and produce proteins and sugars. 
                                He said, "what’s amazing is it looked a heck of a lot like a grocery store chain, like how they distribute different products from suppliers, warehouses, on the shelf, where we buy it every day" <br />
                            - There is probably the most amount of research done on chloroplasts out of all of the plant cell organelles. <br />
                            - Cells have polarity, which means that they have a top and a bottom, left and right, etc. 
								Dr. Pumplin did a lot of his PhD research on this topic. The complex interactions between proteins
								is what causes this, but a lot about this phenomenon is still unknown.
						</p>
					</div>
					<div className="flex flex-col ml-4 mr-2">
						<div className="self-center shrink-0 mb-6">
							<Image src="/images/norfolk_healthy_produce.png" alt="" className="rounded-lg border-8 border-solid border-nice-pink-300 object-contain" width={500} height={500}/>
						</div>
						<div className="self-center shrink-0 mt-6">
							<Image src="/images/purple_tomato.webp" alt="" className="rounded-lg border-8 border-solid border-nice-pink-300 object-contain" width={500} height={500}/>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
