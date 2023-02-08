import { Container } from "./style";
import ToastMessage from "../ToastMessage";
import { useEffect, useState } from "react";

export default function ToastContainer() {

  const [messages, setMessages] = useState([])

  useEffect(() => {
    function handleAddToast(event) {

    const {type, text} = event.detail;

      setMessages((prevState) => [
        ...prevState,
        {id: Math.random(), type, text}
      ]);
    }

    document.addEventListener('addtoast',handleAddToast)

    return() => {
      document.removeEventListener('addtoast', handleAddToast)
    }
  },[])
  return (
    <Container>
      {
        messages.map((m) => (
          <ToastMessage
            key={m.id}
            type={m.type}
            text={m.text}
          />
        ))
      }
    </Container>
  )
}