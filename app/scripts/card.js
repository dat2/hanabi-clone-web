import Move from './move'
import Hover from './hover'

const degToRad = (deg) => deg * Math.PI / 180

class HoveringCard extends Move {
  constructor({ x, y, w, h, n, colour }) {
    super({ x, y })
    this._w = w
    this._h = h
    this._n = n
    this._col = colour

    this._animation = new Hover(this, 0.6, 5)
    this._mpos = { x: -1, y: -1 }
  }

  draw(ctx) {
    // trigger animation, which just modifies x/y
    this._animation.update(this.intersects(this._mpos))

    let { x, y } = this.pos()
    ctx.save()

    // draw the card
    ctx.fillStyle = this._col
    ctx.fillRect(x, y, this._w, this._h)

    // draw the font
    ctx.fillStyle = 'black';
    ctx.font = '30px Verdana';
    ctx.fillText(this._n, x + this._w / 2 - 10, y + this._h / 2 + 15)

    ctx.restore()
  }

  intersects({ x: mx, y: my }) {
    let { x, y } = this.pos()

    return (
      (mx >= x && mx <= x + this._w)
      &&
      (my >= y && my <= y + this._h)
    )
  }

  hover(p) {
    this._mpos = p
  }
}

export default HoveringCard
