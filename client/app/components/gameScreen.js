import React from 'react'

import StackList from './stackList'
import PlayerList from './playerList'

import { connect } from 'redux/react'

import { bindActionCreators } from 'redux'
import * as GameActions from '../actions/gameActions'

function select({ gameStore: { stacks, score, players } }) {
  return { stacks, score, players }
}

@connect(select)
class GameScreen extends React.Component {

  render() {
    const { stacks, score, players, dispatch } = this.props

    return (
      <div className="game column three wide">
        <StackList stacks={stacks} score={score} />
        <PlayerList players={players} {...bindActionCreators(GameActions, dispatch)} />
      </div>
    )
  }

}

export default GameScreen
