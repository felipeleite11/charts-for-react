import Link from "next/link"

export default function Home() {
	return (
		<main className="flex flex-col p-8 lg:p-16 gap-8">
			<Link href="/recharts" className="text-xl font-bold hover:text-sky-500 flex flex-col">
				<h1>Recharts</h1>
				<span className="text-sm font-normal">recharts.org</span>
			</Link>
			
			<Link href="/apex" className="text-xl font-bold hover:text-sky-500">
				<h1>Apex Charts</h1>
				<span className="text-sm font-normal">apexcharts.com</span>
			</Link>
		</main>
	)
}
