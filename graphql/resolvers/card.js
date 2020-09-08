const Card = require('../../models/Card')
const List = require('../../models/List')

module.exports = {
	Query: {
		getCard: async (_, { id }) => {
			return await Card.findById(id)
		}
	},

	Mutation: {
		createCard: async (_, { title, list_id }) => {
			const card = await new Card({
				title
			}).save()
			const list = await List.findById(list_id)
			list.cards.push(card._id)
			list.save()
			
			return true
		},

		updateCardIndex: async (
			_, 
			{ old_index, new_index, card_id, old_list, new_list }
		) => {
			if(old_list === new_list) {
				const list = await List.findById(old_list)

				list.cards.splice(old_index, 1)
				list.cards.splice(new_index, 0, card_id)

				list.save()
			} else {
				const oldList = await List.findById(old_list)
				const newList = await List.findById(new_list)

				oldList.cards.splice(old_index, 1)
				newList.cards.splice(new_index, 0, card_id)

				oldList.save()
				newList.save()
			}
		}
	}
}