import Move from './move'

const IDLE = 0
const TRANSITION_UP = 1
const TRANSITION_DOWN = 2
const HOVERING = 3

class Hover {
  constructor(m, speed = 1, maxY = 20) {
    this._m = m
    this._oY = m.pos().y
    this._speed = speed
    this._maxY = maxY
    this._state = IDLE
  }

  update(trig) {
    let { y } = this._m.pos()
    let currentState = this._state

    // if we are moving, continue moving
    if(trig) {

      if (currentState == TRANSITION_UP) {
        // continue moving up
        this._m.move({ y : y - this._speed })

        // switch to hovering
        let top = this._oY - this._maxY
        if(y - this._speed <= top)
          this._state = HOVERING
      }

      // if we are currently idle, move down
      if(currentState == IDLE) {
        this._state = TRANSITION_UP
      }
    } else {
      if (currentState == TRANSITION_DOWN) {
        this._m.move({ y : y + this._speed })

        // switch to idle
        let bottom = this._oY
        if(y + this._speed >= bottom)
          this._state = IDLE
      }

      if (this._state !== IDLE) {
        this._state = TRANSITION_DOWN
      }
    }
  }
}

export default Hover
