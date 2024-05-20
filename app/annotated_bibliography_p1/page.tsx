import Image from "next/image";
import { futura } from "../fonts.ts"

// Acknowledgements!
export default function Home() {
	return (
		<main className={`${futura.className} flex flex-col h-screen`}>
			<div className="rounded-lg bg-gradient-to-r from-nice-blue-600 to-nice-blue-500 p-7 mx-4 mb-2 mt-4">
				<h1 className="text-black text-center text-6xl font-black p-2 underline decoration-3 decoration-nice-purple-600 decoration-double">Annotated Bibliography</h1>
				<h2 className="text-black text-center text-3xl font-bold mt-2">AKA Works Cited</h2>
			</div>
			<div className="grid grid-cols-1 grid-rows-1 gap-0 bg-gradient-to-b from-nice-blue-200 to-nice-blue-300 rounded-lg mt-0 w-screen-4 flex-grow mx-4">
				<div className="flex flex-row">
					<div className="basis-6/12 bg-nice-blue-500 rounded-lg mx-4 mt-4 mb-2"> {/*Sources #1-#10*/}
						<div className="text-black text-left text-base mx-4 my-2">
							<div className="my-2">{/*Source #1*/}
								<p>
								“Chloroplast.” <a className="italic">Funk & Wagnalls New World Encyclopedia</a>, Jan. 2018, p. 1. <a className="italic">EBSCOhost</a>, research.ebsco.com/linkprocessor/plink?id=b7671787-17b8-3725-b420-2d495ab88b0c
								</p>
								<p className="indent-6">
									- We used this source because it tells us about chloroplast&shy;
									- This is a reliable source because its from EBSCOhost
								</p>
							</div>
							<div className="my-2">{/*Source #2*/}
								<p>
									Hamilton, Garry. “The Micromanagers.” New Scientist, vol. 223, no. 2987, Sept. 2014, pp. 42–45. <a className="italic">EBSCOhost</a>, https://research.ebsco.com/c/bpxw7x/viewer/html/qbhbigpdsf 
								</p>
								<p className="indent-6">
									- We used this source because it tells us about mitochondria&shy;
									- This is a reliable source because its from EBSCOhost
								</p>
							</div>
							<div className="my-2">{/*Source #3*/}
								<p>
								“Golgi Apparatus.” <a className="italic">Funk & Wagnalls New World Encyclopedia</a>, Jan. 2018, p. 1. <a className="italic">EBSCOhost</a>, https://research.ebsco.com/c/bpxw7x/viewer/html/l3tcf53fwj?route=details
								</p>
								<p className="indent-6">
									- We used this source because it tells us about the golgi apparatus&shy;
									- This is a reliable source because its from EBSCOhost
								</p>
							</div>
							<div className="my-2">{/*Source #4*/}
								<p>
									“Ribosome.” <a className="italic">Funk & Wagnalls New World Encyclopedia</a>, Jan. 2018, p. 1. <a className="italic">EBSCOhost</a> https://research.ebsco.com/c/bpxw7x/viewer/html/d5bj4syxcz?route=details
								</p>
								<p className="indent-6">
									- [reason why we used it]&shy;
									- [reason why it's credible]
								</p>
							</div>
							<div className="my-2">{/*Source #5*/}
								<p>
									[MLA citation]
								</p>
								<p className="indent-6">
									- [reason why we used it]&shy;
									- [reason why it's credible]
								</p>
							</div>
							<div className="my-2">{/*Source #6*/}
								<p>
									[MLA citation]
								</p>
								<p className="indent-6">
									- [reason why we used it]&shy;
									- [reason why it's credible]
								</p>
							</div>
							<div className="my-2">{/*Source #7*/}
								<p>
									[MLA citation]
								</p>
								<p className="indent-6">
									- [reason why we used it]&shy;
									- [reason why it's credible]
								</p>
							</div>
							<div className="my-2">{/*Source #8*/}
								<p>
									[MLA citation]
								</p>
								<p className="indent-6">
									- [reason why we used it]&shy;
									- [reason why it's credible]
								</p>
							</div>
							<div className="my-2">{/*Source #9*/}
								<p>
									[MLA citation]
								</p>
								<p className="indent-6">
									- [reason why we used it]&shy;
									- [reason why it's credible]
								</p>
							</div>
							<div className="my-2">{/*Source #10*/}
								<p>
									[MLA citation]
								</p>
								<p className="indent-6">
									- [reason why we used it]&shy;
									- [reason why it's credible]
								</p>
							</div>
						</div>
					</div>
					<div className="basis-6/12 bg-nice-blue-500 rounded-lg mx-4 mt-4 mb-2"> {/*Sources #11-#20*/}
						<div className="text-black text-left text-base mx-4 my-2">
							<div className="my-2">{/*Source #11*/}
								<p>
									[MLA citation]
								</p>
								<p className="indent-6">
									- [reason why we used it]&shy;- [reason why it's credible]
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
