'use client'

import { useState } from 'react'
import Apex from 'react-apexcharts'
import colors from 'tailwindcss/colors'
// @ts-ignore
import prettify from 'prettify-js'

import { CodeEditor } from '../CodeEditor'

const months = ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ']
const fullMonths = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
const title = 'Line'

const defaultRandomData = [
	{
		name: 'O.S. abertas',
		data: Array.from({ length: 6 }).map(() => Math.round(Math.random() * 100))
	},
	{
		name: 'O.S. finalizadas',
		data: Array.from({ length: 6 }).map(() => Math.round(Math.random() * 100))
	}
]

export function ApexLine() {
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
							foreColor: colors.gray[100],
							toolbar: {
								show: false
							}
						},
						stroke: {
							// curve: 'smooth'
							// curve: 'stepline'
							// dashArray: 2
							width: 2
						},
						markers: {
							size: 6
						},
						title: {
							text: title,
							align: 'center',
							margin: 14,
							style: {
								fontWeight: 600,
								fontSize: '16px'
							}
						},
						xaxis: {
							categories: months,
							title: {
								text: 'Mês',
								offsetY: -2,
								style: {
									fontSize: '12px',
									fontWeight: 600,
									color: colors.gray[400]
								}
							},
							labels: {
								rotate: -45
							}
						},
						yaxis: {
							stepSize: 10,
							labels: {
								formatter: value => String(Math.round(value)),
								offsetX: -2
							},
							title: {
								text: 'O.S. abertas',
								offsetX: -2,
								style: {
									fontSize: '12px',
									fontWeight: 600,
									color: colors.gray[400]
								}
							},
							axisBorder: {
								show: true,
								offsetX: -4
							}
						},
						tooltip: {
							followCursor: true,
							custom: ({ series, seriesIndex, dataPointIndex, w }) => {
								const monthIndex = months.findIndex(month => month === w.globals.labels[dataPointIndex])
								const monthName = fullMonths[monthIndex]

								return `
								<div class="bg-gray-700 p-2 text-sm rounded-md border border-gray-600">
									<span><b>${series[seriesIndex][dataPointIndex]}</b> O.S. abertas em ${monthName}</span>
								</div>`
							}
						},
						theme: {
							// mode: 'dark',
							palette: 'palette3'
						},
						legend: {
							position: 'top',
							horizontalAlign: 'right',
							markers: {
								offsetX: -1
							},
							itemMargin: {
								horizontal: 8
							}
						},
						grid: {
							borderColor: colors.gray[700],
							strokeDashArray: 2
						}
					}}
					series={JSON.parse(data)}
					type="line"
				/>
			</div>

			<div className="mt-12">
				<CodeEditor dataState={dataState} />
			</div>
		</div>
	)
}