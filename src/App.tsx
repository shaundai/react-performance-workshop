import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { useNavigate } from 'react-router-dom'

export const App = () => {
	const navigate = useNavigate()

	const exercises = [
		{ name: 'virtualization', path: './virtualization' },
		{ name: 'memoization', path: './memoization' },
	]
	return (
		<div className='App'>
			<h1>React Performance Workshop</h1>
			<img src={reactLogo} className='logo react' alt='React logo' />
			<h2>Exercises</h2>
			<div className='card'>
				{exercises.map((exercise, i) => {
					return (
						<button
							key={`${i}-${exercise.name}`}
							onClick={() => navigate(exercise.path)}>
							{exercise.name}
						</button>
					)
				})}
			</div>
			<button>Solutions</button>
			<p className='read-the-docs'>
				About Shaundai Person Shaundai is a Senior Software Engineer at Netflix
				and TC39 Delegate based in Atlanta, GA, US. She is passionate about
				making programming interesting and approachable for all, and does that
				through her work as a course instructor, co-lead for React Robins, and
				technical blogger. In her spare time, Shaundai loves to go hiking,
				jogging, and listen to audiobooks.{' '}
			</p>
		</div>
	)
}
