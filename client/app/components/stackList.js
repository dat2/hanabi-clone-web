import React from 'react'

import Stack from './stack'

class StackList extends React.Component {
  render() {
    const { stacks, score } = this.props
    return (
      <div className="stacks">
        <p> Stacks, Score: {score}</p>
        <div className="grid spaced">
          {
            Object.keys(stacks).map((c, i) => <Stack key={i} cards={stacks[c]} colour={c}/>)
          }
        </div>
      </div>
    )
  }
}

StackList.defaultProps = {
  stacks: { },
  score: 0
}

export default StackList
