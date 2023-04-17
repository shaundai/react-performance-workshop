import React, { useState } from 'react'
import './Virtualization.css'

export const VirtualizedApp = () => {
	const [count, setCount] = useState(1000)
  const [scrollTop, setScrollTop] = useState(0)

	const itemHeight = 30
	const windowHeight = 500

  // this just makes it easier to scroll
  const innerHeight = count * itemHeight

	const items = Array.from({ length: count }, (_, i) => ({
		index: i + 1,
		name: `Movie ${i + 1}`,
	}))

  // scrollTop property gets or sets the number of pixels that an element's content is scrolled vertically.
	const onScroll = (e: React.UIEvent<HTMLDivElement>) =>
		setScrollTop(e.currentTarget.scrollTop)

	const startIndex = Math.floor(scrollTop / itemHeight)
	const endIndex = Math.min(
		count, // so we don't go past the last
		Math.floor((scrollTop + windowHeight) / itemHeight)
	)

	const displayItemList = () => {
		const itemList = items.slice(startIndex, endIndex).map(i => (
			<div
				key={i.name}
				className='movie'
				style={{
					position: 'absolute',
					top: `${i.index * itemHeight}px`,
					width: '100%',
				}}
			>
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
			<div
				style={{ height: '400px', width: '300px', overflowY: 'scroll' }}
				onScroll={onScroll}>
				<div
					style={{ position: 'relative', height: `${innerHeight}px` }}>
					{displayItemList()}
				</div>
			</div>
		</div>
	)
}
