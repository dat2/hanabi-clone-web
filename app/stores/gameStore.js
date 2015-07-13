import { PLACE_CARD, DISCARD_CARD } from '../constants/actionTypes'

import createGame from '../game/game'

const handlers = {
  [PLACE_CARD]: function(game, { player, card }) {
    game.playCard(player, card)
  },
  [DISCARD_CARD]: function(game, { player, card }) {
    game.discardCard(player, card)
  }
}

export default function (game = createGame({ chances: 10000, info: 10000 }), action) {
  if(handlers.hasOwnProperty(action.type)) {
    handlers[action.type](game, action)
  }
  return game
}
