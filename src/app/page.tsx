'use client'

import { RechartLine } from "./components/Rechart/Line"

export default function Home() {
	return (
		<main className="flex flex-col p-8 lg:p-16">
			<a target="_blank" href="https://recharts.org/" className="text-xl font-bold hover:text-sky-400 mb-8">Recharts</a>

			<RechartLine />
			
		</main>
	)
}
