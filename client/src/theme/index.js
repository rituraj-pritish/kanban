const SIZING_UNIT = 1

export default {
	borderRadius: '0.4rem',

	primary: '#A85EDA',
	primaryLight: '#EDDEF7',

	listWidth: '17rem',

	spacing: (unit = 1) => `${SIZING_UNIT * unit}rem`,
  
	centerElement: {
		display: 'flex',
		'justify-content': 'center',
		'align-items': 'center'
	}
}