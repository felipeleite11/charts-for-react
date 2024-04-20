'use client'

import React, { useState } from 'react'
import CodeEditor from '@uiw/react-textarea-code-editor'
import colors from 'tailwindcss/colors'
import { XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts'
// @ts-ignore
import prettify from 'prettify-js'

const defaultData = [
	{
		"name": "Janeiro",
		"uv": 4000,
		"pv": 2400
	},
	{
		"name": "Fevereiro",
		"uv": 3000,
		"pv": 1398
	},
	{
		"name": "Março",
		"uv": 2000,
		"pv": 9800
	},
	{
		"name": "Abril",
		"uv": 2780,
		"pv": 3908
	},
	{
		"name": "Maio",
		"uv": 1890,
		"pv": 4800
	},
	{
		"name": "Junho",
		"uv": 2390,
		"pv": 3800
	}
]

export function RechartBar() {
	const [data, setData] = useState(prettify(defaultData))
	const [isWrongValue, setIsWrongValue] = useState(false)

	return (
		<div className="flex flex-wrap gap-4">
			<div className="w-fit h-fit flex flex-col gap-3">
				<h1 className="font-semibold text-md">Bars</h1>

				<ResponsiveContainer width={500} height={400}>
					<BarChart width={730} height={250} data={JSON.parse(data)}>
						<CartesianGrid strokeDasharray="3 3" />
						<XAxis dataKey="name" />
						<YAxis />
						<Tooltip cursor={{ fill: '#fff2' }} />
						<Legend />
						<Bar dataKey="pv" fill="#8884d8" />
						<Bar dataKey="uv" fill="#82ca9d" />
					</BarChart>
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
						} catch (e) {
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