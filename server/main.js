import http from 'http'

import express from 'express'
import socketIO from 'socket.io'

import { routes } from './routes'
import { setupProtocol } from './protocolServer'

const PORT = 3000

// setup the routes
let app = express()
routes(app)

// setup the sockets
let server = http.createServer(app)
let io = socketIO(server)
setupProtocol(io)

// start the server
server.listen(PORT)
console.log(`Listening on port: ${PORT}`)
