import React from 'react'

import Card from './card'

import { connect } from 'redux/react'

@connect( ({ gameStore: { myIndex } }) => ({ myIndex }) )
class Player extends React.Component {

  render() {
    let { player: { cards }, show, playerIndex, myIndex } = this.props

    let mainStyle = {
      position: 'absolute',
      display: 'block',
      width: '20vw',
      height: '20vh'
    }

    let pos = {}
    switch(playerIndex) {
      case 0:
        pos = { left: 0, top: 0 }
        break;

      case 1:
        pos = { right: 0, top: 0 }
        break;

      case 2:
        pos = { left: 0, bottom: 0 }
        break;

      case 3:
        pos = { right: 0, bottom: 0 }
        break;
    }

    mainStyle = Object.assign(mainStyle, pos)

    return (
      <div style={mainStyle}>
        <p> Player {playerIndex+1}'s cards </p>
        <div className="grid">
          {
            cards.map(
              (c, cI) => {
                return (
                  <Card key={cI} card={c} show={playerIndex !== myIndex}/>
                )
              }
            )
          }
        </div>
      </div>
    )
  }
}

Player.defaultProps = {
  player: { cards: [] },
  playerIndex: 0
}

export default Player
