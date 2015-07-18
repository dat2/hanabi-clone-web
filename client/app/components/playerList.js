import React from 'react'

import Player from './player'

class PlayerList extends React.Component {
  render() {
    let { players } = this.props
    return (
      <div>
        {
          players.map((p, pI) => (
            <Player
              key={pI}
              player={p}
              playerIndex={pI}
              />
          ))
        }
      </div>
    )
  }
}

PlayerList.defaultProps = {
  players: []
}

export default PlayerList
