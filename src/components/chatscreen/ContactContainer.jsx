import React, { useContext, useState, useEffect } from 'react'
import TopLeftContainer from '../search/TopLeftContainer'
import { userContacts } from '../../utils/constants/chatData'
import SingleContact from "./contact/SingleContact"
import "../../css/contactContainer.css"
import { ChatContext} from '../../utils/context/chatContext'
import { sortContacts, searchContactFromChat } from '../../utils/scripts/script'
import { defaultMsg } from '../../utils/constants/botData'

function ContactContainer({setCurrentContact}) {
    const {setCurrentUser, currentContactOrder, setIsBot} = useContext(ChatContext)
    const [contacts, setContacts] = useState([])
   
    const searchContact = (e) => {
     if(e.target.value === "") {
        setContacts(sortContacts(userContacts))
      }
      else {
      const filteredContact = searchContactFromChat(e.target.value, sortContacts(userContacts))
      setContacts(filteredContact)
    }
  }
  useEffect(() => {
      setContacts(currentContactOrder)
    }, [currentContactOrder])

  return (
    <>
    <div className="contact-container">
        <TopLeftContainer 
         onChange={(e) => searchContact(e)}
        />
        <div className="below-contacts">
        <SingleContact
          src="../../src/assets/avatar.png"
          contactHeader="Chatgram"
          contactLastMessage="Chatgram Web was Updated"
          onClickHandler={() => 
        {
            setCurrentUser({
            id:-1,
            name: "ChatBot",
            image: "../../src/assets/avatar.png",
            conversation: defaultMsg
          }), setIsBot(true)
        }
      }
          chatTime="18:41"
          unReadMessages={1}
        />
        {
            contacts?.map((contact) => {
              if(contact.id != 3)
                return(
                    <>
                    <div
                     key={contact.id}
                    >
                    <SingleContact 
                    onClickHandler={() => {
                      setCurrentUser(contact), setIsBot(false),
                      (event) => setCurrentContact(contact)
                    }
                    }
                    src={contact.image}
                    contactHeader={contact.name}
                    contactLastMessage={contact.conversation[contact.conversation.length - 1].message}
                    chatTime={contact.conversation[contact.conversation.length - 1].time}
                    unReadMessages={contact.unReadMessages}
                    />
                    </div>
                    </>
                );
            })
        }
        </div>
    </div>
    </>
  )
}

export default ContactContainer