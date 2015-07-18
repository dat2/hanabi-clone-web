import { INIT_GAME, PLAY, DISCARD } from '../constants/actionTypes'

export function init(game, myIndex) {
  return {
    type: INIT_GAME,
    game: {
      ...game,
      myIndex
    }
  }
}

export function play(player, card) {
  return {
    type: PLAY,
    player,
    card
  }
}

export function discard(player, card) {
  return {
    type: DISCARD,
    player,
    card
  }
}
