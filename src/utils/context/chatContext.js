import {createContext} from 'react'

export const ChatContext = createContext({
    currentUser: {},
    setCurrentUser: () => {},
    currentContactOrder: [],
    setCurrentContactOrder: () => {},
    isBot: false,
    setIsBot: () => {},
})