import { intercalate } from './util'

export default class Player {
  constructor() {
    this.cards = []
  }

  giveColour(col) {
    this.cards.forEach((c) => {
      if(c.colour === col) {
        c.colourKnown = true
      }
    });
  }

  giveNumber(n) {
    this.cards.forEach((c) => {
      if(c.number === n) {
        c.numberKnown = true
      }
    });
  }

  show() {
    return `Player (${intercalate(this.cards.map((c) => c.show()))})`
  }

  addCard(c) {
    this.cards.push(c)
  }

  removeCard(i) {
    let c = this.cards[i]
    this.cards.splice(i, 1)
    return c
  }
}
