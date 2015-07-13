import Card from './card'
import Player from './player'

import { intercalate, replicate } from './util'

// TODO make this more functional

class Game {
  constructor(cfg) {
    // default object
    cfg = Object.assign({
      colours: ['red', 'green', 'blue', 'white', 'yellow'],
      numPlayers: 4,
      info: 8,
      chances: 3
    }, cfg)

    let { colours, numPlayers, info, chances } = cfg

    this.players = replicate(numPlayers, () => new Player())

    this.info = info
    this.chances = chances

    this.discarded = []
    this.stacks = { }
    this.score = 0
    this.deck = { }
    colours.forEach((col) => {
      this.deck[col] = [5, 4,4, 3,3, 2,2, 1,1,1]
      this.stacks[col] = []
    })

    this.players.forEach(this.generateHand.bind(this))
    this.lose = false
    this.win = false
  }

  checkLost() {
    // either no chances
    const noChances = this.chances === 0

    // we just discarded a card that prevents us from winning
    let lastCard = this.discarded.pop()
    let { number, colour } = lastCard

    // we just dropped a 5
    let droppedNeededCard = number === 5

    // or if we have 2 4s, 3s, 2s of the same colour in discard
    if(number === 4 || number === 3 || number === 2) {
     droppedNeededCard = this.discarded.findIndex((c) => c.colour == colour && c.number == number) !== -1
    }

    // or if we have 3 1s of the same colour in discared
    if(number === 1) {
      let num1s = 0
      this.discarded.forEach((d) => {
        if(d.colour === colour && d.number === 1) {
          num1s++
        }
      })

      droppedNeededCard = num1s === 2
    }

    this.lose = noChances || droppedNeededCard

    this.discarded.push(lastCard)
  }

  checkWon() {
    this.score = Object.keys(this.stacks).reduce((acc,k) => acc + this.stacks[k].length, 0)
    this.win = Object.keys(this.stacks).reduce((acc,k) => acc && this.stacks[k].length === 5, true)
  }

  selectCard() {
    let cols = Object.keys(this.deck)

    // this prevents a nasty bug where we pick up a card even though
    // there are no cards of that colour left, so we get a card with a colour
    // but no number
    let colour = cols[Math.floor(Math.random() * cols.length)]
    while(this.deck[colour].length === 0) {
      colour = cols[Math.floor(Math.random() * cols.length)]
    }

    let idx = Math.floor(Math.random() * this.deck[colour].length)
    let number = this.deck[colour][idx]
    this.deck[colour].splice(idx, 1)

    return new Card({ colour, number })
  }

  generateHand(player) {
    let cards = []

    for(let i = 0; i < 5; i++) {
      cards.push(this.selectCard())
    }
    player.cards = cards
  }

  discard(c) {
    c.colourKnown = true
    c.numberKnown = true

    this.discarded.push(c)
  }

  removeChance() {
    this.chances--
    this.checkLost()
  }

  playCard(playerIdx, cardIdx) {
    if(this.lose) {
      return
    }
    let p = this.players[playerIdx]
    let c = p.removeCard(cardIdx)
    let { colour, number } = c

    p.addCard(this.selectCard())

    // check if the move is valid
    let stack = this.stacks[colour]
    if(
      // if stack is empty, and placing 1 then it's valid
      (stack.length === 0 && number === 1)
      // if stack is not empty, and placing a number that is 1 greater than the
      // 1 before, then it is fine
      || (stack.length !== 0 && stack[stack.length-1].number === number - 1)
    ) {
      c.colourKnown = true
      c.numberKnown = true
      stack.push(c)

      this.checkWon()

      return true
    }

    // else it is invalid
    this.discard(c)

    // have to check if we lost
    this.removeChance()

    return false
  }

  discardCard(playerIdx, cardIdx) {
    if(this.lose) {
      return
    }
    let p = this.players[playerIdx]
    let c = p.cards[cardIdx]
    p.cards.splice(cardIdx, 1)

    this.discard(c)
    p.addCard(this.selectCard())
    this.checkLost()

    return true
  }

  giveColourInformation(playerIdx, cardIdx) {
    if(this.lose || this.info === 0) {
      return
    }
    let p = this.players[playerIdx]
    let { colour } = p.cards[cardIdx]
    p.giveColour(colour)

    this.info--
  }

  giveNumberInformation(playerIdx, cardIdx) {
    if(this.lose || this.info === 0) {
      return
    }
    let p = this.players[playerIdx]
    let { number } = p.cards[cardIdx]
    p.giveNumber(number)

    this.info--
  }
}

export default function createGame(cfg) {
  return new Game(cfg)
}
