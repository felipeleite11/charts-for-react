'use client'

import React, { useState } from 'react'
import { ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Label, ReferenceLine } from 'recharts'
// @ts-ignore
import prettify from 'prettify-js'
import colors from 'tailwindcss/colors'
import classNames from 'classnames'

import { CodeEditor } from '../CodeEditor'

const defaultRandomData = [
	{
		month: 'Janeiro',
		uv: 4000,
		xv: 2000,
		pv: 2400
	},
	{
		month: 'Fevereiro',
		uv: 3000,
		xv: 2800,
		pv: 1398
	},
	{
		month: 'Março',
		uv: -2000,
		xv: 1000,
		pv: 9800
	},
	{
		month: 'Abril',
		uv: -2780,
		xv: 2900,
		pv: -3908
	},
	{
		month: 'Maio',
		uv: 1890,
		xv: 5400,
		pv: 4800
	}
]

export function RechartComposed() {
	const dataState = useState(prettify(defaultRandomData))
	const [data] = dataState

	return (
		<div className="flex flex-wrap gap-4">
			<div className="w-[40%] h-[60vh] flex flex-col gap-3">
				<h2 className="text-xs text-gray-400">Mix of line, bar and area chart, with customized tooltip.</h2>

				<ResponsiveContainer>
					<ComposedChart
						data={JSON.parse(data)}
						margin={{
							top: 20,
							right: 30,
							left: 16,
							bottom: 10
						}}
					>
						<CartesianGrid strokeDasharray="3 3" />

						<XAxis dataKey="month" />

						<YAxis>
							<Label 
								value="Quant." 
								offset={8} 
								position="left"
								angle={-90}
							/>
						</YAxis>

						<Tooltip content={CustomTooltip} />

						<Legend
							iconSize={18}
							height={60}
						/>

						<ReferenceLine 
							y={0} 
							stroke={colors.gray[300]} 
							strokeWidth={2} 
						/>

						<Area 
							type="monotone" 
							dataKey="xv" 
							stroke={colors.emerald[300]} 
							fill={colors.emerald[300]} 
						/>

						<Bar 
							dataKey="pv" 
							fill={colors.sky[700]}
							opacity={0.7}
						/>

						<Line
							type="monotone"
							dataKey="uv"
							strokeWidth={2}
							stroke={colors.yellow[500]}
							activeDot={{ r: 8 }}
						/>
					</ComposedChart>
				</ResponsiveContainer>
			</div>

			<div className="mt-14">
				<CodeEditor dataState={dataState} />
			</div>
		</div>
	)
}

function CustomTooltip({ active, payload, label }: any) {
	// Bar is the first domain, so payload[0].value is the value represented by Bar (pv)
	// To show the values represented by Line in the tooltip, it must use payload[2].value. For the Area values, use payload[1].value.

	if (active && payload && payload.length) {
		const [domain1, domain2, domain3] = payload

		return (
			<div className="custom-tooltip bg-gray-800 border-gray-600 border rounded-lg p-2 text-gray-100 shadow-md text-sm">
				<p className="font-semibold text-md mb-2">{label}</p>
				<p className={classNames('text-sm', { 'text-red-400': domain1.value < 0 })}>{`${domain1.name} : ${domain1.value}`}</p>
				<p className={classNames('text-sm', { 'text-red-400': domain2.value < 0 })}>{`${domain2.name} : ${domain2.value}`}</p>
				<p className={classNames('text-sm', { 'text-red-400': domain3.value < 0 })}>{`${domain3.name} : ${domain3.value}`}</p>
				<p className="text-xs mt-3">Valores meramente estimativos.</p>
			</div>
		)
	}

	return null
}
