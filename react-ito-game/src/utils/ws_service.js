export const msgTypeList = {
  REQ_JOIN_ROOM: 0,
  RES_JOIN_ROOM: 1,
  REQ_GAME_START: 2,
  RES_GAME_START: 3
}

export function connectWebSocket(msg, callSetConnection, callSetPlayers, callSetIsGameMaster) {
  const endpoint = 'ws://localhost:8082/to/ws'
  const sock = new WebSocket(endpoint)

  sock.onopen = () => {
    console.log('Connected')
    callSetConnection(sock)
    sendWs(sock, msg)
  }
  
  sock.onmessage = e => {
    const dataInJs = JSON.parse(e.data)
    resJoinRoom(dataInJs, callSetPlayers, callSetIsGameMaster)
  }
}

export function sendWs(sock, data) {
  sock.send(JSON.stringify(data))
}

function resJoinRoom(data, callSetPlayers, callSetIsGameMaster) {
  if (data.type === 1) {
    callSetPlayers(data.users)
    if (data.isGameMaster) {
      callSetIsGameMaster()
    }
  }
}