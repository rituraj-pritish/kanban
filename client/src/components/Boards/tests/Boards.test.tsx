import React from 'react'
import { render, waitForElement, screen, waitForElementToBeRemoved } from 'tests/test-utils'

import App from 'App'

test('Boards', async () => {
	localStorage.setItem('auth_token', 'token')
	const { debug } = render(<App/>)
	await waitForElement(() => screen.findByText('loading...'))
	await waitForElementToBeRemoved(() => screen.queryByText('loading...'))
	debug()
})