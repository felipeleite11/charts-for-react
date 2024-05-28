'use client'

import { useState } from 'react'
import Apex from 'react-apexcharts'
import colors from 'tailwindcss/colors'
// @ts-ignore
import prettify from 'prettify-js'

import { CodeEditor } from '../CodeEditor'

const months = ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ']
const fullMonths = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
const title = 'Composed (combo)'

const defaultRandomData = [{
	name: 'pessoas alocadas',
	type: 'column',
	data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
}, {
	name: 'OSs executadas',
	type: 'line',
	data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
}]

export function ApexComposed() {
	const dataState = useState(prettify(defaultRandomData))
	const [data] = dataState

	return (
		<div className="flex flex-wrap gap-4">
			<div className="w-[40rem]">
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
							width: 2
						},
						dataLabels: {
							enabled: true,
          					enabledOnSeries: [1]
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
						yaxis: [
							{
								labels: {
									formatter: value => String(Math.round(value)),
									offsetX: -2
								},
								title: {
									text: 'OSs executadas',
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
							{
								opposite: true,
								labels: {
									formatter: value => String(Math.round(value)),
									offsetX: -2
								},
								title: {
									text: 'Pessoas alocadas',
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
							}
						],
						tooltip: {
							followCursor: true,
							custom: ({ series, seriesIndex, dataPointIndex, w }) => {
								const monthName = fullMonths[dataPointIndex]
								const serieName = w.globals.seriesNames[seriesIndex]

								return `
									<div class="bg-gray-700 p-2 text-sm rounded-md border border-gray-600">
										<b>${series[seriesIndex][dataPointIndex]}</b> ${serieName} em ${monthName}
									</div>`
							}
						},
						theme: {
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