'use client'

import { useState } from "react"
import { Pie, PieChart } from "recharts"
import { orange, sky } from "tailwindcss/colors"
// @ts-ignore
import prettify from 'prettify-js'

import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { CodeEditor } from "@/components/CodeEditor"

const chartConfig = {
	visitors: {
		label: "Visitors"
	},
	chrome: {
		label: "Chrome"
	},
	safari: {
		label: "Safari"
	}
} satisfies ChartConfig

const defaultRandomData = [
	{ browser: "chrome", visitors: 275, fill: orange[400] },
	{ browser: "safari", visitors: 200, fill: sky[500] }
]

export function ShadcnUIPie() {
	const dataState = useState(prettify(defaultRandomData))
	const [data] = dataState

	return (
		<div className="flex flex-wrap gap-4">
			<div className="w-[40%] h-[60vh] flex flex-col gap-3">
				<ChartContainer config={chartConfig}>
					<PieChart>
						<ChartTooltip 
							content={
								<ChartTooltipContent className="text-gray-800" indicator="line" />
							} 
							cursor={false} 
						/>

						<Pie
							data={JSON.parse(data)}
							dataKey="visitors"
							nameKey="browser"
						/>
					</PieChart>
				</ChartContainer>
			</div>

			<div className="mt-9">
				<CodeEditor dataState={dataState} />
			</div>
		</div>
	)
}