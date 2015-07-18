import React from 'react'
import Card from './card'
import Stack from './stack'

class Discarded extends React.Component {

  render() {
    let { discarded } = this.props
    return (
      <div>
        <p> Discard pile </p>
        <Stack cards={discarded} hover showColour={false}/>
      </div>
    )
  }
}

export default Discarded
