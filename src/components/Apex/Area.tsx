'use client'

import Apex from 'react-apexcharts'
import colors from 'tailwindcss/colors'

const title = 'Area'

export function ApexArea() {
	return (
		<div className="w-[40rem]">
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
				series={[
					{
						name: 'Metas',
						color: colors.sky[500],
						data: [{
							x: 1996,
							y: 322
						},
						{
							x: 1997,
							y: 324
						},
						{
							x: 1998,
							y: 329
						},
						{
							x: 1999,
							y: 342
						},
						{
							x: 2000,
							y: 348
						},
						{
							x: 2001,
							y: 334
						},
						{
							x: 2002,
							y: 325
						},
						{
							x: 2003,
							y: 316
						},
						{
							x: 2004,
							y: 318
						},
						{
							x: 2005,
							y: 330
						},
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
								x: 1996,
								y: 162
							},
							{
								x: 1997,
								y: 90
							},
							{
								x: 1998,
								y: 50
							},
							{
								x: 1999,
								y: 77
							},
							{
								x: 2000,
								y: 35
							},
							{
								x: 2001,
								y: -45
							},
							{
								x: 2002,
								y: -88
							},
							{
								x: 2003,
								y: -120
							},
							{
								x: 2004,
								y: -156
							},
							{
								x: 2005,
								y: -123
							},
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
								y: -45
							},
							{
								x: 2009,
								y: -29
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
								y: -132
							},
							{
								x: 2013,
								y: -146
							},
							{
								x: 2014,
								y: -169
							},
							{
								x: 2015,
								y: -184
							}
						]
					}
				]}
				type="area"
			/>
		</div>
	)
}