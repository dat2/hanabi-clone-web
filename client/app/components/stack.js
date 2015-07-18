import React from 'react'
import Card from './card'

function makeStyle({ colour, index }) {
  return ({
    // colouring
    backgroundColor: colour,
    color: 'black',
    opacity: 0.8,

    // positioning
    zIndex: index,
    position: 'absolute',
    top: (index * 20) + 'px',
    left: 0,
    right: 0
  })
}

class Stack extends React.Component {

  render() {
    const { cards, colour, hover, showColour } = this.props

    return (
      <div className="stack">
        { showColour && colour !== undefined
          ? <p style={{color: colour }}>{colour}</p>
          : <span></span>
        }

        {
          cards.map(({ colour, number }, index) => (
            <div key={index} style={{ position: 'relative' }}>
              <div style={makeStyle({ colour, index })} className={`card ${hover? 'hover': ''}`} >
                <p>{colour}</p>
                <p>{number}</p>
              </div>
            </div>
          ))
        }
      </div>
    )
  }

}

Stack.defaultProps = {
  cards: [],
  colour: 'red',
  hover: false,
  showColour: true
}

export default Stack
