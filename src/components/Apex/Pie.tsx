'use client'

import { useState } from 'react'
import Apex from 'react-apexcharts'
import colors from 'tailwindcss/colors'
// @ts-ignore
import prettify from 'prettify-js'

import { CodeEditor } from '../CodeEditor'

const title = 'Pie'

const defaultRandomData = Array.from({ length: 4 }).map(() => Math.floor(10 * Math.random() + 5))

export function ApexPie() {
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
						title: {
							text: title,
							align: 'center',
							style: {
								color: colors.gray[200]
							},
							margin: 20
						},
						labels: ['Abertas', 'Em curso', 'Executadas', 'Finalizadas'],
						dataLabels: {
							dropShadow: {
								enabled: false
							},
							style: {
								colors: [colors.gray[100]]
							}
						},
						theme: {
							mode: 'light'
						},
						stroke: {
							colors: [colors.gray[900]],
							width: 2
						},
						legend: {
							position: 'top',
							horizontalAlign: 'center',
							markers: {
								offsetX: -1
							},
							itemMargin: {
								horizontal: 8
							}
						}
					}}
					series={JSON.parse(data)}
					type="pie"
				/>
			</div>

			<div className="mt-12">
				<CodeEditor dataState={dataState} />
			</div>
		</div>
	)
}