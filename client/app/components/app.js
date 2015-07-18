import React from 'react'

import InfoScreen from './infoScreen'
import GameScreen from './gameScreen'

import * as protocol from '../protocolClient'

class App extends React.Component {

  componentDidMount() {
    protocol.init(this.props.redux)
  }

  render() {
    return (
      <div>
        <header>
          <h1> Welcome to Hanabi! </h1>
        </header>

        <main className="main grid">
          <InfoScreen />
          <GameScreen />
        </main>

        <footer>
          Created by Nick Dujay ©
        </footer>
      </div>
    );
  }

}

export default App
