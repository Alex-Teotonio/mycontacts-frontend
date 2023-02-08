export default class EventManager {
  constructor() {
    this.listeners = {
      addtoast: 
    }
  }

  on(event, listener)  {
    if(!this.listeners[event]) {
      this.listeners[event] = []
    }

    this.listeners[event].push(listener)
  }

  emit(event, payload) {
    if(!this.listeners[event]) {
      return;
    }
    this.listeners[event].forEach((listener) => {
      listener(payload)
    })
  }
}

