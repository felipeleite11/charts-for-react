import { ApexArea } from "@/components/Apex/Area"
import { ApexBar } from "@/components/Apex/Bar"
import { ApexComposed } from "@/components/Apex/Composed"
import { ApexLine } from "@/components/Apex/Line"
import { ApexPie } from "@/components/Apex/Pie"
import { ApexRadar } from "@/components/Apex/Radar"

export default function Home() {
	return (
		<main className="flex flex-col p-8 lg:p-16 gap-4">
			<a target="_blank" href="https://apexcharts.com/docs" className="text-xl font-bold hover:text-sky-400 mb-8">Apex Charts</a>

			<ApexComposed />

			<ApexLine />

			<ApexBar />

			<ApexPie />
			
			<ApexArea />

			<ApexRadar />
		</main>
	)
}
