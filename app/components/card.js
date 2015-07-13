import React from 'react'

class Card extends React.Component {

  onRightClick(e) {
    e.preventDefault()
    const { discard } = this.props
    discard()
  }

  render() {
    const { card: { colour, colourKnown, number, numberKnown }, show, place, style, hover, stacked } = this.props

    const cardStyle = Object.assign({
      color: colourKnown || show ? colour : 'grey',
      border: `1px solid ${colour}`
    }, style)
    return (
      <div className={`card hover`} style={cardStyle}>
        <span onClick={place} onContextMenu={this.onRightClick.bind(this)}>
          <p>{ colourKnown || show ? colour : '?' }</p>
          <p>{ numberKnown || show ? number : '?' }</p>
        </span>

      </div>
    )
  }
}

export default Card
