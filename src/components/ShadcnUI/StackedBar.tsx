'use client'

import { useState } from "react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import { orange, sky } from "tailwindcss/colors"
// @ts-ignore
import prettify from 'prettify-js'

import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { CodeEditor } from "@/components/CodeEditor"

const chartConfig = {
	running: {
		label: "Running",
		color: sky[500]
	},
	swimming: {
		label: "Swimming",
		color: orange[400]
	}
} satisfies ChartConfig

const defaultRandomData = [
	{ date: "2024-07-15", running: 450, swimming: 300 },
	{ date: "2024-07-16", running: 380, swimming: 420 },
	{ date: "2024-07-17", running: 520, swimming: 120 },
	{ date: "2024-07-18", running: 140, swimming: 550 },
	{ date: "2024-07-19", running: 600, swimming: 350 },
	{ date: "2024-07-20", running: 480, swimming: 400 }
]

export function ShadcnUIStackedBar() {
	const dataState = useState(prettify(defaultRandomData))
	const [data] = dataState

	return (
		<div className="flex flex-wrap gap-4">
			<div className="w-[40%] h-[60vh] flex flex-col gap-3">
				<ChartContainer config={chartConfig}>
					<BarChart data={JSON.parse(data)}>
						<CartesianGrid vertical={false} />

						<Bar dataKey="running" radius={[0, 0, 4, 4]} stackId="a" fill="var(--color-running)" />

						<Bar dataKey="swimming" radius={[4, 4, 0, 0]} stackId="a" fill="var(--color-swimming)" />

						<ChartTooltip
							content={
								<ChartTooltipContent
									className="text-gray-800 w-[180px]"
									hideLabel
									formatter={(value, name, item, index) => (
										<>
											<div
												className="h-2.5 w-2.5 shrink-0 rounded-[2px] bg-[--color-bg]"
												style={
													{
														"--color-bg": `var(--color-${name})`
													} as React.CSSProperties
												}
											/>

											{chartConfig[name as keyof typeof chartConfig]?.label || name}

											<div className="ml-auto flex items-baseline gap-0.5 font-mono font-medium tabular-nums text-foreground">
												{value}
												<span className="font-normal text-muted-foreground">
													kcal
												</span>
											</div>
											
											{index === 1 && (
												<div className="mt-1.5 flex basis-full items-center border-t pt-1.5 text-xs font-medium text-foreground">
													Total
													<div className="ml-auto flex items-baseline gap-0.5 font-mono font-medium tabular-nums text-foreground">
														{item.payload.running + item.payload.swimming}
														
														<span className="font-normal text-muted-foreground">
															kcal
														</span>
													</div>
												</div>
											)}
										</>
									)}
									defaultIndex={1}
									cursor={false}
								/>
							}
							cursor={false}
						/>

						<XAxis
							dataKey="date"
							tickLine={false}
							tickMargin={10}
							axisLine={false}
							tickFormatter={(value) => {
								return new Date(value).toLocaleDateString("pt-BR", {
									weekday: "short"
								})
							}}
						/>
					</BarChart>
				</ChartContainer>
			</div>

			<div className="mt-9">
				<CodeEditor dataState={dataState} />
			</div>
		</div>
	)
}