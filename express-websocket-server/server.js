require('dotenv').config()

const express = require('express')
const crypto = require("crypto")
const WebSocket = require('ws')
const wsServices = require('./middlewares/ws_services')

const app = express()
const portForExpress = 8081
const portForWebSocket = 8082

const wss = new WebSocket.Server({
  port: portForWebSocket,
  path: "/to/ws"
})

const clientsList = {}

wss.on('connection', ws => {
  ws.on('error', console.error)

  const uuid = crypto.randomUUID()
  clientsList[uuid] = ws

  ws.on('message', data => {
    const dataInJs = JSON.parse(data)

    console.log(dataInJs)

    wsServices.joinRoom(clientsList, dataInJs, uuid)
    wsServices.showRandomTopic(clientsList, dataInJs)
  })

  ws.on('close', () => {
    delete clientsList[uuid]
  })
})


app.listen(portForExpress, () => {
  console.log(`listening on port ${portForExpress}`)
})
