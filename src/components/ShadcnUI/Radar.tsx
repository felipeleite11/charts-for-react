'use client'

import { useState } from "react"
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts"
import { sky } from "tailwindcss/colors"
// @ts-ignore
import prettify from 'prettify-js'

import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { CodeEditor } from "@/components/CodeEditor"

const chartConfig = {
	desktop: {
		label: "Desktop",
		color: sky[400]
	  }
} satisfies ChartConfig

const defaultRandomData = [
	{ month: "January", desktop: 186 },
	{ month: "February", desktop: 285 },
	{ month: "March", desktop: 237 },
	{ month: "April", desktop: 203 },
	{ month: "May", desktop: 209 },
	{ month: "June", desktop: 264 }
]

export function ShadcnUIRadar() {
	const dataState = useState(prettify(defaultRandomData))
	const [data] = dataState

	return (
		<div className="flex flex-wrap gap-4">
			<div className="w-[40%] h-[60vh] flex flex-col gap-3">
				<ChartContainer config={chartConfig}>
					<RadarChart data={JSON.parse(data)}>
						<ChartTooltip 
							content={
								<ChartTooltipContent className="text-gray-800" hideLabel />
							} 
							cursor={false} 
						/>

						<PolarGrid className="fill-[--color-desktop] opacity-20" />

						<PolarAngleAxis dataKey="month" />

						<Radar
							dataKey="desktop"
							fill="var(--color-desktop)"
							fillOpacity={0.5}
						/>
					</RadarChart>
				</ChartContainer>
			</div>

			<div className="mt-9">
				<CodeEditor dataState={dataState} />
			</div>
		</div>
	)
}