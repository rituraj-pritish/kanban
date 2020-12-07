import { Card } from './card'

export type List = {
  _id: string,
  title: string,
  cards: Card[],
  board_id: string
}

export type Board = {
  lists: List[],
  name: string,
  _id: string 
}