import createGame from './game/game'

class SocketList {
  constructor(io, connectFn = function() { }, disconnectFn = function() { }) {
    this.io = io

    this._listeners = {}
    this._sockets = {}

    this.io.on('connection', (socket) => {
      connectFn(socket)
      this._sockets[socket.conn.id] = socket

      this.listeners.forEach(({ event, listener }) => socket.on(event, (...args) => listener(socket, ...args)))

      socket.on('disconnect', () => {
        disconnectFn(this._sockets[socket.conn.id])
        delete this._sockets[socket.conn.id]
      })
    })
  }

  get sockets() {
    return Object.keys(this._sockets).map((s) => this._sockets[s])
  }

  get listeners() {
    return Object.keys(this._listeners).map((event) => ({ event, listener: this._listeners[event] }))
  }

  on(event, listener, listenerID='') {
    this._listeners[listenerID || event] = listener
  }

  off(event, listenerID='') {
    let listener = this._listeners[listenerID || event]
    this.sockets.forEach((socket) => socket.removeListener(event, listener))
  }

  broadcast(event, ...args) {
    this.io.broadcast(event, ...args)
  }
}

export function setupProtocol(io) {

  let g = createGame()

  let pIndex = 0

  let sl = new SocketList(io)

  sl.on('init', (socket) => {
    pIndex = (++pIndex) % 4
    socket.emit('init', g.getState(), pIndex)
  })
}
