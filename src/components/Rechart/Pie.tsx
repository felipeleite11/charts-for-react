'use client'

import React, { useState } from 'react'
import { AreaChart, PieChart, Pie, Tooltip, Legend, Cell, ResponsiveContainer, Label } from 'recharts'
// @ts-ignore
import prettify from 'prettify-js'
import colors from 'tailwindcss/colors'

import { CodeEditor } from '../CodeEditor'

const defaultRandomData = [
	{ name: 'Group A', value: 400 },
	{ name: 'Group B', value: 300 },
	{ name: 'Group C', value: 600 },
	{ name: 'Group D', value: 200 }
]

const COLORS = [colors.sky[600], colors.emerald[600], colors.yellow[600], colors.red[700]]
const RADIAN = Math.PI / 180

export function RechartPie() {
	const dataState = useState(prettify(defaultRandomData))
	const [data] = dataState

	return (
		<div className="flex flex-wrap gap-4">
			<div className="w-[40%] h-[60vh] flex flex-col gap-3">
				<ResponsiveContainer>
					<PieChart>
						<Pie
							data={JSON.parse(data)}
							cx="50%"
							cy="50%"
							// label // Delete labelLine prop and set label as true to draw the values inside each pie
							label={CustomLabel}
							labelLine={false}
							outerRadius="100%"
							// innerRadius={50} // Create a hole in the center. It becomes a Donut Chart.
							stroke={colors.gray[700]}
							strokeWidth={2}
							nameKey="name"
							dataKey="value"
						>
							{JSON.parse(data).map((_: any, index: number) => (
								<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} className="outline-none" />
							))}
						</Pie>

						<Tooltip content={<CustomTooltip />} />

						<Legend 
							iconSize={14}
							iconType='circle'
							height={60}
							verticalAlign="top"
							wrapperStyle={{ fontSize: 13 }}
						/>
					</PieChart>
				</ResponsiveContainer>
			</div>

			<div className="mt-14">
				<CodeEditor dataState={dataState} />
			</div>
		</div>
	)
}

function CustomTooltip({ active, payload }: any) {
	if(active && payload.length) {
		const { name, value } = payload[0]

		return (
			<div className="bg-gray-800 text-gray-200 text-xs py-2 px-3 rounded-md border border-gray-600 shadow-md">
				{name} → {value}
			</div>
		)
	}

	return null
}

function CustomLabel({ cx, cy, midAngle, innerRadius, outerRadius, percent }: any) {
	const radius = innerRadius + (outerRadius - innerRadius) * 0.5
	const x = cx + radius * Math.cos(-midAngle * RADIAN)
	const y = cy + radius * Math.sin(-midAngle * RADIAN)

	return (
		<text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central" className="text-xs">
			{`${(percent * 100).toFixed(0)}%`}
		</text>
	)
}