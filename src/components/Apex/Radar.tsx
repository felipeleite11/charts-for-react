'use client'

import { useState } from 'react'
import Apex from 'react-apexcharts'
import colors from 'tailwindcss/colors'
// @ts-ignore
import prettify from 'prettify-js'
import { CodeEditor } from '../CodeEditor'

const corners = ['Velocidade', 'Defesa', 'Ataque', 'Finalização', 'Passe']
const title = 'Radar'

const defaultRandomData = [
	{
		name: 'Capabilities',
		data: Array.from({ length: 5 }).map(() => Math.round(Math.random() * 20))
	}
]

export function ApexRadar() {
	const dataState = useState(prettify(defaultRandomData))
	const [data] = dataState

	return (
		<div className="flex flex-wrap gap-4">
			<div className="w-[40%]">
				<Apex
					options={{
						chart: {
							background: 'transparent',
							width: '100%',
							foreColor: colors.gray[300],
							toolbar: {
								show: false
							}
						},
						stroke: {
							width: 2
						},
						markers: {
							size: 6,
							colors: [colors.sky[500]],
							hover: {
								size: 8
							}
						},
						title: {
							text: title,
							align: 'center',
							style: {
								fontWeight: 600,
								fontSize: '16px'
							}
						},
						xaxis: {
							categories: corners
						},
						tooltip: {
							followCursor: true,
							custom: ({ series, seriesIndex, dataPointIndex }) => {
								return `
									<div class="bg-gray-700 p-2 text-xs rounded-md border border-gray-600 shadow-md">
										${series[seriesIndex][dataPointIndex]}
									</div>`
							}
						},
						theme: {
							palette: 'palette3'
						}
					}}
					series={JSON.parse(data)}
					type="radar"
				/>
			</div>

			<div className="mt-12">
				<CodeEditor dataState={dataState} />
			</div>
		</div>
	)
}