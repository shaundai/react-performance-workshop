import { useState } from 'react'
import './Virtualization.css'

export const NonVirtualizedApp = () => {
	const [count, setCount] = useState(100000)

	const items = Array.from({ length: count }, (_, i) => ({
		index: i + 1,
		name: `Movie ${i + 1}`,
	}))

	const displayItemList = () => {
		const itemList = items.map(i => (
			<div key={i.name} className='movie'>
				{i.name}
			</div>
		))
		return itemList
	}

	return (
		<div>
			<input
				value={count}
				onChange={e => {
					setCount(parseInt(e.currentTarget.value))
				}}
			/>
			<div style={{ height: '400px', width: '300px', overflowY: 'scroll' }}>
				<div>{displayItemList()}</div>
			</div>
		</div>
	)
}
