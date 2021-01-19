import React from 'react'
import { render, screen, waitForElementToBeRemoved } from 'tests/test-utils'

import App from 'App'

test('Boards', async () => {
	localStorage.setItem('auth_token', 'token')
	const { debug } = render(<App/>)

	await waitForElementToBeRemoved(() => screen.queryByText('loading...'))
	debug()
})