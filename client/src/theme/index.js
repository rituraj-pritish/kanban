import styles from './styles'

const SIZING_UNIT = 1

export default {
	borderRadius: '0.4rem',

	colors: {
		primary: '#A85EDA',
		primaryLight: '#EDDEF7',
	},

	listWidth: '17rem',

	spacing: (unit = 1) => `${SIZING_UNIT * unit}rem`,
  
	styles
}