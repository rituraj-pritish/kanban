export const stringToColour = (str: string): string => {
	let hash = 0
	for (let i = 0; i < str.length; i++) {
		hash = str.charCodeAt(i) + ((hash << 5) - hash)
	}
  
	let colour = '#'
	for (let i = 0; i < 3; i++) {
		const value = hash >> i * 8 & 0xFF
		colour += ('00' + value.toString(16)).substr(-2)
	}

	return colour
}

export const pickTextColorBasedOnBgColor = 
  (bgColor: string, lightColor = 'white', darkColor = 'black'): string => {
  	const color = bgColor.charAt(0) === '#' ? bgColor.substring(1, 7) : bgColor
  	const r = parseInt(color.substring(0, 2), 16) // hexToR
  	const g = parseInt(color.substring(2, 4), 16) // hexToG
  	const b = parseInt(color.substring(4, 6), 16) // hexToB
  	const uicolors = [r / 255, g / 255, b / 255]
  	const c = uicolors.map(col => {
  		if (col <= 0.03928) {
  			return col / 12.92
  		}
  		return Math.pow((col + 0.055) / 1.055, 2.4)
  	})
  	const L = 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2]
  	return L > 0.179 ? darkColor : lightColor
  }

export const getColorsAccordingToString = (str: string) => {
	const bgColor = stringToColour(str)
	const textColor = pickTextColorBasedOnBgColor(str)
	return { bgColor, textColor }
}