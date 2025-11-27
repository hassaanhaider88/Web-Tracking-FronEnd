import { io } from 'socket.io-client'
import { getToken } from './authHelpers'

let socket = null

export function connectSocket(){
  if (socket) return socket
  const token = getToken()
  socket = io('https://web-tracking-backend.onrender.com', { auth: { token } })
  socket.on('connect', () => {
    console.log('socket connected', socket.id)
  })
  socket.on('connect_error', (err) => {
    console.warn('socket connect error', err.message)
  })
  return socket
}

export function getSocket(){ return socket }
