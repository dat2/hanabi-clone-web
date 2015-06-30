import './styles/app.scss'

import HoveringCard from './scripts/card'
import Move from './scripts/move'

class App {
  constructor(selector = '.main-canvas') {
    this._container = document.querySelector(selector + '-container')
    this._canvas = document.querySelector(selector)
    this._ctx = this._canvas.getContext('2d')
    this._mousePos = new Move({ x: 0, y: 0 })

    // add card
    this.cards = [
      new HoveringCard({ x: 10, y: 10, w: 70, h: 100, n: 1, colour: 'green' }),
      new HoveringCard({ x: 90, y: 10, w: 70, h: 100, n: 2, colour: 'red' }),
      new HoveringCard({ x: 170, y: 10, w: 70, h: 100, n: 3, colour: 'blue' }),
      new HoveringCard({ x: 250, y: 10, w: 70, h: 100, n: 4, colour: 'yellow' }),
      new HoveringCard({ x: 330, y: 10, w: 70, h: 100, n: 5, colour: 'grey' })
    ]
  }

  attachListeners() {
    this._container.addEventListener('mousemove', (e) => {
      e.preventDefault();

      // calculate the new mouse position
      let { clientX, clientY } = e;
      let { left, top } = this._canvas.getBoundingClientRect()
      this._mousePos.move({ x: clientX - left, y: clientY - top })

      // get the { x, y } object from the mouse pos
      let mousePos = this._mousePos.pos()
      this.cards.forEach((c) => c.hover(mousePos))
    });
  }

  render() {
    // clear
    this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height)

    // draw
    this.cards.forEach((c) => c.draw(this._ctx))

    // re-render
    requestAnimationFrame(this.render.bind(this))
  }

  run() {
    this.attachListeners()

    // initiate rendering
    requestAnimationFrame(this.render.bind(this))
  }
}

(new App()).run()
