export default class Card {
  constructor({ colour, number }) {
    this.colour = colour
    this.number = number

    this.colourKnown = false
    this.numberKnown = false
  }

  show() {
    return `${this.colour} ${this.number}`
  }
}
