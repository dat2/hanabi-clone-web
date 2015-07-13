import { PLACE_CARD, DISCARD_CARD } from '../constants/actionTypes'

export function place(player, card) {
  return {
    type: PLACE_CARD,
    player,
    card
  }
}

export function discard(player, card) {
  return {
    type: DISCARD_CARD,
    player,
    card
  }
}
