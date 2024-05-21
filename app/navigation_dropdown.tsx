import { futura } from "./fonts.ts"
import Link from "next/link"
import { useState } from "react";

export function dropdown(){
    return (
        <div className=" ml-4 overflow-visible absolute top-16 left-2 bg-white rounded-lg shadow-lg p-4 text-nice-blue-500 text-xl leading-relaxed">
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/page_template">Page Template</Link>
                </li>
                <li>
                    <Link href="/acknowledgements">Acknowledgements</Link>
                </li>
                <li>
                    <Link href="/annotated_bibliography">Annotated Bibliography</Link>
                </li>
                <li>
                    <Link href="/cell_membrane">Cell Membrane</Link>
                </li>
                <li>
                    <Link href="/cell_wall">Cell Wall</Link>
                </li>
                <li>
                    <Link href="/chloroplasts">Chloroplasts</Link>
                </li>
                <li>
                    <Link href="/cytoplasm">Cytoplasm</Link>
                </li>
                <li>
                    <Link href="/endoplasmic_reticulum">Endoplasmic Reticulum</Link>
                </li>
                <li>
                    <Link href="/golgi_apparatus">Golgi Apparatus</Link>
                </li>
                <li>
                    <Link href="/mitochondria">Mitochondria</Link>
                </li>
                <li>
                    <Link href="/nucleus">Nucleus</Link>
                </li>
                <li>
                    <Link href="/vacuoles">Vacuoles</Link>
                </li>
            </ul>
        </div>
    );
}