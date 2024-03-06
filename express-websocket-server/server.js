require('dotenv').config()

const express = require('express')
const crypto = require("crypto")
const WebSocket = require('ws')
const wsServices = require('./middlewares/ws_services')

const app = express()
const portForExpress = 8081
const portForWebSocket = 8082
const roomRouter = require('./routes/room_router')

app.use(roomRouter)

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
    wsServices.giveACard(clientsList, dataInJs)
    wsServices.submitResponse(clientsList, dataInJs, uuid)
    wsServices.submitOrder(clientsList, dataInJs)
    wsServices.resetOrder(clientsList, dataInJs)
    wsServices.checkOrder(clientsList, dataInJs)
    wsServices.continueGame(clientsList, dataInJs)
    wsServices.finishGame(clientsList, dataInJs)
    wsServices.exitRoom(clientsList, dataInJs, uuid)
  })

  ws.on('close', () => {
    delete clientsList[uuid]
  })
})


app.listen(portForExpress, () => {
  console.log(`listening on port ${portForExpress}`)
})
