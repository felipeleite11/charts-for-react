'use client'

import Apex from 'react-apexcharts'
import colors from 'tailwindcss/colors'

const corners = ['Velocidade', 'Defesa', 'Ataque', 'Finalização', 'Passe']
const title = 'Radar'

export function ApexRadar() {
	return (
		<div className="w-[44rem]">
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
				series={[
					{
						name: 'Capabilities',
						data: Array.from({ length: 5 }).map(() => Math.round(Math.random() * 100))
					}
				]}
				type="radar"
			/>
		</div>
	)
}