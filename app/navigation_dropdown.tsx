import { futura } from "./fonts.ts"
import Link from "next/link"
import { useState } from "react";

export function dropdown(){
    return (
        <div className=" ml-4 overflow-visible absolute top-16 left-2 bg-white rounded-lg shadow-lg p-4 text-nice-blue-500 text-xl leading-relaxed">
            <ul>
                <li>
                    <Link href="/" className="hover:text-nice-blue-600 hover:font-semibold">Home</Link>
                </li>
                <li>
                    <Link href="/acknowledgements" className="hover:text-nice-blue-600 hover:font-semibold">Acknowledgements</Link>
                </li>
                <li>
                    <Link href="/annotated_bibliography" className="hover:text-nice-blue-600 hover:font-semibold">Annotated Bibliography</Link>
                </li>
                <li>
                    <Link href="/cell_membrane" className="hover:text-nice-blue-600 hover:font-semibold">Cell Membrane</Link>
                </li>
                <li>
                    <Link href="/cell_wall" className="hover:text-nice-blue-600 hover:font-semibold">Cell Wall</Link>
                </li>
                <li>
                    <Link href="/chloroplasts" className="hover:text-nice-blue-600 hover:font-semibold">Chloroplasts</Link>
                </li>
                <li>
                    <Link href="/cytoplasm" className="hover:text-nice-blue-600 hover:font-semibold">Cytoplasm</Link>
                </li>
                <li>
                    <Link href="/endoplasmic_reticulum" className="hover:text-nice-blue-600 hover:font-semibold">Endoplasmic Reticulum</Link>
                </li>
                <li>
                    <Link href="/golgi_apparatus" className="hover:text-nice-blue-600 hover:font-semibold">Golgi Apparatus</Link>
                </li>
                <li>
                    <Link href="/interview_takeaways" className="hover:text-nice-blue-600 hover:font-semibold">Interview Takeaways</Link>
                </li>
                <li>
                    <Link href="/mitochondria"className="hover:text-nice-blue-600 hover:font-semibold">Mitochondria</Link>
                </li>
                <li>
                    <Link href="/nucleus" className="hover:text-nice-blue-600 hover:font-semibold">Nucleus</Link>
                </li>
                <li>
                    <Link href="/vacuoles" className="hover:text-nice-blue-600 hover:font-semibold">Vacuoles</Link>
                </li>
            </ul>
        </div>
    );
}