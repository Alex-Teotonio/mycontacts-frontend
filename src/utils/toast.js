import EventManager from "../services/EventManager";

export const toastManager = new EventManager();

export default function toast(type, text) {
  toastManager.emit('addtoast', {type, text})
}