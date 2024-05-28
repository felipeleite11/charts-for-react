'use client'

import React, { useState } from 'react'
import { RadarChart, ResponsiveContainer, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend } from 'recharts'
// @ts-ignore
import prettify from 'prettify-js'
import colors from 'tailwindcss/colors'

import { CodeEditor } from '../CodeEditor'

const defaultRandomData = [
	{
		subject: 'Math',
		A: 120,
		B: 110,
		fullMark: 150,
	},
	{
		subject: 'Chinese',
		A: 98,
		B: 130,
		fullMark: 150,
	},
	{
		subject: 'English',
		A: 86,
		B: 130,
		fullMark: 150,
	},
	{
		subject: 'Geography',
		A: 99,
		B: 100,
		fullMark: 150,
	},
	{
		subject: 'Physics',
		A: 85,
		B: 90,
		fullMark: 150,
	},
	{
		subject: 'History',
		A: 65,
		B: 85,
		fullMark: 150,
	}
]

export function RechartRadar() {
	const dataState = useState(prettify(defaultRandomData))
	const [data] = dataState

	return (
		<div className="flex flex-wrap gap-4">
			<div className="w-[40%] h-[60vh] flex flex-col gap-3">
				<h1 className="font-semibold text-md">Radar</h1>

				<ResponsiveContainer>
					<RadarChart
						data={JSON.parse(data)}
					>
						<PolarGrid />
						<PolarAngleAxis dataKey="subject" fontSize={13} />
						<PolarRadiusAxis fontSize={12} />
						<Legend 
							iconSize={18}
							wrapperStyle={{ fontSize: 13 }}
						/>

						<Radar name="Juan" dataKey="B" stroke={colors.emerald[500]} strokeWidth={2} fill={colors.emerald[400]} fillOpacity={0.6} opacity={0.6} />
						<Radar name="Mike" dataKey="A" stroke={colors.sky[400]} fill={colors.sky[500]} fillOpacity={0.6} strokeWidth={2} opacity={0.6} />
					</RadarChart>
				</ResponsiveContainer>
			</div>

			<div className="mt-14">
				<CodeEditor dataState={dataState} />
			</div>
		</div>
	)
}