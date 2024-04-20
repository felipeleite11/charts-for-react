import { RechartLine } from "./components/Rechart/Line"
import { RechartBar } from "./components/Rechart/Bar"

export default function Home() {
	return (
		<main className="flex flex-col p-8 lg:p-16 gap-4">
			<a target="_blank" href="https://recharts.org/" className="text-xl font-bold hover:text-sky-400 mb-8">Recharts</a>

			<RechartLine />
			
			<RechartBar />
			
		</main>
	)
}
