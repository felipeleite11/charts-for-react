'use client'

import React, { useState } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Label, ReferenceLine } from 'recharts'
// @ts-ignore
import prettify from 'prettify-js'
import colors from 'tailwindcss/colors'

import { CodeEditor } from '../CodeEditor'

const defaultRandomData = [
	{
		month: 'Janeiro',
		uv: 4000,
		pv: 2400
	},
	{
		month: 'Fevereiro',
		uv: 3000,
		pv: 1398
	},
	{
		month: 'Março',
		uv: 2000,
		pv: 9800
	},
	{
		month: 'Abril',
		uv: -2780,
		pv: -3908
	},
	{
		month: 'Maio',
		uv: -1890,
		pv: 4800
	}
]

export function RechartLine() {
	const dataState = useState(prettify(defaultRandomData))
	const [data] = dataState

	return (
		<div className="flex flex-wrap gap-4">
			<div className="w-[40%] h-[60vh] flex flex-col gap-3">
				<h1 className="font-semibold text-md">Line</h1>

				<ResponsiveContainer>
					<LineChart
						data={JSON.parse(data)}
						margin={{
							top: 20,
							right: 30,
							left: 16,
							bottom: 10
						}}
					>
						<CartesianGrid strokeDasharray="3 3" />

						<XAxis 
							dataKey="month"
							// angle={-45}
							tickSize={10}
							// unit="und"
						>
							{/* <Label value="Months" offset={8} position="bottom" /> */}
						</XAxis>

						<YAxis>
							<Label value="Quant." offset={8} position="left" angle={-90} />
						</YAxis>

						<Tooltip 
							cursor={{ 
								stroke: colors.gray[300],
								strokeWidth: 2,
								fill: '#fff2'
							}}
							contentStyle={{ 
								backgroundColor: colors.gray[800],
								borderColor: colors.gray[600]
							}}
							separator=" → "
							wrapperClassName="rounded-md shadow-md text-sm font-normal"
						/>

						<Legend 
							iconSize={18}
							// verticalAlign="top"
							// iconType="plainline"
						/>

						<ReferenceLine y={0} stroke={colors.gray[300]} strokeWidth={2} />

						<Line
							type="linear" // junção de retas
							dataKey="pv"
							strokeWidth={2}
							stroke={colors.violet[400]}
							activeDot={{ r: 8 }} 
						/>
						
						<Line
							type="monotone" // curvas suaves
							dataKey="uv"
							strokeWidth={2}
							stroke={colors.emerald[300]}
							activeDot={{ r: 4 }} 
						/>
					</LineChart>
				</ResponsiveContainer>
			</div>

			<div className="mt-14">
				<CodeEditor dataState={dataState} />
			</div>
		</div>
	)
}