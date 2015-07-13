import React from 'react'

import Player from './player'

class PlayerList extends React.Component {
  render() {
    let { players, place, discard } = this.props
    return (
      <div>
        {
          players.map((p, pI) => (
            <Player
              key={pI}
              player={p}
              playerIndex={pI}
              show={true}
              place={(c) => place(pI, c)}
              discard={(c) => discard(pI, c)}
              />
          ))
        }
      </div>
    )
  }
}

export default PlayerList
