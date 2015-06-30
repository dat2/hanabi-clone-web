import Move from './move'

const IDLE = 0
const HOVERING = 1

class HoveringCard extends Move {
  constructor({ x, y, w, h, colour='green' }) {
    super({ x, y })
    this._w = w
    this._h = h
    this._col = colour

    this._state = IDLE
  }

  draw(ctx) {
    ctx.save()

    // ctx.rotate(20 * (Math.PI / 180))
    ctx.fillStyle = this._col
    ctx.fillRect(this._x, this._y, this._w, this._h)

    ctx.restore()
  }

  intersects({ x, y }) {
    return (
      (x >= this._x && x <= this._x + this._w)
      &&
      (y >= this._y && y <= this._y + this._h)
    )
  }

  hover(pos) {
    let oldState = this._state

    this._state = this.intersects(pos) ? HOVERING : IDLE

    // if switching to hovering, hover
    if(oldState == IDLE && this._state == HOVERING) {
      let top = this._y - 10

      // go up
      let interval = setInterval(() => {
        this._y -= 1
        if(this._y <= top)
          clearInterval(interval)
      }, 10);
    }

    // if switching back from hovering into idle, go down
    if(oldState == HOVERING && this._state == IDLE) {
      let bottom = this._y + 10

      // go down
      let interval = setInterval(() => {
        this._y += 1
        if(this._y >= bottom)
          clearInterval(interval)
      }, 10);
    }
  }
}

export default HoveringCard
