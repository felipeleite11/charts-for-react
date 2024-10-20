import Link from "next/link"

export default function Home() {
	return (
		<main className="flex flex-col p-8 lg:p-16 gap-8 bg-slate-900 text-white min-h-screen">
			<Link href="/recharts" className="text-xl font-bold hover:text-sky-300 flex flex-col">
				<h1>Recharts</h1>
				<span className="text-sm font-normal">recharts.org</span>
			</Link>
			
			<Link href="/apex" className="text-xl font-bold hover:text-sky-500">
				<h1>Apex Charts</h1>
				<span className="text-sm font-normal">apexcharts.com</span>
			</Link>

			<Link href="/shadcnui" className="text-xl font-bold hover:text-sky-500">
				<h1>ShadcnUI Charts</h1>
				<span className="text-sm font-normal">ui.shadcn.com/charts</span>
			</Link>
		</main>
	)
}
