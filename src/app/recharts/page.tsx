import { RechartLine } from "../../components/Rechart/Line"
import { RechartBar } from "../../components/Rechart/Bar"
import { RechartArea } from "../../components/Rechart/Area"
import { RechartStackedBar } from "../../components/Rechart/StackedBar"
import { RechartComposed } from "../../components/Rechart/Composed"
import { RechartPie } from "../../components/Rechart/Pie"
import { RechartRadar } from "../../components/Rechart/Radar"

export default function Home() {
	return (
		<main className="flex flex-col p-8 lg:p-16 gap-4">
			<a target="_blank" href="https://recharts.org/" className="text-xl font-bold hover:text-sky-400 mb-8">Recharts</a>

			<RechartLine />
			
			<RechartBar />

			<RechartStackedBar />

			<RechartPie />
			
			<RechartArea /> 
			
			<RechartRadar /> 

			<RechartComposed />
		</main>
	)
}
