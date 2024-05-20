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
									- This is a reliable source because it's from EBSCOhost
								</p>
							</div>
							<div className="my-2">{/*Source #2*/}
								<p>
									Hamilton, Garry. “The Micromanagers.” <a className="italic">New Scientist</a>, vol. 223, no. 2987, Sept. 2014, pp. 42–45. <a className="italic">EBSCOhost</a>, https://research.ebsco.com/c/bpxw7x/viewer/html/qbhbigpdsf 
								</p>
								<p className="indent-6">
									- We used this source because it tells us about mitochondria&shy;
									- This is a reliable source because it's from EBSCOhost
								</p>
							</div>
							<div className="my-2">{/*Source #3*/}
								<p>
								“Golgi Apparatus.” <a className="italic">Funk & Wagnalls New World Encyclopedia</a>, Jan. 2018, p. 1. <a className="italic">EBSCOhost</a>, https://research.ebsco.com/c/bpxw7x/viewer/html/l3tcf53fwj?route=details
								</p>
								<p className="indent-6">
									- We used this source because it tells us about the golgi apparatus&shy;
									- This is a reliable source because it's from EBSCOhost
								</p>
							</div>
							<div className="my-2">{/*Source #4*/}
								<p>
									“Ribosome.” <a className="italic">Funk & Wagnalls New World Encyclopedia</a>, Jan. 2018, p. 1. <a className="italic">EBSCOhost</a>, https://research.ebsco.com/c/bpxw7x/viewer/html/d5bj4syxcz?route=details
								</p>
								<p className="indent-6">
									- We used this source because it tells us about ribosomes&shy;
									- This is a reliable source because it's from EBSCOhost
								</p>
							</div>
							<div className="my-2">{/*Source #5*/}
								<p>
									“Vacuole.” <a className="italic">Funk & Wagnalls New World Encyclopedia</a>, Jan. 2018, p. 1. <a className="italic">EBSCOhost</a>, https://research.ebsco.com/c/bpxw7x/viewer/html/b3nqosbacf?route=details
								</p>
								<p className="indent-6">
									- We used this source because it tells us about vacuoles&shy;
									- This is a reliable source because it's from EBSCOhost
								</p>
							</div>
							<div className="my-2">{/*Source #6*/}
								<p>
									“Cell.” <a className="italic">Funk & Wagnalls New World Encyclopedia</a>, Jan. 2018, p. 1. <a className="italic">EBSCOhost</a>, https://research.ebsco.com/c/bpxw7x/viewer/html/gvt432lwor?route=details
								</p>
								<p className="indent-6">
									- We used this source because it tells us about cells in general&shy;
									- This is a reliable source because it's from EBSCOhost
								</p>
							</div>
							<div className="my-2">{/*Source #7*/}
								<p>
									Mukherjee, Santanu. “Cell Wall: Definition, Structure, & Functions with Diagram.” <a className="italic">Science Facts</a>, 16 July 2020, www.sciencefacts.net/cell-wall.html
								</p>
								<p className="indent-6">
									- We used this source because it tells us about cell walls and provides a great picture for our project&shy;
									- This is a reliable source because the author is an expert and the site’s information can be cross referenced with other reliable sources.
								</p>
							</div>
							<div className="my-2">{/*Source #8*/}
								<p>
									The Editors of Encyclopaedia Britannica. "nucleus". <a className="italic">Encyclopedia Britannica</a>, 16 Apr. 2024, https://www.britannica.com/science/nucleus-biology. Accessed 6 May 2024.
								</p>
								<p className="indent-6">
									- We used this source because it tells us about the nucleus&shy;
									- This is a reliable source because it’s from Britannica, which is a well-known source that is fact-checked by experts.
								</p>
							</div>
							<div className="my-2">{/*Source #9*/}
								<p>
									Rogers, Kara. "mitochondrion". <a className="italic">Encyclopedia Britannica</a>, 10 May. 2024, https://www.britannica.com/science/mitochondrion. Accessed 6 May 2024.
								</p>
								<p className="indent-6">
									- We used this source because it tells us about mitochondria&shy;
									- This is a reliable source because it’s from Britannica, which is a well-known source that is fact-checked by experts.
								</p>
							</div>
							<div className="my-2">{/*Source #10*/}
								<p>
									Rogers, Kara. "endoplasmic reticulum". <a className="italic">Encyclopedia Britannica</a>, 25 Apr. 2024, https://www.britannica.com/science/endoplasmic-reticulum. Accessed 13 May 2024.
								</p>
								<p className="indent-6">
									- We used this source because it tells us about the endoplasmic reticulum&shy;
									- This is a reliable source because it’s from Britannica, which is a well-known source that is fact-checked by experts.
								</p>
							</div>
						</div>
					</div>
					<div className="basis-6/12 bg-nice-blue-500 rounded-lg mx-4 mt-4 mb-2"> {/*Sources #11-#20*/}
						<div className="text-black text-left text-base mx-4 my-2">
							<div className="my-2">{/*Source #11*/}
								<p>
									The Editors of Encyclopaedia Britannica. "plant cell". <a className="italic">Encyclopedia Britannica</a>, 3 May. 2024, https://www.britannica.com/science/plant-cell. Accessed 30 April 2024.
								</p>
								<p className="indent-6">
									- We used this source because it tells us about plant cells&shy;
									- This is a reliable source because it’s from Britannica, which is a well-known source that is fact-checked by experts.
								</p>
							</div>
							<div className="my-2">{/*Source #12*/}
								<p>
									Staehelin, L. Andrew. "cell wall". <a className="italic">Encyclopedia Britannica</a>, 2 May. 2024, https://www.britannica.com/science/cell-wall-plant-anatomy. Accessed 6 May 2024.
								</p>
								<p className="indent-6">
									- We used this source because it tells us about the cell wall&shy;
									- This is a reliable source because it’s from Britannica, which is a well-known source that is fact-checked by experts.
								</p>
							</div>
							<div className="my-2">{/*Source #13*/}
								<p>
									The Editors of Encyclopaedia Britannica. "cytoplasm". <a className="italic">Encyclopedia Britannica</a>, 28 Feb. 2024, https://www.britannica.com/science/cytoplasm. Accessed 13 May 2024.
								</p>
								<p className="indent-6">
									- We used this source because it tells us about the cytoplasm&shy;
									- This is a reliable source because it’s from Britannica, which is a well-known source that is fact-checked by experts.
								</p>
							</div>
							<div className="my-2">{/*Source #14*/}
								<p>
									The Editors of Encyclopaedia Britannica. "chloroplast". <a className="italic">Encyclopedia Britannica</a>, 16 Apr. 2024, https://www.britannica.com/science/chloroplast. Accessed 13 May 2024.
								</p>
								<p className="indent-6">
									- We used this source because it tells us about the chloroplast&shy;
									- This is a reliable source because it’s from Britannica, which is a well-known source that is fact-checked by experts.
								</p>
							</div>
							<div className="my-2">{/*Source #15*/}
								<p>
									Petruzzello, Melissa. "nucleolus". <a className="italic">Encyclopedia Britannica</a>, 18 Mar. 2024, https://www.britannica.com/science/nucleolus. Accessed 13 May 2024.
								</p>
								<p className="indent-6">
									- We used this source because it tells us about the nucleolus&shy;
									- This is a reliable source because it’s from Britannica, which is a well-known source that is fact-checked by experts.
								</p>
							</div>
							<div className="my-2">{/*Source #16*/}
								<p>
									Tan, Xiaona et al. “A Review of Plant Vacuoles: Formation, Located Proteins, and Functions.” <a className="italic">Plants (Basel, Switzerland)</a> vol. 8,9 327. 5 Sep. 2019, doi:10.3390/plants8090327
								</p>
								<p className="indent-6">
									- We used this source because it tells us basic information about plants&shy;
									- This is a reliable source because it’s from the National Library of Medicine, which is a government source.
								</p>
							</div>
							<div className="my-2">{/*Source #17*/}
								<p>
									The Editors of Encyclopaedia Britannica. "cell membrane". <a className="italic">Encyclopedia Britannica</a>, 10 May. 2024, https://www.britannica.com/science/cell-membrane. Accessed 6 May 2024.
								</p>
								<p className="indent-6">
									- We used this source because it tells us about the cell membrane&shy;
									- This is a reliable source because it’s from Britannica, which is a well-known source that is fact-checked by experts.
								</p>
							</div>
							<div className="my-2">{/*Source #18*/}
								<p>
									Miller, Kenneth and Levine, Joseph. <a className="italic">Experience Biology: The Living Earth</a>. Savvas, 2020.
								</p>
								<p className="indent-6">
									- Used for lots of general information about plant cells and their parts&shy;
									- This is a reliable source because it's our biology textbook we use in class.
								</p>
							</div>
							<div className="my-2">{/*Source #19*/}
								<p>
									Rogers, Kara. "Golgi apparatus". <a className="italic">Encyclopedia Britannica</a>, 8 May. 2024, https://www.britannica.com/science/Golgi-apparatus. Accessed 20 May 2024.
								</p>
								<p className="indent-6">
									- Used for information about the Golgi apparatus&shy;
									- This is a reliable source because it’s from Britannica, which is a well-known source that is fact-checked by experts.
								</p>
							</div>
							<div className="my-2">{/*Source #20*/}
								<p>
									[MLA Citation]
								</p>
								<p className="indent-6">
									- [Why we used this source]&shy;
									- [why the source is credible]
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
