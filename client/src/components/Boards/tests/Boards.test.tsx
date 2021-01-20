import React from 'react'
import { render, screen, waitForElement, waitForElementToBeRemoved } from 'tests/test-utils'

import App from 'App'
import userEvent from '@testing-library/user-event'

test('Boards', async () => {
	localStorage.setItem('auth_token', 'token')
	const { debug } = render(<App/>)
	await waitForElementToBeRemoved(() => screen.queryByText('loading...'))

	userEvent.click(screen.getByText('Boards'))

	expect(await screen.findByText('Board 1')).toBeInTheDocument()
	expect(await screen.findByText('Board 2')).toBeInTheDocument()

	userEvent.click(screen.getByText('New Board'))
	await waitForElement(() => screen.findByText('Add board'))
	userEvent.type(
		screen.getByPlaceholderText(/enter name of the board/i),
		'New Board'
	)
	userEvent.click(screen.getByText('Confirm'))
	await waitForElementToBeRemoved(() => screen.queryByText('Add board'))

	expect(await screen.findByText('Board 1')).toBeInTheDocument()
	expect(await screen.findByText('Board 2')).toBeInTheDocument()
	expect(await screen.findByText('New Board')).toBeInTheDocument()

	debug()
})