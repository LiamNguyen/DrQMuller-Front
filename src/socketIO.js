let socketIOClient;

export default {
  init(socket) {
    socketIOClient = socket;
  },

  get socket() {
    return socketIOClient;
  }
};
