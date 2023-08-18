import { useEffect, useState } from 'react'
import Register from './views/Register'
import ContactContainer from './components/chatscreen/ContactContainer'
import ChatScreen from "./views/ChatScreen"
import { ChatContext } from './utils/context/chatContext'
import { userContacts } from './utils/constants/chatData'
import { sortContacts } from './utils/scripts/script'
import { Route, RouterProvider, BrowserRouter as Router, Routes, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Dashboard from './views/Dashboard'
import { ThemeContext } from './utils/context/ThemeContext';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Register/>}>
        <Route path='/chat' element={<ChatScreen/>}/>
      </Route>
 )
  )

  const routes = <Router>
  <Routes>
        <Route exact path='/' element={<Register/>}/>
        <Route path='/chat' element={<ChatScreen/>}/>
  </Routes>
</Router>

function App() {
  const [ currentUser, setCurrentUser] = useState(sortContacts(userContacts)[0].id == 3 ? sortContacts(userContacts)[1] : sortContacts(userContacts)[0])
  const [currentContactOrder, setCurrentContactOrder] = useState(sortContacts(userContacts))
  const [isBot, setIsBot] = useState(false)
  const [theme, setTheme] = useState("light")
  return (
    <>
      <ThemeContext.Provider value={{theme, setTheme}}>
      <Dashboard />
      </ThemeContext.Provider>
      {/* <ChatContext.Provider value={{currentUser, setCurrentUser, currentContactOrder, setCurrentContactOrder, isBot, setIsBot}}>
      {routes}
      </ChatContext.Provider> */}
    </>
  )
}

export default App
