import DRAG_DROP_TYPES from 'constants/dragDropTypes'

interface Result {
  type: string,
  destination: {droppableId: string, index: number},
  source: {droppableId: string, index: number},
  draggableId: string
}

interface Card {
	_id: string,
	title: string
}

interface List {
	_id: string,
	board_id: string,
	title: string,
	cards: Card[]
}

export default (
	result: Result, 
	columns: List[]| null, 
	setColumns: (columns: List[]) => void,
	updateListIndex: (params: {[key: string]: any}) => void,
	updateCardIndex: (params: {[key: string]: any}) => void,
	boardId: string
): void => {
	const { destination, source, draggableId, type } = result
	if (!columns) return 
	if (!destination) return

	if (
		destination.droppableId === source.droppableId &&
    destination.index === source.index
	)
		return

	if (type === DRAG_DROP_TYPES.LIST) {
		updateListIndex({
			variables: {
				old_index: source.index,
				new_index: destination.index,
				list_id: draggableId,
				board_id: boardId
			}
		})

		const items = [...columns]
		const item = items.find(({ _id }) => _id === draggableId)
		const newItems = [...items]
		if(item) {
			newItems.splice(source.index, 1)
			newItems.splice(destination.index, 0, item)
		}
		setColumns(newItems)
		return
	} else {
		updateCardIndex({
			variables: {
				old_index: source.index,
				new_index: destination.index,
				card_id: draggableId,
				old_list: source.droppableId,
				new_list: destination.droppableId
			}
		})

		const sourceList = columns.find(({ _id }: {_id: string}) => _id === source.droppableId)
		const destinationList = columns.find(
			({ _id }) => _id === destination.droppableId
		)

		// TODO error handle
		if(!sourceList || !destinationList) return 
		const item = sourceList.cards.find(({ _id }: {_id: string}) => _id === draggableId)
		const sourceListIdx = columns.findIndex(
			({ _id }) => _id === source.droppableId
		)
		const destinationListIdx = columns.findIndex(
			({ _id }) => _id === destination.droppableId
		)

		const newSourceListCards = [...sourceList.cards]
		const newDestinationListCards = [...destinationList.cards]

		const newColumns = [...columns]

		if (source.droppableId === destination.droppableId) {
			if(item) {
				newSourceListCards.splice(source.index, 1)
				newSourceListCards.splice(destination.index, 0, item)
			}

			newColumns[sourceListIdx] = {
				...sourceList,
				cards: newSourceListCards
			}
		} else {
			if(item) {
				newSourceListCards.splice(source.index, 1)
				newDestinationListCards.splice(destination.index, 0, item)
			}

			newColumns[sourceListIdx] = { ...sourceList, cards: newSourceListCards }
			newColumns[destinationListIdx] = {
				...destinationList,
				cards: newDestinationListCards
			}
		}
		setColumns(newColumns)
	}
}