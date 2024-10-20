import { ArrowLeftCircle } from "lucide-react"

import { ShadcnUIBar } from "@/components/ShadcnUI/Bar"
import { ShadcnUILine } from "@/components/ShadcnUI/Line"
import { ShadcnUIPie } from "@/components/ShadcnUI/Pie"
import { ShadcnUIRadar } from "@/components/ShadcnUI/Radar"
import { ShadcnUIStackedBar } from "@/components/ShadcnUI/StackedBar"

const charts = [
	{ title: 'Bar', Component: ShadcnUIBar },
	{ title: 'Line', Component: ShadcnUILine },
	{ title: 'Pie', Component: ShadcnUIPie },
	{ title: 'Radar', Component: ShadcnUIRadar },
	{ title: 'Stacked bar', Component: ShadcnUIStackedBar }
]

export default function ShadcnUI() {
	return (
		<main className="flex flex-col p-8 lg:p-16 gap-4 bg-slate-900 text-white min-h-screen">
			<div className="flex gap-4">
				<a href="/">
					<ArrowLeftCircle />
				</a>

				<a target="_blank" href="https://ui.shadcn.com/charts" className="text-xl font-bold hover:text-sky-400 mb-8">ShadcnUI</a>
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

