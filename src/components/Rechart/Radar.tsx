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
		Juan: 120,
		Mike: 110,
	},
	{
		subject: 'Chinese',
		Juan: 98,
		Mike: 130,
	},
	{
		subject: 'English',
		Juan: 86,
		Mike: 130,
	},
	{
		subject: 'Geography',
		Juan: 99,
		Mike: 100,
	},
	{
		subject: 'Physics',
		Juan: 85,
		Mike: 90,
	},
	{
		subject: 'History',
		Juan: 65,
		Mike: 85,
	}
]

export function RechartRadar() {
	const dataState = useState(prettify(defaultRandomData))
	const [data] = dataState

	return (
		<div className="flex flex-wrap gap-4">
			<div className="w-[40%] h-[60vh] flex flex-col gap-3">
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

						<Radar name="Mike" dataKey="Mike" stroke={colors.emerald[500]} strokeWidth={2} fill={colors.emerald[400]} fillOpacity={0.6} opacity={0.6} />
						<Radar name="Juan" dataKey="Juan" stroke={colors.sky[400]} fill={colors.sky[500]} fillOpacity={0.6} strokeWidth={2} opacity={0.6} />
					</RadarChart>
				</ResponsiveContainer>
			</div>

			<div className="mt-14">
				<CodeEditor dataState={dataState} />
			</div>
		</div>
	)
}