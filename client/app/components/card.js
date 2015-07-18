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

    console.log(this.props.card)

    const cardStyle = Object.assign({
      color: colourKnown || show ? colour : 'grey',
      border: `1px solid ${show ? colour : 'grey'}`
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
