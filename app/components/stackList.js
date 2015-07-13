import React from 'react'

import Stack from './stack'

class StackList extends React.Component {
  render() {
    let { stacks, score } = this.props
    return (
      <div className="stacks">
        <p> Stacks, Score: {score}</p>
        <div className="flex spaced">
          {
            Object.keys(stacks).map((c, i) => <Stack key={i} cards={stacks[c]} colour={c}/>)
          }
        </div>
      </div>
    )
  }
}

export default StackList
