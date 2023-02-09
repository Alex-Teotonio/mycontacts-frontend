import { Container } from "./style";
import ToastMessage from "../ToastMessage";
import { useEffect, useState } from "react";

import { toastManager } from "../../../utils/toast";

export default function ToastContainer() {

  const [messages, setMessages] = useState([])

  useEffect(() => {
    function handleAddToast({type, text, duration} ) {
      setMessages((prevState) => [
        ...prevState,
        {id: Math.random(), type, text, duration}
      ]);
    }

    toastManager.on('addtoast',handleAddToast)

    return() => {
      toastManager.removeListener('addtoast', handleAddToast)
    }
  },[])

  function handleRemoveMessage(id) {
    setMessages((prevState) => prevState.filter((message) => message.id !== id))
  }
  return (
    <Container>
      {
        messages.map((m) => (
          <ToastMessage
            key={m.id}
            id={m.id}
            type={m.type}
            text={m.text}
            duration={m.duration}
            onRemoveMessage={handleRemoveMessage}
          />
        ))
      }
    </Container>
  )
}