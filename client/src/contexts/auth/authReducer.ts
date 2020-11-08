  
import { AUTH_ERROR, AUTH_SUCCESS, SIGNOUT } from 'contexts/types'
import getFullName from 'helpers/getFullName'

import { User } from 'types/auth'

interface State {
  isAuthenticated: boolean,
  loading: boolean,
  user: User | null
}

export default (state: State, { type, payload }: {type: string, payload: any}): State => {
	switch (type) {
	case SIGNOUT:
	case AUTH_ERROR:
		return {
			...state,
			loading: false,
			isAuthenticated: false,
			user: null,
		}
	case AUTH_SUCCESS:
		return {
			...state,
			loading: false,
			isAuthenticated: true,
			user: {
				...payload,
				name: getFullName(payload.first_name, payload.last_name)
			},
		}
	default:
		return state
	}
}