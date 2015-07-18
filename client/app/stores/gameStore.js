import { INIT_GAME } from '../constants/actionTypes'

const handlers = {
  [INIT_GAME](_, { game }) {
    return game
  }
}

const INITIAL_STATE = {
  stacks: {},
  score: 0,
  players: [],

  myIndex: 0,

  info: 0,
  chances: 0,
  discarded: [],
  lose: false,
  win: false,
}

export default function (state = INITIAL_STATE, action) {
  const { type } = action
  if(handlers.hasOwnProperty(type)) {
    return handlers[type](state, action)
  }
  return state
}
