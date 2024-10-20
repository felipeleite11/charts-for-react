import { ArrowLeftCircle } from "lucide-react"

import { RechartLine } from "../../components/Rechart/Line"
import { RechartBar } from "../../components/Rechart/Bar"
import { RechartArea } from "../../components/Rechart/Area"
import { RechartStackedBar } from "../../components/Rechart/StackedBar"
import { RechartComposed } from "../../components/Rechart/Composed"
import { RechartPie } from "../../components/Rechart/Pie"
import { RechartRadar } from "../../components/Rechart/Radar"

const charts = [
	{ title: 'Line', Component: RechartLine },
	{ title: 'Bar', Component: RechartBar },
	{ title: 'Stacked bar', Component: RechartStackedBar },
	{ title: 'Pie', Component: RechartPie },
	{ title: 'Area', Component: RechartArea },
	{ title: 'Radar', Component: RechartRadar },
	{ title: 'Composed', Component: RechartComposed }
]

export default function Home() {
	return (
		<main className="flex flex-col p-8 lg:p-16 gap-4 bg-slate-900 text-white min-h-screen">
			<div className="flex gap-4">
				<a href="/">
					<ArrowLeftCircle />
				</a>

				<a target="_blank" href="https://recharts.org/" className="text-xl font-bold hover:text-sky-400 mb-8">Recharts</a>
			</div>

			<ul>
				{charts.map(({ title, Component }, idx) => (
					<li key={idx}>
						<details>
							<summary>{title}</summary>
						
							<Component />
						</details>
					</li>
				))}
			</ul>
		</main>
	)
}
