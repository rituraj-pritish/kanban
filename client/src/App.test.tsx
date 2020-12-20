import { render } from 'tests/test-utils'

import App from 'App'

it('Renders App without crashing', () => {
    const {debug}= render(<App/>)
    debug()
})