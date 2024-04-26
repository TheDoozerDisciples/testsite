import Image from "next/image";
import { futura } from "../fonts.ts"

// default page, intro
export default function Home() {
	return (
		<main>
			<div className="rounded-lg bg-gradient-to-r from-green-600 to-green-400 p-7 mx-4 mb-2 mt-4">
				<div className={futura.className}>
					<h1 className="text-gray-200 text-center text-6xl font-black">TITLE</h1>
					<h2 className="text-gray-200 text-center text-3xl font-bold">SUBCAPTION</h2>
				</div>
			</div>
			<div className="grid grid-cols-1 grid-rows-2 gap-0 bg-gradient-to-b from-emerald-300 to-emerald-400 rounded-lg mt-0 w-screen-4 h-screen mx-4">
				<div className="flex flex-row">
					<div className="flex-grow flex-auto">
						<p className="text-white text-left text-2xl font-semibold mx-8 my-8 indent-6">TEXT</p>
					</div>
					<div className="my-8 mx-8 self-center flex-auto">
						<Image src="/images/dashspider.jpg" alt="" className="rounded-lg border-8 border-solid border-green-700 object-contain max-h-96 max-w-96" width={500} height={500}/>
					</div>
				</div>
				<div className="flex flex-row">
					<div className="my-8 mx-8 self-center flex-auto">
						<Image src="/images/en_passant.png" alt="" className="rounded-lg border-8 border-solid border-green-700 object-contain" width={300} height={300}/>
					</div>
					<div className="flex-grow flex-auto">
						<p className="text-white text-left text-2xl font-semibold mx-4 my-4 indent-6">TEXT</p>
					</div>
				</div>
			</div>
		</main>
	);
}
