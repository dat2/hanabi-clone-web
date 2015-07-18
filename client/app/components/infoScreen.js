import React from 'react'
import { connect } from 'redux/react'

import Discarded from './discarded'

function select({ gameStore: { info, chances, discarded, lose, win } }) {
  return { info, chances, discarded, lose, win }
}

@connect(select)
class InfoScreen extends React.Component {

  render() {
    const { info, chances, discarded, lose, win } = this.props

    const msgStyle = lose ? { color: 'red' } : (win ? { color: 'green' } : {});
    const msg = lose ? 'You have lost!' : (win ? 'You have won!' : '')

    return (
      <nav className="nav column">
        <p style={msgStyle}> {msg}</p>
        <p> You have {info} information tokens left </p>
        <p> You have {chances} chances left </p>

        <Discarded discarded={discarded}/>

        {
        // TODO drag to middle for playing
        // TODO drag to trash for discard
        // TODO have information modes switched with (control), and then
        // raise all cards that would show them their information
        }
      </nav>
    )
  }
}

export default InfoScreen
