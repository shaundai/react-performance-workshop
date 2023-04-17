import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { NonVirtualizedApp } from './exercises'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
	},
	{
		path: 'virtualization',
		element: <NonVirtualizedApp />,
	},
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)
