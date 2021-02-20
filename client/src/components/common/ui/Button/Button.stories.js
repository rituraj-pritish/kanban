import React, { useState } from 'react'
import styled from 'styled-components'

import Button from './index'
import { VARIANTS } from 'constants/button'

export default { title: 'Button' }

const Flex = styled.div`
  display: flex;
  align-items: center;
  margin: 2rem 0;

  & > div:first-child {
    margin-right: 1rem;
  }
`

export const Views = () => {
	const [loading, setLoading] = useState(false)
	return (
		<>
			<Flex>
				<div>Default</div>
				<Button isLoading={loading} onClick={() => setLoading(true)}>Looooooooong button text</Button>   
			</Flex>

			<Flex>
				<div>Disabled</div>
				<Button disabled >Button</Button>   
			</Flex>


			<Flex>
				<div>Cancel</div>
				<Button variant={VARIANTS.CANCEL} >Button</Button>   
			</Flex>
		</>
	)
}