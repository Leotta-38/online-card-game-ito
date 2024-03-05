export const msgTypeList = {
  REQ_JOIN_ROOM: 0,
  RES_JOIN_ROOM: 1,
  REQ_GET_TOPIC: 2,
  RES_GET_TOPIC: 3,
  REQ_GET_A_CARD: 4,
  RES_GET_A_CARD: 5,
  REQ_SUBMIT_RESPONSE: 6,
  RES_SUBMIT_RESPONSE: 7,
  REQ_SUBMIT_ORDER: 8,
  RES_SUBMIT_ORDER: 9,
  REQ_RESET_ORDER: 10,
  RES_RESET_ORDER: 11,
  REQ_CHECK_ORDER: 12,
  RES_CHECK_ORDER: 13,
  REQ_CONTINUE_GAME: 14,
  RES_CONTINUE_GAME: 15,
  REQ_FINISH_GAME: 16,
  RES_FINISH_GAME: 17
}

export function connectWebSocket(msg, callSetConnection, callSetPlayers, callSetIsGameMaster, callSetTopic, callSetIsChecked, navigate) {
  const endpoint = 'ws://localhost:8082/to/ws'
  const sock = new WebSocket(endpoint)

  sock.onopen = () => {
    callSetConnection(sock)
    sendWs(sock, msg)
  }
  
  sock.onmessage = e => {
    const dataInJs = JSON.parse(e.data)
    res1(dataInJs, callSetPlayers, callSetIsGameMaster, navigate)
    res3(dataInJs, callSetTopic, navigate)
    res5(dataInJs, callSetPlayers, navigate)
    res7n9n11(dataInJs, callSetPlayers)
    res13(dataInJs, callSetIsChecked, navigate)
    res15(dataInJs, callSetPlayers)
  }
}

export function sendWs(sock, data) {
  sock.send(JSON.stringify(data))
}

function res1(data, callSetPlayers, callSetIsGameMaster, navigate) {
  if (data.type === 1) {
    callSetPlayers(data.users)
    if (data.isGameMaster) {
      callSetIsGameMaster()
    }
    navigate('/room')
  } else {
    return
  }
}

function res3(data, callSetTopic, navigate) {
  if (data.type === 3) {
    callSetTopic(data.topic)
    navigate('/game')
  } else {
    return
  }
}

function res5(data, callSetPlayers, navigate) {
  if (data.type === 5) {
    callSetPlayers(data.users)
    navigate('/game/play')
  } else {
    return
  }
}

function res7n9n11(data, callSetPlayers) {
  if (data.type === 7 || data.type === 9 || data.type === 11) {
    callSetPlayers(data.users)
  } else {
    return
  }
}

function res13(data, callSetIsChecked, navigate) {
  if (data.type === 13) {
    callSetIsChecked(data.users)
    navigate('/game/play/result')
  } else {
    return
  }
}

function res15(data, callSetPlayers) {
  if (data.type === 15) {
    callSetPlayers(data.users)
  } else {
    return
  }
}
