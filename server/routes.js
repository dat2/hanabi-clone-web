import express from 'express'

const SERVER_ROOT = './build'

export function routes(app) {

  // main file server
  app.use(express.static(SERVER_ROOT))

}
