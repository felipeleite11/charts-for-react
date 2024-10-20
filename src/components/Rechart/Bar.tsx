'use client'

import React, { useState } from 'react'
import { XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar, ReferenceLine } from 'recharts'
import colors from 'tailwindcss/colors'
// @ts-ignore
import prettify from 'prettify-js'
import { CodeEditor } from '../CodeEditor'

const defaultRandomData = [
	{
		name: "Janeiro",
		uv: 4000,
		pv: 2400
	},
	{
		name: "Fevereiro",
		uv: 3000,
		pv: 1398
	},
	{
		name: "Março",
		uv: 2000,
		pv: 9800
	},
	{
		name: "Abril",
		uv: 2780,
		pv: -3908
	},
	{
		name: "Maio",
		uv: -1890,
		pv: 4800
	},
	{
		name: "Junho",
		uv: -2390,
		pv: 3800
	}
]

export function RechartBar() {
	const dataState = useState(prettify(defaultRandomData))
	const [data] = dataState

	return (
		<div className="flex flex-wrap gap-4">
			<div className="w-[40%] h-[60vh] flex flex-col gap-3">
				<ResponsiveContainer>
					<BarChart width={730} height={250} data={JSON.parse(data)}>
						<CartesianGrid strokeDasharray="3 3" />
						
						<XAxis dataKey="name" />
						
						<YAxis />
						
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

						<Legend />

						<ReferenceLine y={0} stroke={colors.gray[300]} strokeWidth={2} />
						
						<Bar dataKey="pv" fill={colors.violet[500]} />
						
						<Bar dataKey="uv" fill={colors.emerald[300]} />
					</BarChart>
				</ResponsiveContainer>
			</div>
			
			<div className="mt-10">
				<CodeEditor dataState={dataState} />
			</div>
		</div>
	)
}