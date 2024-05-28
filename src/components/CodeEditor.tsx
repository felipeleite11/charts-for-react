import { useState, Dispatch } from 'react'
import * as Editor from '@uiw/react-textarea-code-editor'
// @ts-ignore
import prettify from 'prettify-js'
import colors from 'tailwindcss/colors'
import { twMerge } from 'tailwind-merge'

interface CodeEditorProps { 
	dataState: [any, Dispatch<any>]
	className?: string
}

export function CodeEditor({ dataState, className }: CodeEditorProps) {
	const [data, setData] = dataState
	
	const [isWrongValue, setIsWrongValue] = useState(false)

	return (
		<div className="flex flex-col">
			<Editor.default
				value={data}
				language="js"
				padding={15}
				onChange={e => {
					setIsWrongValue(false)

					try {
						const parsed = JSON.parse(e.target.value)

						const prettied = prettify(parsed)

						setData(prettied)
					} catch (e) {
						setIsWrongValue(true)
					}
				}}
				className={twMerge('w-[42rem]', className)}
				style={{
					backgroundColor: colors.gray[800],
					fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
				}}
			/>

			{isWrongValue && (
				<span className="bg-yellow-500 text-gray-800 text-sm p-3 rounded-md">Corrija a estrutura de dados.</span>
			)}
		</div>
	)
}