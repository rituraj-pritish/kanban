import React from 'react'
import userEvent from '@testing-library/user-event'

import { render, screen, waitForElement, waitForElementToBeRemoved } from 'tests/test-utils'
import App from 'components/app/App'

test('Board', async () => {
	localStorage.setItem('auth_token', 'token')
	const { container, debug } = render(<App/>)
  
	// navigate to board
	await waitForElementToBeRemoved(() => screen.queryByText('loading...'))
	userEvent.click(screen.getByText('Boards'))
  
	expect(await screen.findByText('Board 1')).toBeInTheDocument()
	expect(await screen.findByText('Board 2')).toBeInTheDocument()
  
	userEvent.click(screen.getByText('Board 1'))
	await waitForElement(() => screen.findByText('Add new list'))
  
	userEvent.click(screen.getByText('Add new list'))
	await waitForElement(() => screen.findByText('Add'))
	userEvent.type(
		screen.getByPlaceholderText('Enter list name'),
		'List 2'
	)
	userEvent.click(screen.getByText('Add'))
	debug()
})