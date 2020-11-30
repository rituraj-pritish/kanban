const Card = require('../../models/Card')
const List = require('../../models/List')

module.exports = {
	Query: {
		getCard: async (_, { id }) => {
			return await Card.findById(id)
		}
	},

	Mutation: {
		createCard: async (_, { title, list_id }, { current_user } ) => {
			const createdAt = new Date().toISOString()
			const card = await new Card({
				title,
				created_at: createdAt,
				updated_at: createdAt,
				history: [{
					type: 'create',
					done_by: current_user
				}]
			}).save()
			const list = await List.findById(list_id)
			list.cards.push(card._id)
			list.save()
			
			return true
		},

		updateCard: async (_, params) => {
			const { id, ...details } = params

			const card = await Card.findById(id)

			Object.keys(details).forEach(key => {
				card[key] = details[key]
			})
			card.updated_at = new Date().toISOString()
			card.save()
		},

		deleteCard: async ( _, { list_id, id }) => {
			const list = await List.findById(list_id)

			list.cards = list.cards.filter(cardId => cardId.toString() !== id)
			
			await list.save()
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
		},

		addComment: async (_, { card_id, comment }, { current_user }) => {
			const card = await Card.findById(card_id)

			card.comments.push({
				comment,
				comment_by: current_user
			})

			await card.save()
			return true
		},

		updateComment: async (_, { card_id, comment_id, comment }) => {
			const card = await Card.findById(card_id)

			const comments = card.comments.map(com => {
				if(com._id === comment_id) return com
		
				return {
					...com,
					comment
				}
			})
			
			card.update({
				comments
			})

			await card.save()
			return true
		},

		deleteComment: async (_, { card_id, comment_id }) => {
			const card = await Card.findById(card_id)
			const comments = card.comments.filter(({ _id }) => _id !== comment_id)
			card.comments = comments
			await card.save()
			return true
		}
	}
}