const User = require('../models/user')
const Topic = require('../models/topic')

const msgTypeList = {
  REQ_JOIN_ROOM: 0,
  RES_JOIN_ROOM: 1,
  REQ_GAME_START: 2,
  RES_GAME_START: 3
}

async function joinRoom(clientsList, data, uuid) {
  if(data.type === 0) {
    await User.create(data.username, uuid)
    const users = await User.findAll()

    for (let clientUuid in clientsList) {
      const resData = {
        type: msgTypeList.RES_JOIN_ROOM,
        users: users,
        isGameMaster: false
      }

      const ws = clientsList[clientUuid]
      if (clientUuid === resData.users[0].uuid) {
        resData.isGameMaster = true
      }
      ws.send(JSON.stringify(resData))
    }
  } else {
    return
  }
}

async function showRandomTopic(clientsList, data) {
  if (data.type === 2) {
    const randomTopic = await Topic.findRandom()

    for (let clientUuid in clientsList) {
      const resData = {
        type: msgTypeList.RES_GAME_START,
        topic: randomTopic
      }

      const ws = clientsList[clientUuid]
      ws.send(JSON.stringify(resData))
    }
  } else {
    return
  }
}

module.exports = {
  joinRoom,
  showRandomTopic
}

// if (dataInJs.text === "start") {
//   for (let clientUuid in clientsList) {
//     const message = Math.floor(Math.random() * 100)
//     sendToClient(clientUuid, message)
//   }
// }

// wss.clients.forEach(client => {
//   if (client.readyState === WebSocket.OPEN) {
//     client.send(data, {binary: isBinary })
//   }
// })
