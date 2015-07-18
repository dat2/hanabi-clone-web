import React from 'react'

class Card extends React.Component {

  constructor() {
    super()

    this.onClick = this.onClick.bind(this)
    this.onRightClick = this.onRightClick.bind(this)
  }

  onClick(e) {

  }

  onRightClick(e) {
    // e.preventDefault()
  }

  render() {
    const { card: { colour, colourKnown, number, numberKnown }, show, style } = this.props

    let knowSome = colourKnown != numberKnown
    let knowColour = show || colourKnown

    let finalColour = knowColour ? colour : (knowSome ? 'cyan' : 'grey')

    const cardStyle = Object.assign({
      color: finalColour,
      border: `1px solid ${finalColour}`
    }, style)
    return (
      <div className='one wide card hover' style={cardStyle}>
        <span onClick={this.onClick} onContextMenu={this.onRightClick}>
          <p>{ colourKnown || show ? colour : '?' }</p>
          <p>{ numberKnown || show ? number : '?' }</p>
        </span>

      </div>
    )
  }
}

Card.defaultProps = {
  card: {
    colour: 'red',
    colourKnown: false,
    number: 0,
    numberKnown: false
  },
  show: false,
  style: {}
}

export default Card
