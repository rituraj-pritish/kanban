import React from 'react'
import { render } from 'tests/test-utils'

import App from 'App'

test('Renders App without crashing', () => {
	render(<App/>)
})