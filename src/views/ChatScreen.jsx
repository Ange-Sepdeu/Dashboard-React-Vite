import React, {useEffect, useState} from 'react'
import ContactContainer from '../components/chatscreen/ContactContainer'
import ChatContainer from '../components/chatscreen/ChatContainer'
import "../css/chatscreen.css"

function ChatScreen() {
  const [contact, setContact] = useState(null)
  const setCurrentContact = (obj) => {
      setContact(obj)
  }

  useEffect(() => {
    console.log("OBJ", contact)
  }, [contact])
  return (
    <>
      <div className='main-container'>
        <ContactContainer 
        setCurrentContact={setCurrentContact}/>
         <ChatContainer contact={contact} />
      </div>
    </>
  )
}

export default ChatScreen