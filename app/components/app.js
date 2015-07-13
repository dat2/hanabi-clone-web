import React from 'react'


import InfoScreen from './infoScreen'
import GameScreen from './gameScreen'

class App extends React.Component {

  render() {
    return (
      <div>
        <header>
          <h1> Welcome to Hanabi! </h1>
        </header>

        <main className="main flex">
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
