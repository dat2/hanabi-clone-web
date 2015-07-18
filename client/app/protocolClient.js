import io from 'socket.io-client'

import * as GameActions from './actions/gameActions'

let socket = io()

export function init(redux) {
  socket.on('init', (game, myIndex) => redux.dispatch(GameActions.init(game, myIndex)))
  socket.emit('init')
}
