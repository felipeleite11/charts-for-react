'use client'

import React, { useState } from 'react'
import CodeEditor from '@uiw/react-textarea-code-editor'
import colors from 'tailwindcss/colors'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Label } from 'recharts'
// @ts-ignore
import prettify from 'prettify-js'

const defaultData = [
	{
		month: 'Janeiro',
		uv: 4000,
		pv: 2400,
		amt: 2400,
	},
	{
		month: 'Fevereiro',
		uv: 3000,
		pv: 1398,
		amt: 2210,
	},
	{
		month: 'Março',
		uv: 2000,
		pv: 9800,
		amt: 2290,
	},
	{
		month: 'Abril',
		uv: 2780,
		pv: 3908,
		amt: 2000,
	},
	{
		month: 'Maio',
		uv: 1890,
		pv: 4800,
		amt: 2181,
	}
]

export function RechartLine() {
	const [data, setData] = useState(prettify(defaultData))
	const [isWrongValue, setIsWrongValue] = useState(false)

	return (
		<div className="flex flex-wrap gap-4">
			<div className="w-fit h-fit flex flex-col gap-3">
				<h1 className="font-semibold text-md">Line</h1>

				<ResponsiveContainer width={500} height={400}>
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
								stroke: colors.white, 
								strokeWidth: 2 
							}}
							contentStyle={{ 
								backgroundColor: colors.gray[800], 
								border: 0
							}}
							separator=" → "
							labelClassName="text-gray-100" // Tooltip title, the same as X axix label
						/>

						<Legend 
							iconSize={18}
							// verticalAlign="top" 
							height={60}
							// layout="vertical"
							// iconType="plainline"
						/>

						<Line
							type="linear"
							dataKey="pv"
							stroke="#8884d8"
							activeDot={{ r: 8 }} 
						/>
						
						<Line
							type="monotone"
							dataKey="uv"
							stroke="#82ca9d"
							activeDot={{ r: 4 }} 
						/>
					</LineChart>
				</ResponsiveContainer>
			</div>

			<div className="flex flex-col">
				<CodeEditor
					value={data}
					language="js"
					padding={15}
					onChange={e => {
						setIsWrongValue(false)

						try {
							const parsed = JSON.parse(e.target.value)

							const prettied = prettify(parsed)

							setData(prettied)
						} catch(e) {
							setIsWrongValue(true)
						}
					}}
					className="w-[42rem]"
					style={{
						backgroundColor: colors.gray[800],
						fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
					}}
				/>

				{isWrongValue && (
					<span className="bg-yellow-500 text-gray-800 text-sm p-3 rounded-md">Corrija a estrutura de dados.</span>
				)}
			</div>
		</div>
	)
}