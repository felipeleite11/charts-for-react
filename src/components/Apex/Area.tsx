'use client'

import { useState } from 'react'
import Apex from 'react-apexcharts'
import colors from 'tailwindcss/colors'
// @ts-ignore
import prettify from 'prettify-js'

import { CodeEditor } from '../CodeEditor'

const title = 'Area'

const defaultRandomData = [
	{
		name: 'Metas',
		color: colors.sky[500],
		data: [
			{
				x: 2006,
				y: 355
			},
			{
				x: 2007,
				y: 366
			},
			{
				x: 2008,
				y: 337
			},
			{
				x: 2009,
				y: 352
			},
			{
				x: 2010,
				y: 377
			},
			{
				x: 2011,
				y: 383
			},
			{
				x: 2012,
				y: 344
			},
			{
				x: 2013,
				y: 366
			},
			{
				x: 2014,
				y: 389
			},
			{
				x: 2015,
				y: 334
			}
		]
	}, {
		name: 'Vendas',
		color: colors.emerald[500],
		data: [
			{
				x: 2006,
				y: -88
			},
			{
				x: 2007,
				y: -66
			},
			{
				x: 2008,
				y: 45
			},
			{
				x: 2009,
				y: 29
			},
			{
				x: 2010,
				y: -45
			},
			{
				x: 2011,
				y: -88
			},
			{
				x: 2012,
				y: 132
			},
			{
				x: 2013,
				y: 146
			},
			{
				x: 2014,
				y: 169
			},
			{
				x: 2015,
				y: -184
			}
		]
	}
]

export function ApexArea() {
	const dataState = useState(prettify(defaultRandomData))
	const [data] = dataState

	return (
		<div className="flex flex-wrap gap-4">
			<div className="w-[40%]">
				<Apex
					options={{
						chart: {
							toolbar: {
								show: false
							}
						},
						dataLabels: {
							enabled: false
						},
						stroke: {
							curve: 'straight',
							width: 3
						},
						title: {
							text: title,
							align: 'center',
							style: {
								fontSize: '16px',
								color: colors.white,
								fontWeight: 600,
							}
						},
						xaxis: {
							type: 'numeric',
							axisBorder: {
								show: false
							},
							axisTicks: {
								show: true
							},
							labels: {
								style: {
									colors: colors.gray[400]
								},
								hideOverlappingLabels: true,
								formatter: value => String(Math.round(Number(value)))
							}
						},
						yaxis: {
							tickAmount: 4,
							labels: {
								style: {
									colors: colors.gray[400]
								}
							},
							axisBorder: {
								color: colors.gray[400],
								show: true
							},
							axisTicks: {
								show: true
							}
						},
						legend: {
							labels: {
								colors: colors.gray[300]
							}
						},
						fill: {
							opacity: 0.5
						},
						tooltip: {
							followCursor: true,
							custom: ({ series, seriesIndex, dataPointIndex }) => {
								return `
									<div class="bg-gray-700 p-2 text-sm rounded-md border border-gray-600">
										${series[seriesIndex][dataPointIndex]}
									</div>`
							}
						}
					}}
					series={JSON.parse(data)}
					type="area"
				/>
			</div>

			<div className="mt-12">
				<CodeEditor dataState={dataState} />
			</div>
		</div>
	)
}