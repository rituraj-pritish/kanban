import React from 'react'
import { render, screen, waitForElementToBeRemoved } from 'tests/test-utils'

import App from 'components/app/App'

test('Should render home page', () => {
	const { container } = render(<App/>)
	expect(screen.getByText('Log In')).toBeInTheDocument()
	expect(screen.getByText('Sign Up')).toBeInTheDocument()

	expect(container).toMatchSnapshot()
})

test('Should render Dashboard page',async () => {
	localStorage.setItem('auth_token', 'token')
	const { container } = render(<App/>)
	await waitForElementToBeRemoved(() => screen.queryByText('loading...'))
	expect(screen.getAllByText(/dashboard/i)).toHaveLength(2)		
	expect(container).toMatchSnapshot()
})