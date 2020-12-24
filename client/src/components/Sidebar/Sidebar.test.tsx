import React from 'react'
import userEvent from '@testing-library/user-event'

import { render } from 'tests/test-utils'
import Sidebar from './Sidebar'

test('Should expand and collapse sidebar on click', async () => {
	const { getByTestId } = render(<Sidebar/>)
  
	expect(getByTestId('sidebar-chevron-left')).toBeInTheDocument()
	expect(getByTestId('sidebar')).toHaveStyle('width: 14rem')
  
	userEvent.click(getByTestId('sidebar-trigger'))
  
	expect(getByTestId('sidebar-chevron-right')).toBeInTheDocument()
	expect(getByTestId('sidebar')).not.toHaveStyle('width: 14rem')
})