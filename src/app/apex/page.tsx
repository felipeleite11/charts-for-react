import { ArrowLeftCircle } from "lucide-react"

import { ApexArea } from "@/components/Apex/Area"
import { ApexBar } from "@/components/Apex/Bar"
import { ApexComposed } from "@/components/Apex/Composed"
import { ApexLine } from "@/components/Apex/Line"
import { ApexPie } from "@/components/Apex/Pie"
import { ApexRadar } from "@/components/Apex/Radar"

const charts = [
	{ title: 'Line', Component: ApexLine },
	{ title: 'Bar', Component: ApexBar },
	{ title: 'Pie', Component: ApexPie },
	{ title: 'Area', Component: ApexArea },
	{ title: 'Radar', Component: ApexRadar },
	{ title: 'Composed', Component: ApexComposed }
]

export default function Home() {
	return (
		<main className="flex flex-col p-8 lg:p-16 gap-4 bg-slate-900 text-white min-h-screen">
			<div className="flex gap-4">
				<a href="/">
					<ArrowLeftCircle />
				</a>

				<a target="_blank" href="https://apexcharts.com/docs" className="text-xl font-bold hover:text-sky-400 mb-8">Apex Charts</a>
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
