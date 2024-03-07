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
  RES_FINISH_GAME: 17,
  REQ_EXIT_ROOM: 18,
  RES_EXIT_ROOM: 19
}

let sock

export function connectWebSocket(msg, endpoint, callSetConnection, callSetPlayers, callSetIsGameMaster, callSetTopic, callSetIsChecked, navigate) {
  sock = new WebSocket(endpoint)

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
    res15(dataInJs, callSetPlayers, callSetTopic, callSetIsChecked, navigate)
    res17(dataInJs, callSetConnection, callSetPlayers, callSetIsGameMaster, callSetTopic, callSetIsChecked, navigate)
    res19(dataInJs, callSetPlayers, callSetIsGameMaster)
  }
}

export function sendWs(sock, data) {
  sock.send(JSON.stringify(data))
}

export function closeWs(sock) {
  sock.close()
}

function res1(data, callSetPlayers, callSetIsGameMaster, navigate) {
  if (data.type === 1) {
    callSetPlayers(data.users)
    if (data.isGameMaster) {
      callSetIsGameMaster(true)
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
    callSetIsChecked(true)
    navigate('/game/play/result')
  } else {
    return
  }
}

function res15(data, callSetPlayers, callSetTopic, callSetIsChecked, navigate) {
  if (data.type === 15) {
    callSetPlayers(data.users)
    callSetTopic(data.topic)
    callSetIsChecked(false)
    navigate('/game')
  } else {
    return
  }
}

function res17(data, callSetConnection, callSetPlayers, callSetIsGameMaster, callSetTopic, callSetIsChecked, navigate) {
  if (data.type === 17) {
    callSetConnection(null)
    callSetPlayers([])
    callSetIsGameMaster(false)
    callSetTopic({})
    callSetIsChecked(false)
    navigate('/')
    closeWs(sock)
  } else {
    return
  }
}

function res19(data, callSetPlayers, callSetIsGameMaster) {
  if (data.type === 19) {
    callSetPlayers(data.users)
    if (data.isGameMaster) {
      callSetIsGameMaster(true)
    }
  } else {
    return
  }
}
