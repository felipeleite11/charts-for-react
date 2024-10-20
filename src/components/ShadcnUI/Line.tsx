'use client'

import { useState } from "react"
import { CartesianGrid, XAxis, Line, LineChart } from "recharts"
import { yellow, sky } from "tailwindcss/colors"
// @ts-ignore
import prettify from 'prettify-js'

import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { CodeEditor } from "@/components/CodeEditor"

const chartConfig = {
	desktop: {
		label: 'Desktop'
	},
	mobile: {
		label: 'Mobile'
	}
} satisfies ChartConfig

const defaultRandomData = [
	{ month: "Janeiro", desktop: 186, mobile: 140 },
	{ month: "Feveiro", desktop: 305, mobile: 159 },
	{ month: "Março", desktop: 237, mobile: 88 },
	{ month: "Abril", desktop: 73, mobile: 98 },
	{ month: "Maio", desktop: 209, mobile: 190 },
	{ month: "Junho", desktop: 214, mobile: 150 }
]

export function ShadcnUILine() {
	const dataState = useState(prettify(defaultRandomData))
	const [data] = dataState

	return (
		<div className="flex flex-wrap gap-4">
			<div className="w-[40%] h-[60vh] flex flex-col gap-3">
				<ChartContainer config={chartConfig}>
					<LineChart
						accessibilityLayer
						data={JSON.parse(data)}
						margin={{
							left: 12,
							right: 12
						}}
					>
						<CartesianGrid vertical={false} />

						<Line
							dataKey="desktop"
							type="monotone"
							stroke={yellow[300]}
							strokeWidth={2}
						/>

						<Line
							dataKey="mobile"
							type="monotone"
							stroke={sky[400]}
							strokeWidth={2}
						/>

						<ChartTooltip 
							content={
								<ChartTooltipContent className="text-gray-800" />
							} 
							cursor={false} 
						/>

						<XAxis
							dataKey="month"
							tickLine={false}
							axisLine={false}
							tickMargin={8}
							tickFormatter={(value) => value.substring(0, 3)}
						/>
					</LineChart>
				</ChartContainer>
			</div>

			<div className="mt-9">
				<CodeEditor dataState={dataState} />
			</div>
		</div>
	)
}