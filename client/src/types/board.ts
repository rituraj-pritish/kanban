import { Card } from './card'

export type List = {
  _id: string,
  title: string,
  cards: Card[]
}

export type Board = {
  lists: List[],
  name: string,
  _id: string 
}