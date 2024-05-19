import Image from "next/image";
import { futura } from "../fonts.ts"

// Acknowledgements!
export default function Home() {
	return (
		<main className={`${futura.className} flex flex-col h-screen`}>
			<div className="rounded-lg bg-gradient-to-r from-nice-blue-600 to-nice-blue-500 p-7 mx-4 mb-2 mt-4">
				<h1 className="text-black text-center text-6xl font-black p-2 underline decoration-3 decoration-nice-purple-600 decoration-double">Acknowledgements</h1>
				<h2 className="text-black text-center text-3xl font-bold mt-2">Thanks for Giving a Helping Hand!</h2>
			</div>
			<div className="grid grid-cols-1 grid-rows-2 gap-0 bg-gradient-to-b from-nice-blue-200 to-nice-blue-300 rounded-lg mt-0 w-screen-4 flex-grow mx-4">
				<div className="flex flex-row">
					<div className="flex-grow flex-auto bg-nice-blue-500 rounded-lg mx-4 mt-4 mb-2">
						<p className="text-black text-left text-2xl font-semibold mx-4 my-4 indent-6 leading-loose">
                        Thanks to Devansh Goel for helping create the base for our project, and Oliver Rich for
						providing some of our 3D printing materials! 
                        We would also like to thank all of our parents for buying many of the materials 
                        we used to make this project. Finally, we would like to thank Dr. Nathan Pumplin for 
						participating in our interview. Without all of these people, this project would not have been possible.
						</p>
					</div>
				</div>
				<div className="flex flex-row">
					{/*add images of the people here*/}
					<div className=" mx-4 self-center flex-auto">
						<Image src="/images/en_passant.png" alt="" className="rounded-lg border-8 border-solid border-nice-green-600 object-contain" width={300} height={300}/>
					</div>
				</div>
			</div>
		</main>
	);
}
