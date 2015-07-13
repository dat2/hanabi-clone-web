class Move {
  constructor({ x, y }) {
    this._x = x
    this._y = y
  }

  move({ x, y }) {
    this._x = x || this._x
    this._y = y || this._y
  }

  pos() {
    return ({ x: this._x, y: this._y });
  }
}

export default Move
