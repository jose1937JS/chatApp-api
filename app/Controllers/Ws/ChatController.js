'use strict'

class ChatController {
	constructor ({ socket, request }) {
		this.socket  = socket
		this.request = request
	}

	onMessage(message) {
		this.socket.broadcastToAll('message', message)
	}

	onError(error) {
		console.log(error)
	}
}

module.exports = ChatController
