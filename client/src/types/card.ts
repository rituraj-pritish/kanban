export type Card = {
	_id: string,
	title: string,
	labels: [string]
}

export type Label = {
	_id: string,
	name: string,
	bg_color: string
}

export type Comment = {
	comment_by: string,
	comment: string,
	_id: string
}

export type History = {
	_id: string,
	done_by: string,
	type: string,
	done_on: string,
	from: string,
	to: string,
	field: string
}