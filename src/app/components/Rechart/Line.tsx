'use client'

import React from 'react'
import CodeEditor from '@uiw/react-textarea-code-editor'
import colors from 'tailwindcss/colors'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Label } from 'recharts'

const data = [
	{
		month: 'Janeiro',
		uv: 4000,
		pv: 2400,
		amt: 2400,
	},
	{
		month: 'Fevereiro',
		uv: 3000,
		pv: 1398,
		amt: 2210,
	},
	{
		month: 'Março',
		uv: 2000,
		pv: 9800,
		amt: 2290,
	},
	{
		month: 'Abril',
		uv: 2780,
		pv: 3908,
		amt: 2000,
	},
	{
		month: 'Maio',
		uv: 1890,
		pv: 4800,
		amt: 2181,
	},
	{
		month: 'Junho',
		uv: 2390,
		pv: 3800,
		amt: 2500
	}
]

export function RechartLine() {
	return (
		<div className="flex flex-wrap gap-4">
			<div className="w-fit h-fit">
				<ResponsiveContainer width={500} height={400}>
					<LineChart
						data={data}
						margin={{
							top: 20,
							right: 30,
							left: 16,
							bottom: 10
						}}
					>
						<CartesianGrid strokeDasharray="3 3" />

						<XAxis 
							dataKey="month"
							// angle={-45}
							tickSize={10}
							// unit="und"
						>
							{/* <Label value="Months" offset={8} position="bottom" /> */}
						</XAxis>

						<YAxis>
							<Label value="Quant." offset={8} position="left" angle={-90} />
						</YAxis>

						<Tooltip 
							cursor={{ 
								stroke: colors.white, 
								strokeWidth: 2 
							}}
							contentStyle={{ 
								backgroundColor: colors.gray[800], 
								border: 0
							}}
							separator=" → "
							labelClassName="text-gray-100" // Tooltip title, the same as X axix label
						/>

						<Legend 
							iconSize={18}
							// verticalAlign="top" 
							height={60}
							// layout="vertical"
							// iconType="plainline"
						/>

						<Line
							type="linear"
							dataKey="pv"
							stroke="#8884d8"
							activeDot={{ r: 8 }} 
						/>
						
						<Line
							type="monotone"
							dataKey="uv"
							stroke="#82ca9d"
							activeDot={{ r: 4 }} 
						/>
					</LineChart>
				</ResponsiveContainer>
			</div>

			<CodeEditor
				value={`<LineChart\n	data={data}\n	margin={{\n		top: 20,\n		right: 30,\n		left: 16,\n		bottom: 10\n	}}\n>\n	<CartesianGrid strokeDasharray="3 3" />\n\n	<XAxis \n		dataKey="month"\n		tickSize={10}\n	>\n		{/* <Label value="Months" offset={8} position="bottom" /> */}\n	</XAxis>\n\n	<YAxis>\n		<Label value="Quant." offset={8} position="left" angle={-90} />\n	</YAxis>\n\n	<Tooltip \n		cursor={{ \n			stroke: colors.white, \n			strokeWidth: 2 \n		}}\n		contentStyle={{ \n			backgroundColor: colors.gray[800], \n			border: 0\n		}}\n		separator=" → "\n		labelClassName="text-gray-100" // Tooltip title, the same as X axix label\n	/>\n\n	<Legend \n		iconSize={18}\n		height={60}\n	/>\n\n	<Line\n		type="linear"\n		dataKey="pv"\n		stroke="#8884d8"\n		activeDot={{ r: 8 }} \n	/>\n	\n	<Line\n		type="monotone"\n		dataKey="uv"\n		stroke="#82ca9d"\n		activeDot={{ r: 4 }} \n	/>\n</LineChart>`}
				language="ts"
				padding={15}
				disabled
				className="w-[42rem]"
				style={{
					backgroundColor: colors.gray[800],
					fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
				}}
			/>
		</div>
	)
}