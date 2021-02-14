import styles from './styles'

const SIZING_UNIT = 1

export default {
	borderRadius: '0.4rem',

	colors: {
		primary: '#9196E4',
		primaryLight: '#EFF0FE',
		greyLight: '#DCDCDC',
		inputBg: '#F7F7F7',
		red: '#FF3737',
		
	},

	listWidth: '17rem',

	spacing: (unit = 1) => `${SIZING_UNIT * unit}rem`,
  
	styles
}