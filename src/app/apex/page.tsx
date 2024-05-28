import { ApexBar } from "@/components/Apex/Bar"
import { ApexLine } from "@/components/Apex/Line"
import { ApexPie } from "@/components/Apex/Pie"

export default function Home() {
	return (
		<main className="flex flex-col p-8 lg:p-16 gap-4">
			<a target="_blank" href="https://apexcharts.com/docs" className="text-xl font-bold hover:text-sky-400 mb-8">Apex Charts</a>

			<ApexLine />

			<ApexBar />

			<ApexPie />
		</main>
	)
}
